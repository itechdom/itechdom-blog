'use strict';
var template = require('./mindmapView.html');
var $ = require('jquery');
var PIXI = require('pixi.js');

class mindmapView {

	createText(text){
		var style = this.createStyle();
		var basicText = new PIXI.Text(text,style);
		basicText.x = 0;
		basicText.y = 0;
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
	createBox(){
		var box = new PIXI.Graphics();
		box.lineStyle(2, 0x0000FF, 1);
		box.beginFill(0xFF700B, 1);
		box.drawRect(0, 0, 20, 20);
		return box;
	}
	traverse(mindmap,processFunction,parent){
		var count = 0;
		for(var key in mindmap){
			var obj = mindmap[key];
			obj.order = count++;
			processFunction(obj,parent,key);
			this.traverse(obj.ideas,processFunction,obj);
		}
	}
	update(node){
		console.log(node);
	}
	render(tree){
		this.tree = tree;
		var count;
		var x,y;
		var px,py;
		var rootX,rootY;
		var order;
		var length;
		this.traverse(tree,(mindmapObj,parent,key)=>{
			var order = mindmapObj.order; 
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
				length = Object.keys(parent.ideas).length; 
				var arrange = -1*Math.ceil(length/2) + order;
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
				if(!parent.x || !parent.y){
					x = px + 20*3;
					y = py + (arrange*20);
				}
				else{
					x = parent.x + 20*3;
					y = parent.y + (arrange*20);
				}
				mindmapObj.x = x;
				mindmapObj.y = y;
			}
		var box = this.createBox();
		// events for drag start
		box
			.on('mousedown', onDragStart)
			.on('touchstart', onDragStart)
			// events for drag end
			.on('mouseup', onDragEnd)
			.on('mouseupoutside', onDragEnd)
			.on('touchend', onDragEnd)
			.on('touchendoutside', onDragEnd)
			// events for drag move
			.on('mousemove', onDragMove)
			.on('touchmove', onDragMove);

		box.interactive = true;

		var container = new PIXI.Container();
		box.x = x;
		box.y = y;

		var sText = mindmapObj.title.slice(0,10);
		var text = this.createText(sText);

		box.addChild(text);

		this.stage.addChild(box);

		})
		this.renderer.render(this.stage);

		var that = this;

		requestAnimationFrame( animate );

		function animate() {
			requestAnimationFrame(animate);
			that.renderer.render(that.stage);
		}
		function onDragStart(event)
		{
			// store a reference to the data
			// the reason for this is because of multitouch
			// we want to track the movement of this particular touch
			this.data = event.data;
			this.alpha = 0.5;
			this.dragging = true;
		}

		function onDragEnd()
		{
			this.alpha = 1;
			this.dragging = false;
			// set the interaction data to null
			this.data = null;
			//rerender the tree;
			that.update(this);
		}
		function onDragMove()
		{
			if (this.dragging)
			{
				var newPosition = this.data.getLocalPosition(this.parent);
				this.position.x = newPosition.x;
				this.position.y = newPosition.y;
			}
		}

	}
	constructor() {
		this.renderer = PIXI.autoDetectRenderer(1000, 1000, { antialias: true });
		document.body.appendChild(this.renderer.view);
		this.stage = new PIXI.Container();
		this.stage.interactive = true;
	}


}
module.exports = new mindmapView();
