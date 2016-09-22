//@flow
import Tree from '../components/Tree.js';
import React from 'react';
export default class App extends React.Component {
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
        return (
        <div class="board">
        <Tree nodes={this.state.comments} />
        </div>
        );
    }
}
