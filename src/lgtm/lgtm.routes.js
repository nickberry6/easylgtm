(function() {
    'use strict';

    angular
        .module('app.lgtm')
        .config(function($stateProvider){
          $stateProvider
          .state('home', {
            url: '/',
            views: {
              'toolbar': {
                templateUrl: 'toolbar/templates/toolbar.html'
              },
              'content': {
                templateUrl: 'lgtm/templates/lgtm.list.html',
                controller: 'lgtmListController as vm'
              },

            }
          })


          .state('login', {
            url: '/login',
            views: {
              'toolbar': {
                templateUrl: 'toolbar/templates/toolbar.html'
              },
              'content': {
                templateUrl: 'lgtm/templates/login.html',
                controller: 'loginController as vm'
              },

            }
          })
        });


})();
