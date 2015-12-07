'use strict';
/**
 * @ngdoc overview
 * @name patternLibrary
 * @module patternLibrary
 *
 * @description
 * Main module of the application. Include any further module
 * dependencies here. For example, the shades module is not
 * included by default; if needed, add here in the module
 * initialization.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
require('angular-bootstrap');
require("font-awesome/scss/font-awesome.scss");
require("./scss/main.scss");
import srcComponent from './src.component.js';
import srcController from './src.controller.js';


let app = angular.module('app', [
    uiRouter,
    "ui.bootstrap"
])
    .config( appConfig )
    .directive('src',srcComponent);

function appConfig ($stateProvider,$urlRouterProvider ) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('index', {
            url: '/',
            template: function ($stateParams) {
                var page = require('./views/templates/sidebar-template/sidebar-template.html')
                return page;
            },
            controller:srcController,
            activeWhen: 'index'
        })
        .state('atoms', {
            url: '/atoms',
            template: '<mwi-atoms></mwi-atoms>',
            activeWhen: 'atoms',
            controller:srcController
        })
        .state('molecules', {
            url: '/molecules/:id',
            template: function ($stateParams) {
                var page = require('./views/molecules/' + $stateParams.id.replace('.', '/') + '.html');
                return page;
            },
            activeWhen: 'molecules',
            controller:srcController
        })
        .state('templates', {
            url: '/templates',
            template:require('./views/templates/template.html'),
            controller:srcController,
            activeWhen: 'templates'
        })
};
export default app;