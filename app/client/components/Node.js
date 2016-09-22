import React from 'react';
import Node from './Node.js'

export default class Tree extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }
    renderChildren(){
        let children = Object.keys(this.props.children).map((key,index)=>{
            return this.props.children[key];
        });
        if(children){
            return children.map((child,index) => {
                return(<div>
                    <Node key={index} node={child} children={(child.ideas?child.ideas:{})} />
                </div>);
            })
        }
    }
    render(){
        let children = this.renderChildren();
        return(<div>
            {this.props.node.title}
            {children}
        </div>);
    }
}
