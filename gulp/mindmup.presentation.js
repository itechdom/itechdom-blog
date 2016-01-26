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
var hljs = require('highlight.js');

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
		function cleanHTML(html){

			var less= "&lt;";
			var more = "&gt;";
			var quote = "&quot;";

			//replace code with tags
			html = html.replaceAll(less,"<");
			html = html.replaceAll(more,">");

			html = html.replaceAll(quote,'"');

			//remove p tags
			html = html.replaceAll("<span>","");
			html = html.replaceAll("</span>","");

			html = html.replaceAll("<p>","");
			html = html.replaceAll("</p>","");


			html = html.replaceAll("</div>","");
			html = html.replaceAll("<div>","<div></div>");

			return html;
		}
		function convertToHTML(mindmap){
			var f = "";
			var count = 0;
			var parentId;

			mindmap.map((idea)=>{
				var fruits = [];
				var section;
				var cHTML;
				count++;
				if(idea.title){
					parentId = count;
					var cleanTitle = cleanHTML(idea.title);
					slideElement('.slides').append(`<section class="parent${parentId}"><h3>${cleanTitle}</h3></section>`);
				}
				if(idea.content){
					var cleanContent = cleanHTML(idea.content);
					var code = cheerio.load(cleanContent);
					var hCode;
					code('*').each(function(i, elem) {
						var codeBlock = code(this).find('code').html();
						if(codeBlock){
							hCode = codeBlock;
						}
					});
					slideElement(`.parent${parentId}`).append('<br>'+cleanContent);
					if(hCode){
						slideElement(`.parent${parentId}`).find('code').addClass('prettyprint');
						slideElement(`.parent${parentId}`).find('code').addClass('lang-js');
					}
				}
			})
			return slideElement.html();
		}
		return gulp.src('./mindmaps/**/RxJS.presentation.mup.json')
			.pipe(data(function(file) {
				var mindmap = parseMindmap(file);
				var pArr = [];
				mindmapAll = mindmap.ideas;
				traverseMindmap(mindmap.ideas,pArr,undefined);
				var sortedFileArr = pArr.sort(sortBy('order'));
				var finalContent = convertToHTML(sortedFileArr);

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
