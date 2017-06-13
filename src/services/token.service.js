(function() {
    'use strict';

    angular
        .module('app')
        .factory('TokenService', TokenService)



    /* @ngInject */
    function TokenService($cookies) {
        var service = {
          getToken: getToken
        };

        return service;

        function getToken(){
          var token = {}
          if($cookies.get('et')){
            token = $cookies.get('et');
          };

          return token;
      };

    }


})();
