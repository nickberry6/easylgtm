(function() {
    'use strict';

    angular
        .module('app')
        .factory('loginService', loginService)



    /* @ngInject */
    function loginService($cookies) {
        var service = {
          getProfile: getProfile
        };

        return service;


        function getProfile() {

          var profile = {}

          if($cookies.get('easy')){
            profile = {username: "yolobuzzid"}
          }

          return profile
      };
    }


})();
