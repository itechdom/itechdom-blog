'use strict';
var h = require('virtual-dom/h');

export let homeView = ()=>{
  return h('h2',{},[
    h('img',{'src':'http\://placehold.it/1100x400'})
  ]
)
};

let recommendation = ()=>(
  h('blockquote',{},[
    h('p',{},'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.') ,
    h('small',{},[
      'Someone famous in',
      h('cite',{title:'Source Title'},'Source Title')
    ])
  ])
);
