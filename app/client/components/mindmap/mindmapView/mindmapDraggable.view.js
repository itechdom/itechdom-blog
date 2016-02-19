'use strict';
var template = require('./mindmapView.html');
var $ = require('jquery');
var PIXI = require('pixi.js');
var renderer = PIXI.autoDetectRenderer(1000, 1000, { antialias: true });
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
stage.interactive = true;


function createBox(x, y)
{
	// setup events
	var style = {
		font : 'bold italic 10px Arial',
		fill : '#F7EDCA',
		wordWrap : true,
		wordWrapWidth : 440
	};

	var basicText = new PIXI.Text("hello",style);
	basicText.x = x;
	basicText.y = y;

	var container = new PIXI.Container();

	var box = new PIXI.Graphics();
	box.lineStyle(2, 0x0000FF, 1);
	box.beginFill(0xFF700B, 1);
	box.drawRect(0, 0, 20, 20);

	// enable the box to be interactive... this will allow it to respond to mouse and touch events
	box.interactive = true;

	// this button mode will mean the hand cursor appears when you roll over the box with your mouse
	box.buttonMode = true;

	box
		// events for drag start
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


	container.x = x;
	container.y = y;


	container.addChild(box);
	stage.addChild(container);
	requestAnimationFrame( animate );

	function animate() {
		requestAnimationFrame(animate);
		// render the stage
		renderer.render(stage);
	}

}

function onDragStart(event)
{
	// store a reference to the data
	// the reason for this is because of multitouch
	// we want to track the movement of this particular touch
	this.data = event.data;
	console.log(event);
	this.alpha = 0.5;
	this.dragging = true;
}

function onDragEnd()
{
	this.alpha = 1;

	this.dragging = false;

	// set the interaction data to null
	this.data = null;
}

function onDragMove()
{
	if (this.dragging)
	{
		console.log(this.parent);
		var newPosition = this.data.getLocalPosition(this.parent);
		console.log(newPosition);
		this.position.x = newPosition.x;
		this.position.y = newPosition.y;
		//this.x = newPosition.x;
		//this.y = newPosition.y;
	}
}
module.exports = createBox;
