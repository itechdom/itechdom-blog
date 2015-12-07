import angular from 'angular';
let mainTemplate = require('./text.html');
let template = require('src/views/atoms/text/text.html');

let textDocsComponent = function(){
	return {
		template:mainTemplate,
			restrict: 'E',
			replace: true
	};
};
let textComponent = function(){
	return {
		template:template,
			restrict: 'E',
			replace: true
	};
};


let text = angular.module('text', [
		])
.directive('mwiTextDocs',textDocsComponent)
.directive('mwiText',textComponent)

export default text;
