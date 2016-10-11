//@flow
import React from 'react';
import {render} from 'react-dom';
import App from './containers/App.js';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import {counter} from './reducers'
const store = createStore(counter,window.devToolsExtension && window.devToolsExtension());

//we can use react-redux provider to wrap our component in a store so we can interact easily with it
render(
  <Provider store={store}>
    <App/>
  </Provider>
,document.getElementById('app'));
