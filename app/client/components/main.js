import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld, FunComp} from './HelloWorld.js';
ReactDOM.render(<div>
                <HelloWorld id="hi" name="hello" />
                <FunComp />
                </div>,document.getElementById('app'));
