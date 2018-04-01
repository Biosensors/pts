/*pts - App.js - Yadong Zhu 2018*/
(function() {
    'use strict';
    angular.module('pts')
    //set global 
    .run(["$rootScope","$locale","dynamicLocale","ptsService",
            function($rootScope,$locale,dynamicLocale,apiSvc) {
              $locale.id="en-sg";
              dynamicLocale.setLocale($locale);
    }])
}());