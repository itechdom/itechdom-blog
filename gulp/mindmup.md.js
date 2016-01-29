//mindmup conversion here
//the only thing we need is to concatentate all the ideas together in one file
//go through ideas one by one, traverse the tree till you get an attachment, find the title of that idea and add to the attachement
//If there's no attachement, then just append the title
'use strict';

var gulp = require('gulp');
var data = require('gulp-data');
var path = require('path');
var concat = require('gulp-concat');
var flatten = require('flat');
var rename = require("gulp-rename");
var MongoClient = require('mongodb').MongoClient
var cheerio = require('cheerio');
var sortBy = require('sort-by');

module.exports = function(options) {

	gulp.task('mindmap:md', function(done) {
		function traverseMindmap(mindmap,pArr,parent){
			for(var key in mindmap){
				var obj = mindmap[key];
				var pContent = {};

				if(obj.title){
					pContent.title = obj.title;
				}
				if(obj.attr){
					var attr = obj.attr;
					var attachment = attr.attachment;
					if(attachment){
						pContent.content = attachment.content;
					}
				}
				//if it's decimal, then add the new order to the object by removing any decimal to its order as well
				if(parent){
					pContent.indent = 2;
					var pKey = obj.title.split(".")[0];
					if(parent.order){
						/**if(key.indexOf(".") > -1){
						  pContent.order = key.split(".").join(""); 
						  }
						 **/
						if(parent.order.indexOf(".") > -1){
							pContent.order = parent.order+pKey;
						}
						else{
							pContent.order = parent.order+"."+pKey;
						}
					}
				}
				else{
					pContent.order = key.split(".")[0];
					pContent.indent = 1;
				}
				obj.order = pContent.order;
				pContent.order = parseFloat(pContent.order);
				pContent.id = obj.id;
				pArr.push(pContent);
				traverseMindmap(obj.ideas,pArr,obj);
			}
		}
		function processMindmap(mindmap){
			//flatten the json
			//iterate over all keys
			//strip out the numbers and rejoin again
			//count the number of ideas in the key
			//indent accordingly
			//store into a variable
			//write out that variable
			var flatMindmap = flatten(mindmap);
			var fileArr = [];
			//add the first title and content (title of the whole mindmap)
			fileArr[0] = {title:flatMindmap.title,content:flatMindmap.content,indent:0};
			for(var key in flatMindmap){
				//determine the level of indentation
				var pushedContent = {};
				var indentLevel = key.split("ideas").length-1;
				pushedContent.indent = indentLevel;
				var keyArr = key.split('.');
				var keyName = keyArr[keyArr.length-1];
				switch(keyName){
					case "title":
						//add proper formatting here
						pushedContent.title = flatMindmap[key];
						break;
					case "content":
						//add proper formatting here
						//
						var element = cheerio.load(flatMindmap[key]);
						var fruits = [];
						element('*').each(function(i, elem) {
							element(this).removeAttr('style');
							// fruits[i] = $(this).text();
						});
						pushedContent.content = element.html();
						break;
				}
				if(pushedContent.title || pushedContent.content){
					fileArr.push(pushedContent);
				}
			}
			return fileArr;
		}

		function parseMindmap(file){
			var mindmap = JSON.parse(String(file.contents));
			return mindmap;
		}
		String.prototype.replaceAll = function(str1, str2, ignore) 
		{
			return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
		} 

		function cleanHTML(html){
			return html;
		}

		function convertToMarkdown(mindmap){
			var f = "";
			mindmap.map((idea)=>{
				if(idea.title && idea.indent){
					if(idea.indent >= 1 || idea.indent <=3){
						var head = "#".repeat(idea.indent);
						head += " ";
						f+=head;
					}
					f+= idea.title;
					f+="\n";
				}
				if(idea.content && idea.indent){
					f += idea.content;
					f+="\n";
				}
			})
			return f;
		}
		return gulp.src(options.drive+'/**/*.mup')
						    .pipe(data(function(file) {
						    var mindmap = parseMindmap(file);
						    var content = processMindmap(mindmap);
						    var finalContent = convertToMarkdown(content);
						    file.contents = new Buffer(finalContent);
						    }))

						    .pipe(rename(function (path) {
						    path.extname = ".md"
						    }))
						    .pipe(gulp.dest('./content/md-blog'))
						    });

						    };
