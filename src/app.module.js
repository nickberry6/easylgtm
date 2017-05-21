(function() {
    'use strict';

    angular
        .module('app', [
            'app.core',
            'app.lgtm'
        ])
        .config(function($urlRouterProvider, $locationProvider){

          $urlRouterProvider.otherwise('/');
          $locationProvider.html5Mode(true);

        });

})();
