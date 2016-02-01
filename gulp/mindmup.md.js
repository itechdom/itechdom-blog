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

/**
 *
 * Best way to process this imo is to separate level 0 mindmap titles intot heir own 
 * Then apply some deep levels styling using one method, this should include appending the rest into the parent
 *
 *
 **/

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
		function sortMindmap(unordered){
			var ordered = {};
			var floats = {};
			var arr = [];
			Object.keys(unordered)
				.sort(function(a,b){

					floats.a = parseFloat(a);	
					floats.b = parseFloat(b);

					//when both numbers are above 0 (right side of the mindmap), then reverse sort
					if(floats.a > 0 && floats.b > 0){
						if(floats.a < floats.b){
							return -1;
						}
						else{
							return 1;
						}
					}
					if(floats.a < floats.b){
						return 1; 
					}

					if(floats.a > floats.b){
						return -1;
					}
					return 0;
				})	
			.forEach(function(key) {
				arr.push(unordered[key]);
			});
			return arr;
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
				var head = "#"
				if(idea.level){
					head+="##";
				}
			head += " ";
			f+=head;
			f+= idea.title;
			f+="\n";
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
						    const unordered = mindmap.ideas;	
						    var ordered = sortMindmap(unordered);
						    var currentIndex = 0;
						    ordered.forEach((obj,index)=>{
						    	traverseMindmap(obj.ideas,pArr,undefined);
							if(currentIndex=0){
								pArr.splice(0,0,obj);
								currentIndex = pArr.length-1;
							}
							pArr.splice(currentIndex,0,obj);
						    })
						    var finalContent = convertToMarkdown(pArr);
						    file.contents = new Buffer(finalContent);
						    }))
						    .pipe(rename(function (path) {
						    path.extname = ".md"
						    }))
						    .pipe(gulp.dest('./content/md-blog'))
						    });

						    };
