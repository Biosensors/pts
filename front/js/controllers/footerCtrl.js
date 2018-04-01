/*pts - Controllers.js - Yadong Zhu 2018*/
(function() {
    'use strict';
    /* Controllers */
    angular.module('pts.controllers')
    .controller('footerCtrl', ['$scope', function($scope){
    	$scope.currentDate = new Date();
    }])
 }())
