'use strict';
var template = require('./mindmapView.html');
var $ = require('jquery');
var PIXI = require('pixi.js');

class mindmapView {

	createText(x,y,text){
		var style = this.createStyle();
		var basicText = new PIXI.Text(text,style);
		basicText.x = x;
		basicText.y = y;
		return basicText;
	}
	createLine(box1,box2){
		var line = new PIXI.Graphics();
		line.lineStyle(1, 0x0000FF, 1);
		line.moveTo(box1.x + 120, box1.y + 120);
		line.lineTo(box2.x + 200, box2.y + 200);
		line.endFill();
		return line;
	}

	createStyle(){
		var style = {
			font : 'bold italic 10px Arial',
			fill : '#F7EDCA',
			wordWrap : true,
			wordWrapWidth : 440
		};

		return style;

	}
	createBox(x,y){
		var graphics = new PIXI.Graphics();
		graphics.lineStyle(2, 0x0000FF, 1);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(x, y, 20, 20);
		return graphics;
	}
	traverse(mindmap,processFunction,parent){
		for(var key in mindmap){
			var obj = mindmap[key];
			processFunction(obj,parent,key);
			this.traverse(obj.ideas,processFunction,obj);
		}
	}
	render(tree){
		var count;
		var x,y;
		var px,py;
		var rootX,rootY;
		var order;
		var length;
		this.traverse(tree,(mindmapObj,parent,key)=>{
			var order = parseInt(key);
			if(!parent){
				 length = Math.ceil(tree.length/2);
				 var arrange = -1*length + order;
				 var margin = (order * 20)+(order*20*5);

				 px = 0;
				 py = 300 + (arrange*20)+20+margin;

				 x = px;
				 y = py;
			}
			else{
				//factors for position: parent, number of siblings 
				//factors for margin: Same level nodes above and beyond, or we can calculate the height of each level in a trunk each time
				//var order = parent.ideas.indexOf(mindmapObj);
				length = Object.keys(parent.ideas).length; 
				var arrange = -1*length + order;
				var margin = (arrange * 20);
				if(length == 1){
					arrange = 0;
					margin = 0;
				}
				else{
					if(arrange >= 0){
						arrange = arrange + 1;
						margin = (arrange * 20);
					}
				}
				if(parent.title == "Concepts"){
					console.log(arrange,margin,order);
				}
				if(!parent.x || !parent.y){
					 x = px + 20*3;
					 y = py + (arrange*20);
				}
				else{
					 x = parent.x + 20*3;
					 y = parent.y + (arrange*20)+margin;
				}
				mindmapObj.x = x;
				mindmapObj.y = y;
			}
			var box = this.createBox(x,y);
			var sText = mindmapObj.title.slice(0,10);
			var text = this.createText(x,y,sText);
			this.stage.addChild(box);
			this.stage.addChild(text);
		})
		this.renderer.render(this.stage);
	}
	animate() {
		var flag = false;
		basicText.text = graphics.y;
		if(graphics.y === 0 || flag){
			flag = true;
			graphics.x++;
			graphics.y++;

			graphics2.x = graphics2.x + 3;
			graphics2.y = graphics2.y + 1;
		}
		if(graphics.y === 500 || !flag){
			if(graphics.y ===  0){
				flag = true;
			}
			else{
				flag = false
			}

			graphics.x --;
			graphics.y --;

			graphics2.x = graphics2.x - 3;
			graphics2.y = graphics2.y - 1;

		}
		graphics3.clear();
		renderer.render(stage);
		requestAnimationFrame( animate );
	}
	constructor() {
		this.renderer = PIXI.autoDetectRenderer(1000, 1000, { antialias: true });
		document.body.appendChild(this.renderer.view);
		this.stage = new PIXI.Container();
		this.stage.interactive = true;
	}
}
module.exports = new mindmapView();
