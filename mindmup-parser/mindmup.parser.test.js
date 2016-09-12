const mindmapParser = require('./mindmup.parser.functional.js'); 
const processObj = mindmapParser.processObj; 
const convertIdeasToArray = mindmapParser.convertIdeasToArray;
const sampleObject = require('../../Downloads/Knowledge/Blog/Blog.json');

processObj(sampleObject);
convertIdeasToArray(sampleObject);
