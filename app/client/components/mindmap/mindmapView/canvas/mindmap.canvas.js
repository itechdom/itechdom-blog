'use strict';
var $ = require('jquery');
var PIXI = require('pixi.js');

const VERTICAL_MARGIN = 40;
const HORIZONTAL_MARGIN = 100;
const BOX_HEIGHT = 22;
const TEXT_MARGIN = 20;

//have a running height of the container

class mindmapView {

	createText(text){
		var style = this.createTextStyle();
		var basicText = new PIXI.Text(text,style);
		basicText.x = 0;
		basicText.y = 0;
		return basicText;
	}
	createLine(position1,position2){
		var line = new PIXI.Graphics();
		line.lineStyle(1, 0x0000FF, 1);
		line.moveTo(position1.x, position1.y);
		line.lineTo(position2.x, position2.y);
		line.endFill();
		return line;
	}
	createTextStyle(){
		var style = {
			font : '16px Arial',
			fill : '#000000',
			wordWrap : true,
			wordWrapWidth : 50
		};
		return style;
	}
	createBox(){
		//var shadowFilter = new PIXI.filters.DropShadowFilter();
		var box = new PIXI.Graphics();
		box.lineStyle(2, 0x000000, 1);
		box.beginFill(0xFFFFFF, 1);
		box.drawRect(0, 0, 80, 50);
		return box;
	}
	traverse(mindmap,processFunction,parent){
		var obj;
		var count = 0;
		//return upper sibling and below sibling
		for(var key in mindmap){
			obj = mindmap[key];
			obj.order = count;
			processFunction(obj,key,parent);
			this.traverse(obj.ideas,processFunction,obj);
			count++;
		}
	}
	drawLine(childContainer,parentContainer,childBox,parentBox){
		var line;
		//delete the line if it already exists
		if(line){
			this.stage.removeChild(line);
		}
		//FIX: for a quirk in pixi.js container coordinates
		if(childContainer.toGlobal(this.stage.position).y === 0){
			var childBoxPosition = childContainer.toGlobal(this.rootContainer.position);
			var parentBoxPosition = parentContainer.toGlobal(this.stage.position);
		}
		else{
			var childBoxPosition = childContainer.toGlobal(this.stage.position);
			var parentBoxPosition = parentContainer.toGlobal(this.stage.position);
		}

		childBoxPosition.x += childBox.x;
		childBoxPosition.y += childBox.y;
		parentBoxPosition.x += parentBox.x;
		parentBoxPosition.y += parentBox.y;

		line = this.createLine(childBoxPosition,parentBoxPosition);
		this.stage.addChild(line);
		return line;
	}
	update(node){
		var obj;
		var parent = node.obj;
		//change children
		for (var key in node.obj.ideas){
			obj = node.obj.ideas[key];
			if(parent.line){
				this.drawLine(obj.mainContainer,parent.mainContainer,obj.line);
			}
			obj.box.x = obj.box.x + 3;
		};
	}
	render(tree){

		this.tree = tree;
		var x,y;
		var length;
		var mainContainer;
		var box;
		var sText;
		var text;
		var sibling;
		var siblingHeight = 0;
		var arrangement;
		var debugRect;
		this.currentHeight = 0;
		var gPosition = {y:0};
		var line;
		var that = this;
		this.traverse(tree,(mindmapObj,key,parent)=>{

			box = this.createBox();
			box.interactive = true;
			mainContainer = new PIXI.Container();
			debugRect = new PIXI.Graphics();

			mindmapObj.mainContainer = mainContainer;
			mindmapObj.box = box;

			sText = mindmapObj.title.slice(0,10);
			text = this.createText(sText);
			if(text.width > box.width){
				box.width = text.width;
			}
			else{
				text.y += 10
			}
			//store a reference to the object here to be used when updating the object's position
			box.obj = mindmapObj;
			box.addChild(text);
			mainContainer.addChild(box);

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

			if(parent){
				//we need to add an offset on both sides to cover when we move the elements up and down
				//maybe we can move the bounds out a little?
				parent.mainContainer.addChild(mainContainer);
				//get previous sibling
				var count = 0;
				var order;
				parent.ideasArr = [];
				Object.keys(parent.ideas).map((key,index)=>{
					parent.ideasArr.push(parent.ideas[key]);
					count++;
				})
				sibling = parent.ideasArr[mindmapObj.order-1];
				length = count;
				if(sibling){
					mainContainer.x += HORIZONTAL_MARGIN;
					mainContainer.y = sibling.mainContainer.y + sibling.mainContainer.height + VERTICAL_MARGIN ;
				}
				else{
					mainContainer.x += HORIZONTAL_MARGIN;
					//mainContainer.y -= ((-1 * Math.floor(length/2)) + mindmapObj.order);
				}
				//for debugging
				if(mindmapObj.title.indexOf("Concepts") !== -1){
				}
				//drawLine
				var po = box.toLocal(mainContainer.position);
				this.drawLine(mainContainer,parent.mainContainer,box,parent.box);
				mindmapObj.line = line;
			}
			else{
				this.rootContainer.addChild(mainContainer);
			}
		})
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
			//save the new tree
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
		this.renderer.autoResize = true;
		this.renderer.backgroundColor = 0x00BFFF;
		$('app').append(this.renderer.view);

		this.stage = new PIXI.Container();
		this.rootContainer = new PIXI.Container();
		this.stage.interactive = true;

		//add a container to the center of the screen
		this.rootContainer.x = this.renderer.width /3;
		this.rootContainer.y = this.renderer.height / 6;

		this.stage.addChild(this.rootContainer);

		this.renderer.render(this.stage);

		requestAnimationFrame( animate );
		var that = this;

		function animate() {
			requestAnimationFrame(animate);
			that.renderer.render(that.stage);
		}
	}
}
module.exports = new mindmapView();
