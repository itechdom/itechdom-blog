var addon = require('bindings')('hello');
console.log(addon);
console.log(addon.hello()); // 'world'
