import angular from 'angular';
let mainTemplate = require('./buttons.html');
let template = require('src/views/atoms/buttons/buttons.html');

let buttonsDocsComponent = function(){
	return {
		template:mainTemplate,
			restrict: 'E',
			replace: true
	};
};
let buttonsComponent = function(){
	return {
		template:template,
			restrict: 'E',
			replace: true
	};
};


let buttons = angular.module('buttons', [
		])
.directive('mwiButtonsDocs',buttonsDocsComponent)
.directive('mwiButtons',buttonsComponent)

export default buttons;
