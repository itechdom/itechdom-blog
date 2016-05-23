'use strict';
var $ = require('jquery');
var PIXI = require('pixi.js');

const PARENT_VERTICAL_MARGIN = 100;
const CHILDREN_VERTICAL_MARGIN = 20;

//We have to start at the center
//First node we can just add it to the upper right of the center 

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
		var obj;
        //return upper sibling and below sibling
		for(var key in mindmap){
			obj = mindmap[key];
			obj.order = count++;
			processFunction(obj,parent,key);
			this.traverse(obj.ideas,processFunction,obj);
		}
	}
	update(node){
		var obj;
		//change children
		for (var key in node.obj.ideas){
			obj = node.obj.ideas[key];	
			obj.box.x = obj.box.x + 3
		};
    }
	render(tree){
		this.tree = tree;
		var count;
		var x,y;
		var px,py;

		this.traverse(tree,(mindmapObj,parent,key)=>{

			var box = this.createBox();
            var mainContainer = new PIXI.Container();

            //store a reference to the object here to be used when updating the object's position
            mindmapObj.box = box;
            mindmapObj.parent = parent;
            box.obj = mindmapObj;

            var index = this.stage.children.indexOf(mindmapObj.mainContainer);
            var aboveHeight = 0;

            //take previous sibling and calculate height + y value
            if(this.stage.children[index-1]){
                var prevContainer = this.stage.children[index-countBack];
                aboveHeight = aboveHeight + prevContainer.height;
            }
            
            x = count * 2;
            y = count * 2;

            mainContainer.y = y;

            //store the x y for the object
            mindmapObj.x = x;
            mindmapObj.y = y;

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

			box.x = x;
			box.y = y;

			var sText = mindmapObj.title.slice(0,10);
			var text = this.createText(sText);
			box.addChild(text);
            mainContainer.addChild(box);
            this.stage.addChild(mainContainer);
            count++;
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
		$('app').append(this.renderer.view);
		this.stage = new PIXI.Container();
		this.stage.interactive = true;

        //add a container to the center of the screen
        this.stage.x = this.renderer.width / 2;
        this.stage.y = this.renderer.height / 2;
	}
}
module.exports = new mindmapView();
