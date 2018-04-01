/*pts - Controllers.js - Yadong Zhu 2018*/
(function() {
    'use strict';
    /* Controllers */
    angular.module('pts.controllers')
    .controller('navCtrl', ['$scope', '$rootScope', function($scope,$rootScope){
    	$scope.toggleDebug=function(){
    		$rootScope.debug=!$rootScope.debug;
    	}
    }])
 }())
