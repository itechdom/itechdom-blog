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
    //get the order of the sibling and the height of all it's child elements
    calculateSiblingHeight(){

    }
	defaultYPosition(length,order,box){
		var arrange = -1*Math.ceil(length/2) + order;
		//this is going to return y coordinates
		return arrange;
	}
	defaultXPosition(length,order,box){
		//this is going to return x coordinates
		//it's three times the box width
		return 20*3;
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
    createTrunk(mindmapObj){

    }
	render(tree){
		this.tree = tree;
		var count;
		var x,y;
		var px,py;
		var rootX,rootY;
		//v margin is the vertical margin
		//h margin is the horizontal margin
		var order,length,vMargin,arrange,hMargin;

		this.traverse(tree,(mindmapObj,parent,key)=>{

			var order = mindmapObj.order; 
			var box = this.createBox();
            var mainContainer;

			//store a reference to the object here
			mindmapObj.box = box;
			mindmapObj.parent = parent;
			box.obj = mindmapObj;

			if(!mindmapObj.parent){

				length = Math.ceil(tree.length/2);
				arrange = this.defaultYPosition(length,order,box);
                //TODO: change 142 to the height of the container?
				vMargin = (arrange*142);
				hMargin = this.defaultXPosition()

			    mainContainer = new PIXI.Container();

				px = hMargin;
				py = vMargin;

				x = px;
				y = py;

                mindmapObj.mainContainer = mainContainer;
			    this.stage.addChild(mainContainer);
                var index = this.stage.children.indexOf(mindmapObj.mainContainer);
                var countBack = 1;
                var aboveHeight = 0;
                while(this.stage.children[index-countBack]){
                    var prevContainer = this.stage.children[index-countBack];
                    aboveHeight = aboveHeight + prevContainer.height + 50;
                    countBack++;
                }
                mainContainer.y = aboveHeight;
			}
			else{

				//factors for position: parent, number of siblings 
				//factors for vMargin: Same level nodes above and beyond, or we can calculate the height of each level in a trunk each time
				length = Object.keys(mindmapObj.parent.ideas).length; 

                mindmapObj.mainContainer = mindmapObj.parent.mainContainer;

				arrange = this.defaultYPosition(length,order,box);
				hMargin = this.defaultXPosition()

				//factors into calculcate the top margin for each box
				if(length == 1){
					arrange = 0;
					vMargin = 0;
				}
				else{
					if(arrange >= 0){
						arrange = arrange + 1;
					}
				}
				vMargin = (arrange*20);

                //if the node has a parent other than the the original parent
				if(!parent.x || !parent.y){
					x = px + hMargin;
					y = py +  vMargin;
				}
				else{
					x = parent.x + hMargin;
					y = parent.y + vMargin;
				}
                //store the x y for the object
				mindmapObj.x = x;
				mindmapObj.y = y;
			}
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
            mindmapObj.mainContainer.addChild(box);
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

        var box = this.createBox();
        var text = this.createText("Title");
        box.addChild(text);

        this.stage.addChild(box);
	}
}
module.exports = new mindmapView();
