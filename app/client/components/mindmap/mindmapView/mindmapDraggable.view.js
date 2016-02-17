'use strict';
var template = require('./mindmapView.html');
var $ = require('jquery');
var PIXI = require('pixi.js');

class mindmapView {
	function createBunny(x, y)
	{
		// setup events
		bunny
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

		// move the sprite to its designated position
		bunny.position.x = x;
		bunny.position.y = y;

		// add it to the stage
		stage.addChild(bunny);
	}

	requestAnimationFrame( animate );

	function animate() {
		requestAnimationFrame(animate);
		// render the stage
		renderer.render(stage);
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
module.exports = new mindmapView();
