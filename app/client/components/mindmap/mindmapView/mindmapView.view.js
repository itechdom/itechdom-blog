'use strict';
var template = require('./mindmapView.html');
var $ = require('jquery');
var PIXI = require('pixi.js');

class mindmapView {

	createText(box,text){
		var basicText = new PIXI.Text(text);
		basicText.x = box.x/2;
		basicText.y = box.y/2;
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
			font : 'bold italic 36px Arial',
			fill : '#F7EDCA',
			stroke : '#4a1850',
			strokeThickness : 5,
			dropShadow : true,
			dropShadowColor : '#000000',
			dropShadowAngle : Math.PI / 6,
			dropShadowDistance : 6,
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
	render(tree){
		//box size, count and parentBox
		
		var count = -1;
		var parentBox = this.createBox(0,20);
		this.stage.addChild(parentBox);

		tree.map((node)=>{
			console.log(count);
			var x = parentBox.x + 50;
			var y = count*20+20;
			var box = this.createBox(x,y);
			count++;
			node.box = box;
			this.stage.addChild(box);
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
