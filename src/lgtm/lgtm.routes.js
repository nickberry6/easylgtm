(function() {
    'use strict';

    angular
        .module('app.lgtm')
        .config(function($stateProvider){

          $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'lgtm/templates/lgtm.list.html',
            controller: 'lgtmListController as vm'
          })


          .state('login', {
            url: '/login',
            templateUrl: 'lgtm/templates/login.html',
            controller: 'loginController as vm'
          })

        });
})();
