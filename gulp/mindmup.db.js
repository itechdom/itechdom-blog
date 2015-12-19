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


module.exports = function(options) {

	gulp.task('mindmap:db', function(options) {
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
		function saveToDB(json){

			var url = 'mongodb://localhost:27017/test';
			MongoClient.connect(url, function(err, db) {
					insertDocuments(db, function() {
						db.close();
					});
			});
			var insertDocuments = function(db, callback) {
				// Get the documents collection 
				var collection = db.collection('hello');
				collection.insert(
						{data:json}, function(err, result) {
											   callback(result);
										   });
			}
			
		}
		return gulp.src('./mindmaps/**/*.mup.json')
						.pipe(data(function(file) {
						var mindmap = parseMindmap(file);
						var finalContent = processMindmap(mindmap);
						saveToDB(finalContent);
						finalContent = JSON.stringify(finalContent);
						file.contents = new Buffer(finalContent);
						}))
						.pipe(gulp.dest('./json-blog'))
						.pipe(concat('all-blog.json'))
						.pipe(gulp.dest('./json-blog'))

						});

						};
