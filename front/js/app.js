/*pts - App.js - Yadong Zhu 2018*/
(function() {
    'use strict';
    // Declare app level module which depends on filters, and services
   
    angular.module('pts.services', ['ngResource']);
    angular.module('pts.filters', []);
    angular.module('pts.directives', []);
    angular.module('pts.controllers', []);      
    angular.module('pts', [
        'ngRoute',
        'ngResource',
        'ngAnimate',
        'ngSanitize',
        'pts.controllers',
        'pts.services',
        'pts.filters',
        'pts.directives',
        'LocalStorageModule',
        'ui.bootstrap'
    ]);
 
}());