'use strict';
var actions = require('./3d.actions.js');
window.THREE = require("three.js");
var THREE = window.THREE;
var example = require("./canvas_interactive_cubes.html");
var $ = require("jquery");

class Main{
	constructor(){
        $('app').append(example);
	}
}

module.exports = new Main();
