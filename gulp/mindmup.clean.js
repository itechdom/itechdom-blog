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
var url;
var cheerio = require('cheerio');


module.exports = function(options) {

	gulp.task('mindmap:clean', function(options) {

		return gulp.src('./mindmaps/Branchit.mup.json')
		.pipe(data(function(file){
			url = 'mongodb://localhost:27017/test';
			MongoClient.connect(url, function(err, db) {
				removeDocuments(db,function(){
					db.close();	
				})
			});
			var removeDocuments = function(db, callback) {
				// Get the documents collection
				var collection = db.collection('hello');
				collection.remove(
					{}, function(err, result) {
									  callback(result);
								  });
			}
		}));
	})
};
