'use strict';
var template = require('./mindmapView.html');
var $ = require('jquery');
var PIXI = require('pixi.js');

class mindmapView {

	render(){
		var renderer = PIXI.autoDetectRenderer(800, 800, { antialias: true });
		console.log(window.innerWidth,window.innerHeight);
		document.body.appendChild(renderer.view);

		var stage = new PIXI.Container();

		stage.interactive = true;

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


		var basicText = new PIXI.Text('Basic text in pixi',style);
		basicText.x = 200;
		basicText.y = 200;

		stage.addChild(basicText);

		var graphics = new PIXI.Graphics();

		// set a fill and a line style again and draw a rectangle
		graphics.lineStyle(2, 0x0000FF, 1);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0, 0, 120, 120);

		var graphics2 = new PIXI.Graphics();
		graphics2.lineStyle(2, 0x0000FF, 1);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(200, 200, 120, 120);


		var graphics3 = new PIXI.Graphics();

		stage.addChild(graphics);
		stage.addChild(graphics2);
		stage.addChild(graphics3);

		renderer.render(stage);

		// run the render loop
		animate();

		var flag = false;
		function animate() {
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
			graphics3.lineStyle(1, 0x0000FF, 1);
			graphics3.moveTo(graphics.x + 120, graphics.y + 120);
			graphics3.lineTo(graphics2.x + 200, graphics2.y + 200);
			graphics3.endFill();

			renderer.render(stage);
			requestAnimationFrame( animate );
		}
	}
	constructor() {

	}
}
module.exports = new mindmapView();
