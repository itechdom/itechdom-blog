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
var mindmapAll;
var levelsDeep;

module.exports = function(options) {

	gulp.task('mindmap:md', function(done) {

		function traverseMindmap(mindmap,pArr,parent,level){
			for(var key in mindmap){
				var obj = mindmap[key];
				var pObject = {};
				if(obj.title){
					pObject.title = obj.title;
				}
				if(obj.attr){
					var attr = obj.attr;
					var attachment = attr.attachment;
					if(attachment){
						pObject.content = attachment.content;
					}
				}
				if(parent){
					pObject.level = level;
				}
				else{
					pObject.level = 0;
				}
				pObject.key = parseFloat(key);
				pObject.id = obj.id;
				pArr.push(pObject);
				traverseMindmap(obj.ideas,pArr,obj,levelsDeep++);
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
						var element = cheerio.load(flatMindmap[key]);
						element('*').each(function(i, elem) {
							element(this).removeAttr('style');
						});
						pushedContent.content = element.html();
						break;
					case "id":
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
		function convertToMarkdown(mindmap){
			var f = "";
			mindmap.map((idea)=>{
				if(idea.title && idea.level){
					if(idea.level >= 1 || idea.level <=3){
						var head = "#".repeat(idea.level);
						head += " ";
						f+=head;
					}
					f+= idea.title;
					f+="\n";
				}
				if(idea.content && idea.level){
					f += idea.content;
					f+="\n";
				}
			})
			return f;
		}

		return gulp.src(options.drive+'/**/Elm.mup')
						    .pipe(data(function(file) {
						    var mindmap = parseMindmap(file);
						    var pArr = [];
						    var mindmapAll = mindmap.ideas;
						    levelsDeep = 0;
						    traverseMindmap(mindmap.ideas,pArr,undefined);
						    var finalContent = convertToMarkdown(pArr);
						    file.contents = new Buffer(finalContent);
						    }))

						    .pipe(rename(function (path) {
						    path.extname = ".md"
						    }))
						    .pipe(gulp.dest('./content/md-blog'))
						    });

						    };
