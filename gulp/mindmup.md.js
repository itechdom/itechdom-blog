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

		function cleanHTML(html){
			var less= "&lt;";
			var more = "&gt;";
			var quote = "&quot;";

			//replace code with tags
			html = html.replaceAll(less,"<");
			html = html.replaceAll(more,">");
			//remove p tags
			html = html.replaceAll("<span>","");
			html = html.replaceAll("</span>","");

			html = html.replaceAll("<p>","");
			html = html.replaceAll("</p>","");


			html = html.replaceAll("</div>","");
			html = html.replaceAll("<div>","");

			html = html.replaceAll("</pre>","");
			html = html.replaceAll("<pre>","");


			html = html.replaceAll('<code class="js">',"```js\n");
			html = html.replaceAll('<code>',"```\n");
			html = html.replaceAll('</code>',"\n```");
			return html;
		}

		function convertToMarkdown(mindmap){
			var f = "";
			mindmap.map((idea)=>{
				if(idea.title){
					//if(idea.order >= 1 || idea.order <=3){
					//}
					f+= "#"+idea.title;
					f+="\n";
				}
				if(idea.content){
					var cleanContent = cleanHTML(idea.content);
					f += cleanContent;
					f+="\n";
				}
			})
			return f;
		}
		function saveToDB(json){

			var url = 'mongodb://localhost:27017/test';
			MongoClient.connect(url, function(err, db) {
				console.log("Connected correctly to server");
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
		return gulp.src(options.drive+'/**/*.mup')
						    .pipe(data(function(file) {
						    var mindmap = parseMindmap(file);
						    var pArr = [];
						    traverseMindmap(mindmap.ideas,pArr,undefined);
						    var sortedFileArr = pArr.sort(sortBy('order'));
						    var finalContent = convertToMarkdown(sortedFileArr);
						    file.contents = new Buffer(finalContent);
						    }))

						    .pipe(rename(function (path) {
						    path.extname = ".md"
						    }))
						    .pipe(gulp.dest('./content/md-blog'))
						    });

						    };
