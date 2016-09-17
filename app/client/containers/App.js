//@flow
import {HelloWorld, FunComp} from '../components/HelloWorld.js';
import React from 'react';
module.exports = class App extends React.Component {
    constructor() {
        super();
        this.state = { comments: ["hello","hi"] }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.updateCounter();
        },1000); 
    }
    updateCounter(){
        this.state.comments.push("hi");
        this.setState({comments:this.state.comments});
    }
    render() {
        return <ul> { this.state.comments.map((item,index) => (<li key={index} >{ item }</li>)) } </ul>;
    }
}
