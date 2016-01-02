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
module.exports = function(options) {

	gulp.task('mindmap:presentation', function(options) {

		function traverseMindmap(mindmap,pArr,parentKey){
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
				if(parentKey.indexOf(".") > -1){
					var order = parentKey+key;
					pContent.order = parseFloat(order);
				}
				else if(parentKey == ""){
					var order = key;
					pContent.order = parseInt(order);
				}
				else{
					var order = parentKey+"."+key;
					pContent.order = parseFloat(order);
				}
				pContent.id = obj.id;
				pArr.push(pContent);
				traverseMindmap(obj.ideas,pArr,key);
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
						traverseMindmap(mindmap.ideas,pArr,"");
						var sortedFileArr = pArr.sort(sortBy('order'));
						console.log(sortedFileArr);
						var finalContent = convertToHTML(sortedFileArr);
						var less= "&lt;"
						var more = "&gt;"

			//replace code with tags
			finalContent = finalContent.replaceAll(less,"<");
			finalContent = finalContent.replaceAll(more,">");

			//remove p tags
			finalContent = finalContent.replaceAll("<span>","");
			finalContent = finalContent.replaceAll("</span>","");
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
