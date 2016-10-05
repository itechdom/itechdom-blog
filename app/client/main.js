//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import { createStore } from 'redux'
import {counter} from './reducers'
const store = createStore(counter,window.devToolsExtension && window.devToolsExtension());

//we can use react-redux provider to wrap our component in a store so we can interact easily with it

const render = () => ReactDOM.render(<App value={store.getState()} onIncrement={() => store.dispatch({ type: 'INCREMENT' })}/>
                ,document.getElementById('app'));
render();


//less optamized way
//store.subscribe(render);
