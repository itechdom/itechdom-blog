import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import AppComponent from './app.component';
import Components from './components/components';
import 'normalize.css';

angular.module('app', [
	uiRouter,
	Common.name,
	Components.name
])
.directive('app', AppComponent);