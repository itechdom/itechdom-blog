//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./todo.actions.js');

// I want to be able to import some components that manipulate HTML
// The basic features I am looking at is:
// Data binding, just pass data to the compile function to bind data to it? what about repeater or other attributed components?
// Components attach themselves to either an attribute or custom element nesting?
// This should provide declarative HTML in general
class todoView {

    render(data,element){
	    var ht = require('./todo.html');
	    element?$(element+'>todo').html(ht) : $('todo').html(ht);
    }
    animate(){

    }
    constructor() {
        this.template = 'todo';

    }
}


module.exports = new todoView();
