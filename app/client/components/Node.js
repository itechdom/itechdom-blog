import React from 'react';
import Node from './Node.js'

export default class Tree extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }
    nodeStyle(){
        return {
            position:'absolute',
            left:this.props.position[0],
            top:this.props.position[1]
        }
    }
    renderChildren(){
        let children = Object.keys(this.props.children).map((key,index)=>{
            return this.props.children[key];
        });
        if(children){
            return children.map((child,index) => {
                return(<div>
                    <Node 
                        position={[this.props.position[0]+100,100+(index*50)-100]} 
                        key={index} 
                        node={child} 
                        children={(child.ideas?child.ideas:{})} 
                    />
                </div>);
            })
        }
    }
    render(){
        let children = this.renderChildren();
        return(<div style={this.nodeStyle()} >
            {this.props.node.title}
            {children}
        </div>);
    }
}
