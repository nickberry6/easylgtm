(function() {
    'use strict';

    angular
        .module('app')
        .factory('loginService', loginService);

    /* @ngInject */
    function loginService($cookies, $resource) {
        var service = {
          authenticate: authenticate
        };

        return service;

        function authenticate() {
          return $resource('http://localhost:3000/api/authenticate/');
        }
    };
})();
