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


module.exports = function(options) {

      gulp.task('test:mindmap', function(options) {
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
			fileArr[{title:flatMindmap.title,content:flatMindmap.content,indent:0}];
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
						
						break;
					case "content":
						//add proper formatting here
						pushedContent.content = flatMindmap[key];
						break;
				}
				fileArr.push(pushedContent);
			}
			return fileArr;
		}
		function parseMindmap(file){
			var mindmap = JSON.parse(String(file.contents));
			return mindmap;
		}
		function convertToMarkdown(mindmap){
			var f = "";
			mindmap.map((idea)=>{
				if(idea.title && idea.indent){
					if(idea.indent >= 1){
						f+="* ";
					}
				f += idea.title;
				f+="\n";
				}
				if(idea.content && idea.indent){
					if(idea.indent >= 1){
						f+="* ";
					}
				f += "* ";
				f += idea.content;
				f+="\n";
				}
			})
			return f;
		}
		return gulp.src('./mindmaps/**/*.mup.json')
			.pipe(data(function(file) {
				var mindmap = parseMindmap(file);
				var content = processMindmap(mindmap);
				var finalContent = convertToMarkdown(content);
				file.contents = new Buffer(finalContent);
			}))
			.pipe(rename(function (path) {
				path.extname = ".md"
			}))
			.pipe(gulp.dest('./blog'));
	});

};

