'use strict';
var Rx = require('rx');
var dispatcher = require('../lib/dispatcher/dispatcher.js');
var clientActions = require('../client/client.actions.js')

class actionMain{

    constructor(){
        return {
            request$: clientActions['changeRoute$'].filter((d)=> {
                return d == "/blog/1";
            })
        }
    }
}
module.exports = new actionMain();
