//@flow
import {HelloWorld, FunComp} from '../components/HelloWorld.js';
import React from 'react';

//we should connect redux-store here

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
        this.props.onIncrement();
    }
    render() {
        const {value, onIncrement} = this.props;
        return <ul> { this.state.comments.map((item,index) =>
            <li key={index} >
                { value }
                { item }
                <a onClick={onIncrement} href="#">Add</a>
                <HelloWorld name={item.toString()} />
            </li>
            )
            }
        </ul>;
    }
}
