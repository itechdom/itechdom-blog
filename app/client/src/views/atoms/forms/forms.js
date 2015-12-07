import angular from 'angular';
let mainTemplate = require('./forms.html');
let template = require('src/views/atoms/forms/forms.html');

let formsDocsComponent = function(){
	return {
		template:mainTemplate,
			restrict: 'E',
			replace: true
	};
};
let formsComponent = function(){
	return {
		template:template,
			restrict: 'E',
			replace: true
	};
};


let forms = angular.module('forms', [
		])
.directive('mwiFormsDocs',formsDocsComponent)
.directive('mwiForms',formsComponent)

export default forms;
