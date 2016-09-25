import React from 'react';
import Node from './Node.js'

const VERTICAL_MARGIN = 40;
const HORIZONTAL_MARGIN = 100;
const BOX_HEIGHT = 22;
const TEXT_MARGIN = 20;

export default class Tree extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }
    renderNodes(nodeList){
        return nodeList.map((node,index)=>{
            return(
                    <Node position={[100,100+(index*200)]} key={index} node={node} children={node.ideas}/>
            );
        })
    }
    render(){
        let nodeList = this.props.nodes;
        return(
            <div>
                {this.renderNodes(nodeList)}
            </div>
        );
    }
}
