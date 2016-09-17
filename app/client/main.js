//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import { createStore } from 'redux'
import {counter} from './reducers'

const store = createStore(counter);
const render = () => ReactDOM.render(<App onIncrement={() => store.dispatch({ type: 'INCREMENT' })}/>
                ,document.getElementById('app'));

store.subscribe(render);
