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
var slideTemplate = `<div class="reveal">
<div class="slides">
</div>
</div>`
var slideElement = cheerio.load(slideTemplate);

module.exports = function(options) {

	gulp.task('mindmap:presentation', function(options) {
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
				//By counting the number of ideas occurences
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
		function convertToHTML(mindmap){
			var f = "";
			var count = 0;
			var parentId;
			mindmap.map((idea)=>{
				var fruits = [];
				var section;
				count++;
				if(idea.title && idea.indent){
					parentId = count;
					slideElement('.slides').append(`<section class="parent${parentId}">${idea.title}</section>`);
				}
				if(idea.content && idea.indent){
					console.log(parentId);
					slideElement(`.parent${parentId}`).append('<section><section>'+idea.content+'</section></section>');
				}
			})
			return slideElement.html();
		}
		return gulp.src('./mindmaps/**/*.presentation.mup.json')
						.pipe(data(function(file) {
						var mindmap = parseMindmap(file);
						var content = processMindmap(mindmap);
						var finalContent = convertToHTML(content);

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
