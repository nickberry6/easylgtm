(function() {
    'use strict';

    angular
        .module('app.lgtm')
        .config(function($stateProvider){

          $stateProvider
          .state('lgtm-list', {
            url: '/',
            templateUrl: 'lgtm/templates/lgtm.list.html',
            controller: 'lgtmListController as vm'
          })

        });
})();
