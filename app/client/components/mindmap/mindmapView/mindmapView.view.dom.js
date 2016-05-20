'use strict';
var template = require('./mindmapView.html');
var $ = require('jquery');
var mindmapView = require('./mindmapView.view.js');

class mindmapViewDom {

    createConnectors(){

    }
    createNodeMap(){

    }
    constructor(){
        console.log("I am running fine");
    }
    render(tree){
		this.traverse(tree,(mindmapObj,parent,key)=>{
            console.log(mindmapObj);
        });
    }
}
module.exports = new mindmapViewDom();
