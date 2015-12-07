//grab template from src
//TODO: we can grab more templates here and attach them?
//Or it can be more generic
let template = require('./templates.html');

let templatesLinks = require('./templates.links.js');

let templatesComponent = function(){
	return {
		template,
			restrict: 'E',
			replace: true,
			controller: templatesCtrl
	};
};

let templates = angular.module('templates', [
		])
.directive('mwiTemplates',templatesComponent)
.value('templatesLinks',templatesLinks)

function templatesCtrl($scope,templatesLinks){
	$scope.templatesLinks = templatesLinks;
}

export default templates;
