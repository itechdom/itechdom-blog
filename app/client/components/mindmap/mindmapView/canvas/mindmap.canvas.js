'use strict';
var $ = require('jquery');
var PIXI = require('pixi.js');

const VERTICAL_MARGIN = 40;
const HORIZONTAL_MARGIN = 100;
const BOX_HEIGHT = 22;

//have a running height of the container

class mindmapView {

	createText(text){
		var style = this.createTextStyle();
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
	createTextStyle(){
		var style = {
			font : 'bold italic 10px Arial',
			fill : '#000000',
			wordWrap : true,
			wordWrapWidth : 50
		};
		return style;
	}
	createBox(){
		var box = new PIXI.Graphics();
		box.lineStyle(2, 0x000000, 1);
		box.beginFill(0xFF700B, 1);
		box.drawRect(0, 0, 20, 20);
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
	update(node){
		var obj;
		//change children
		for (var key in node.obj.ideas){
			obj = node.obj.ideas[key];	
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

                parent.mainContainer.addChild(mainContainer);

                //get previous sibling
                var count = 0;
                Object.keys(parent.ideas).map((key,index)=>{
                    if(index === mindmapObj.order){
                        var order = parseInt(key) - 1;
                        sibling = parent.ideas[`${order}`];
                    }
                    count++;
                });
                length = count; 
                if(sibling){
                    mainContainer.x = parent.box.x + HORIZONTAL_MARGIN;
                    mainContainer.y = sibling.mainContainer.y + sibling.mainContainer.height + VERTICAL_MARGIN;

                    //move parent to fit children
                    var h = parent.ideas[mindmapObj.order+1];
                    if(h){
                        if((mindmapObj.order+1)/length === 0.5){
                            //parent.box.y = mainContainer.y;
                        }
                    }
                    else{
                        console.log("nope");
                    }
                }
                else{
                    mainContainer.x = parent.box.x + HORIZONTAL_MARGIN;
                    //mainContainer.y = parent.box.y + VERTICAL_MARGIN;
                }
                if(parent.title === "Archeticture"){
                    debugRect.lineStyle(2, 0x0000FF, 1);
                    var pos = parent.mainContainer.toGlobal(this.rootContainer)
                    debugRect.drawRect(pos.x,pos.y,parent.mainContainer.width,parent.mainContainer.height)
                    this.stage.addChild(debugRect);
                };
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
