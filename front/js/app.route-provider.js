/*pts - App.js - Yadong Zhu 2018*/
(function() {
    'use strict';
    
    angular.module('pts')                
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl',
                resolve:{
                }
            })
            .when('/punctuality', {
                templateUrl: 'partials/punctuality.html',
                controller: 'punctualTrackCtrl',
                resolve:{
                    
                }
            })
            .when('/whd', {
                templateUrl: 'partials/whd.html',
                controller: 'whdTrackCtrl',
                resolve:{
                    
                }
            })
            .when('/daily-hour', {
                templateUrl: 'partials/daily-hour.html',
                controller: 'dailyHourTrackCtrl',
                resolve:{
                    
                }
            })
            .when('/responsive', {
                templateUrl: 'partials/responsive.html',
                controller: 'responsiveTrackCtrl',
                resolve:{
                    
                }
            })
            .when('/teamInfo/:user?', {
                templateUrl: 'partials/teamInfo.html',
                controller: 'teamCtrl',
                resolve:{
                    teamInfo:['$q','$route','ptsService',
                        function($q,$route,apiSvc){
                            var deferred = $q.defer();
                            if ($route.current.params.user){
                                apiSvc.getTeamInfo({param1:$route.current.params.user}).$promise.then(function(data){
                                    if (data){
                                        deferred.resolve(data);
                                    } else {
                                        deferred.resolve(undefined);
                                    }
                                },function(err){
                                    deferred.reject(err);
                                })
                            } else {
                                deferred.resolve(undefined)
                            }
                            return deferred.promise;
                        }]
                }
            })
            
            .otherwise({
                redirectTo: '/home'
            })
        }
    ])
}());

