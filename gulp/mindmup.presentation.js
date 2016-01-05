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
var slideTemplate = `<div class="reveal">
<div class="slides">
</div>
</div>`
var slideElement = cheerio.load(slideTemplate);
var mindmapAll;
module.exports = function(options) {

	gulp.task('mindmap:presentation', function(options) {

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
				}
				obj.order = pContent.order;
				pContent.order = parseFloat(pContent.order);
				pContent.id = obj.id;
				pArr.push(pContent);
				traverseMindmap(obj.ideas,pArr,obj);
			}
		}
		function parseMindmap(file){
			var mindmap = JSON.parse(String(file.contents));
			return mindmap;
		}
		String.prototype.replaceAll = function(str1, str2, ignore) 
		{
			return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
		} 
		function convertToHTML(mindmap){
			var f = "";
			var count = 0;
			var parentId;
			mindmap.map((idea)=>{
				var fruits = [];
				var section;
				count++;
				if(idea.title){
					parentId = count;
					slideElement('.slides').append(`<section class="parent${parentId}">${idea.title}</section>`);
				}
				if(idea.content){
					slideElement(`.parent${parentId}`).append('<section>'+idea.content+'</section>');
				}
			})
			return slideElement.html();
		}
		return gulp.src('./mindmaps/**/*.presentation.mup.json')
						.pipe(data(function(file) {
						var mindmap = parseMindmap(file);
						var pArr = [];
						mindmapAll = mindmap.ideas;
						traverseMindmap(mindmap.ideas,pArr,undefined);
						var sortedFileArr = pArr.sort(sortBy('order'));
						var finalContent = convertToHTML(sortedFileArr);
						var less= "&lt;"
						var more = "&gt;"

			//replace code with tags
			finalContent = finalContent.replaceAll(less,"<");
			finalContent = finalContent.replaceAll(more,">");

			//remove p tags
			finalContent = finalContent.replaceAll("<span>","");
			finalContent = finalContent.replaceAll("</span>","");

			finalContent = finalContent.replaceAll("<div>","</br>");
			finalContent = finalContent.replaceAll("</div>","");

			finalContent = finalContent.replaceAll("<p>","");
			finalContent = finalContent.replaceAll("</p>","");

			file.contents = new Buffer(finalContent);
			var nm = file.path.split("/").pop();
			file.path = process.cwd()+"/presentations/"+nm;
			}))
			.pipe(rename(function (path) {
			path.extname = ".html"
			}))
			.pipe(gulp.dest('./presentations'))
			});

			};
