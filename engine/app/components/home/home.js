import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeService from './home.service';


let homeModule = angular.module('home', [
	uiRouter
])
.config(($stateProvider, $urlRouterProvider)=>{
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		});
})
.directive('home', homeComponent)
	.service('homeService',homeService)

export default homeModule;