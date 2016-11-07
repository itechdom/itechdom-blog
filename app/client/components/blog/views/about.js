'use strict';
var h = require('virtual-dom/h');

export let aboutView = ()=>(
  h('h2',{},recommendation())
);

let recommendation = ()=>(
  h('blockquote',{},[
    h('p',{},'About') ,
    h('small',{},[
      'Someone famous in',
      h('cite',{title:'Source Title'},'Source Title')
    ])
  ])
);
