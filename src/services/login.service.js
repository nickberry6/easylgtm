(function() {
    'use strict';

    angular
        .module('app')
        .factory('loginService', loginService);

    /* @ngInject */
    function loginService($cookies) {
        var service = {
          authenticate: authenticate,
          getProfile: getProfile
        };

        return service;

        function authenticate() {
          return $resource('http://localhost:3000/api/authenticate/', {}, {
            'login': { method:'POST' }
          })
        }

        function getProfile() {

          var profile = {};

          if($cookies.get('easy')){
            profile = {username: "yolobuzzid"};
          };

          return profile;
        }
    };
})();
