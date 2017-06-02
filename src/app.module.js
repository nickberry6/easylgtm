(function() {
    'use strict';

    angular
        .module('app', [
            'app.core',
            'app.lgtm'
        ])
        .config(function($urlRouterProvider, $locationProvider, $httpProvider){

          $urlRouterProvider.otherwise('/');
          $locationProvider.html5Mode(true);

          // magic should review
          $httpProvider.interceptors.push('httpInterceptorService');

        });

})();
