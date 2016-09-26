import React from 'react';
import Node from './Node.js'
let height = 0;
export default class Tree extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
    }
    nodeStyle(){
        return {
            position:'absolute',
            width:200,
            left:this.props.position[0],
            top:this.props.position[1],
            wordWrap:'break-word'
        }
    }
    renderChildren(){
        //record the height of your sibling somewhere then look it up when you render
        //if you are the last element and you have no children then you are a good candidate, you will update the height
        let children = Object.keys(this.props.children).map((key,index)=>{
            return this.props.children[key];
        });
        let length = -100 * ((children.length-1)/2);
        if(children.length > 0){
            return children.map((child,index) => {
                return(<div>
                    <Node 
                        position={[this.props.position[0]+50,(index*100)+length]} 
                        key={index} 
                        node={child} 
                        children={(child.ideas?child.ideas:{})} 
                    />
                </div>);
            })
        }
    }
    render(){
        let oldHeight = height;
        let children = this.renderChildren();
        return(<div style={this.nodeStyle()} >
            {this.props.node.title}
            {children}
        </div>);
    }
}
