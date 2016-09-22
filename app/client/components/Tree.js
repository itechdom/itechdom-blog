import React from 'react';
import Node from './Node.js'

const VERTICAL_MARGIN = 40;
const HORIZONTAL_MARGIN = 100;
const BOX_HEIGHT = 22;
const TEXT_MARGIN = 20;

export default class Tree extends React.Component{
    constructor(){
        super();
        //this.tree = this.props.tree;
    }
    componentDidMount(){

    }
    render(){
        let nodes = this.props.nodes;
        let tree = this.props.tree;
        return (
                <ul> { nodes.map((node,index) =>
                            <Node key={index} node={node}/>
                        )
                } 
                </ul>
               )
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
    renderTree(tree){
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
        var line;
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
            if(text.width > box.width){
                box.width = text.width;
            }
            else{
                text.y += 10
            }
            //store a reference to the object here to be used when updating the object's position
            box.obj = mindmapObj;
            box.addChild(text);
            mainContainer.addChild(box);

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
                    mainContainer.x += HORIZONTAL_MARGIN;
                    mainContainer.y = sibling.mainContainer.y + sibling.mainContainer.height + VERTICAL_MARGIN;
                    //move parent to fit children
                    //var h = parent.ideas[mindmapObj.order+1];
                    //if(h){
                    //  if((mindmapObj.order+1)/length === 0.5){
                    //parent.box.y = mainContainer.y;
                    //}
                    //}
                    //else{
                    //  console.log("nope");
                    // }
                }
                else{
                    mainContainer.x += HORIZONTAL_MARGIN;
                    //mainContainer.y = 20;
                }
                if(mindmapObj.title === "Resources"){
                }
                //drawLine
                var po = box.toLocal(mainContainer.position);
                this.drawLine(mainContainer,parent.mainContainer,box,parent.box);
                mindmapObj.line = line;
            }
            else{
                this.rootContainer.addChild(mainContainer);
            }
        })
    }

}
