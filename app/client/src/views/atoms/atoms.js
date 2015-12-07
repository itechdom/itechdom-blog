//grab template from src
//TODO: we can grab more atoms here and attach them?
//Or it can be more generic
let template = require('./atoms.html');

let atomsLinks = require('./atoms.links.js');

import text from './text/text';
import lists from './lists/lists';
import buttons from './buttons/buttons';
import forms from './forms/forms';
import tables from './tables/tables';

let atomsComponent = function(){
	return {
		template,
			restrict: 'E',
			replace: true,
			controller: atomsCtrl
	};
};

let atoms = angular.module('atoms', [
		text.name,
		tables.name,
		lists.name,
		forms.name,
		buttons.name
		])
.directive('mwiAtoms',atomsComponent)
.value('atomsLinks',atomsLinks)

function atomsCtrl($scope,atomsLinks){
	$scope.atomsLinks = atomsLinks;
}

export default atoms;
