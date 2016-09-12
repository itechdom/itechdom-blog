//turn this into functional transformations of data
var cheerio = require('cheerio');
var toMarkdown= require('to-markdown');
var R = require('ramda');

String.prototype.replaceAll = function(str1, str2, ignore) 
{
	return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 
//from what I can see we are doing these things:
//1) cleaning the json object coming from Mindmup
//2) HTML parser: toHTML, cleanHTML and isHTML 
//3) Markdown Parser: to Markdown
//separate HTML parser on its own


/** 
 * Utilities
**/
const flattenObj = obj => {
    const go = obj_ => R.chain(([k, v]) => {
        if (typeof v == 'object') {
            return R.map(([k_, v_]) => [`${k}.${k_}`, v_], go(v))
        } else {
            return [[k, v]]
        }
    }, R.toPairs(obj_))
    return R.fromPairs(go(obj))
}

/** 
 * Process Mindmap Object
**/
//special prop
var prop = R.curry(function(prop,obj){
    var obj = {};
    return{
        prop:obj[prop]
    }
})
var trace = function(obj){
    console.log(obj);
    return obj;
}


//toPairs, then filter the each array, then from Pairs
//arr -> arr
//check's if a key is in a given arr
var checkKey = R.curry(function(checkArr,pair){
    return R.indexOf(pair[0], checkArr) !== -1;
});
var isRightProp = checkKey(["id","title","attr.attachment.content"]);
var filterObj = R.filter(isRightProp);
var processObj = R.compose(trace, R.fromPairs, filterObj, R.toPairs, flattenObj);
exports.processObj = processObj;


var ops = {
	processItem(obj){
        
	}
    //I am checking type (there's a chance I can do a monad here)
    ,clean(mindmap){
        var isArr = Array.isArray(mindmap.ideas);
        var ideasArr = [];
        var tmpObj = {};
        if(!isArr && mindmap.ideas){
            Object.keys(mindmap.ideas).map((key)=>{
                tmpObj = mindmap.ideas[key];
                ideasArr.push(tmpObj);
            })
        }
        ideasArr.forEach((obj,index)=>{
            var pObject = this.processItem(obj);
            pObject.ideasArr = ideasArr;
            mindmap[index] = pObject;
            this.clean(pObject.ideas);
        })
	}
	,isHTML(content){
		return /<[a-z][\s\S]*>/i.test(content)
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
		html = html.replace(/<(?:.|\n)*?>/gm, '');
		return html;
	}
	,ToMarkdown(mindmap){
		var f = "";
		mindmap.map((idea)=>{
			if(idea.title){
				var head = "#"
				if(idea.level){
					head+="##";
				}
				head += " ";
				f+=head;
				f+= idea.title;
				f+="\n";
			}
			if(idea.content){
				var el = cheerio.load(idea.content);
				idea.content = el.root().html();
				idea.content = toMarkdown(idea.content);
				idea.content = this.cleanHTML(idea.content);
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
		var slideTemplate = `<div class="reveal">
			<div class="slides">
			</div>
			</div>`
			var slideElement = cheerio.load(slideTemplate);
		mindmap.map((idea)=>{
			count++;
			if(idea.title){
				parentId = count;
				var cleanTitle = idea.title;
				slideElement('.slides').append(`<section class="parent${parentId}"><h3>${cleanTitle}</h3></section>`);
			}
			if(idea.content){
				var code = cheerio.load(idea.content);
				idea.content= idea.content.replaceAll('&lt;','<');
				idea.content = idea.content.replaceAll('&gt;','>');
				idea.content = idea.content.replaceAll('</div>','');
				idea.content = idea.content.replaceAll('<div>','<div></div>');

				var cleanContent = idea.content;
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
				}
			}
		})
		return slideElement.html();
	}
}
