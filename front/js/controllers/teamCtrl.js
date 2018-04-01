/*pts - Controllers.js - Yadong Zhu 2018*/
(function() {
    'use strict';
    /* Controllers */
    angular.module('pts.controllers')
    .controller('teamCtrl',['$scope','teamInfo', function($scope,teamInfo){
    	$scope.teamInfo=teamInfo;
    }])
 }())