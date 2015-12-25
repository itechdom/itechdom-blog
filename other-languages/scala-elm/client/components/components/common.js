import angular from 'angular';
import zPresent from './zPresent/zPresent';
let commonModule = angular.module('app.common', [
	zPresent.name
]);
export default commonModule;
