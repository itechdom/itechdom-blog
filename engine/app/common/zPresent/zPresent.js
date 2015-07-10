import angular from 'angular';
import zPresentComponent from './zPresent.component.js';
import zSlideComponent from './zSlide/zSlide.component.js';
import sanitize from 'angular-sanitize';


let zPresentModule = angular.module('zPresent', [
    sanitize
])
.directive('zPresent', zPresentComponent)
.directive('zSlide', zSlideComponent);
export default zPresentModule;