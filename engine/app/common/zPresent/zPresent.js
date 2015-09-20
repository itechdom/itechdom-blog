import angular from 'angular';
import zPresentComponent from './zPresent.component.js';
import zSlideComponent from './zSlide/zSlide.component.js';
import sanitize from 'angular-sanitize';

//import highlight.js
require('highlight.js/styles/default.css');
require('highlight.js/styles/agate.css');
var hjs = require('highlight.js');

let zPresentModule = angular.module('zPresent', [
    sanitize
])
.directive('zPresent', zPresentComponent)
.directive('zSlide', zSlideComponent);
export default zPresentModule;
