import template from './home.html';
import controller from './home.controller';
import './home.scss';

let homeComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default homeComponent;