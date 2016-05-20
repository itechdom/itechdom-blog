'use strict';
var template = require('./mindmap.dom.html');
var $ = require('jquery');
var mindmapView = require('../canvas/mindmap.canvas.js');

class mindmapViewDom {

    createConnectors(){

    }
    createNodeMap(){

    }
    constructor(){
        console.log("I am running fine");
    }
    render(tree){
		mindmapView.traverse(tree,(mindmapObj,parent,key)=>{

        });
    }
}
module.exports = new mindmapViewDom();
