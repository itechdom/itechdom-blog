//@flow
import Tree from '../components/Tree.js';
import React from 'react';
import sampleMindmap from '../data/Elm.mup.json';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { mindmap: sampleMindmap }
    }
    componentDidMount() {

    }
    updateCounter(){

    }
    render() {
        return (
        <div className="board">
        <Tree nodes={this.state.mindmap} />
        </div>
        );
    }
}
