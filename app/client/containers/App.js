import {HelloWorld, FunComp} from '../components/HelloWorld.js';
import React from 'react';

//we should connect redux-store here
module.exports = class App extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
    }
    render() {
      return <HelloWorld />;
    }
}
