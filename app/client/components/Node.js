import React from 'react';
import Node from './Node.js'

export default class Tree extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }
    render(){
        return (
            <h1>{this.props.node}</h1>
        );
    }
}
