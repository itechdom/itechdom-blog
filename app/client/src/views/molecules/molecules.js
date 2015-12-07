//grab template from src
//TODO: we can grab more molecules here and attach them?
//Or it can be more generic
let template = require('./molecules.html');

let moleculesLinks = require('./molecules.links.js');

import header from './header/header.js';
import footer from './footer/footer.js';


let moleculesComponent = function(){
	return {
		template,
			restrict: 'E',
			replace: true,
			controller: moleculesCtrl
	};
};

let molecules = angular.module('molecules', [
		header.name,
		footer.name
		])
.directive('mwiMolecules',moleculesComponent)
.value('moleculesLinks',moleculesLinks)

function moleculesCtrl($scope,moleculesLinks){
	$scope.moleculesLinks = moleculesLinks;
}


export default molecules;

