var cheerio = require('cheerio');
var slideTemplate = `<div class="reveal">
<div class="slides">
</div>
</div>`
var slideElement = cheerio.load(slideTemplate);


String.prototype.replaceAll = function(str1, str2, ignore) 
{
	return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

var ops = {
	processItem(obj,key){
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
		pObject.key = parseFloat(key);
		pObject.id = obj.id;
		return pObject;
	}
	,traverse(mindmap,operation){

	}
	,flatten(mindmap,pArr,level){
		for(var key in mindmap){
			var obj = mindmap[key];
			var pObject = this.processItem(obj,key);
			if(!level){
				pObject.level = 1;
			}
			else{
				pObject.level = level;
			}
			pArr.push(pObject);
			if(!levelsDeep){
				var levelsDeep = 0;
			}
			this.flatten(obj.ideas,pArr,levelsDeep++);
		}
	}
	,sort(unordered){
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
	,toJson(file){
		var mindmap = JSON.parse(String(file.contents));
		return mindmap;
	}
	,cleanHTML(html){
		return html;
	}
	,ToMarkdown(mindmap){
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
		if(idea.content){
			f += idea.content;
			f+="\n";
		}
		})
		return f;
	}
	,toHTML(mindmap){
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
				var cleanTitle = idea.title.split(".")[1];
				if(!cleanTitle)cleanTitle = idea.title;
				slideElement('.slides').append(`<section class="parent${parentId}"><h3>${cleanTitle}</h3></section>`);
			}
			if(idea.content){
				var cleanContent = this.cleanHTML(idea.content);
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
}
module.exports = ops;

