import React from 'react';
import Node from './Node.js'

export default class Tree extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }
    render(){
        let nodes = this.props.nodes;
        return (
        <ul> { nodes.map((node,index) =>
                    <Node key={index} node={node}/>
                    )
        } 
        </ul>
        )
    }
}
