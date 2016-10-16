'use strict';
var h = require('virtual-dom/h');

export let homeView = ()=>(
  h('h2',{},recommendation())
);

let recommendation = ()=>(
  h('blockquote',{},[
    h('p',{},'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.') ,
    h('small',{},[
      'Someone famous in',
      h('cite',{title:'Source Title'},'Source Title')
    ])
  ])
);
