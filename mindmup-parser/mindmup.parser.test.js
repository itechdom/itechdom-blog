var processObj = require('./mindmup.parser.functional.js').processObj; 
var sampleObject = require('../content/published-blog/intro-to-elm.json')[0];

console.log(processObj(sampleObject));
