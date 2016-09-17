//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld, FunComp} from './HelloWorld.js';
ReactDOM.render(<div>
                <HelloWorld id={1} name="hello" />
                <FunComp />
                </div>,document.getElementById('app'));
