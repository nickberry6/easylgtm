(function() {
    'use strict';

    angular
        .module('app')
        .factory('httpInterceptorService', httpInterceptorService)

      /* @ngInject */
      function httpInterceptorService($cookies, TokenService) {

        var sessionInjector = {
          request: function(config) {

              // if (!TokenService.isAnonymus) {
              //     config.headers['x-session-token'] = SessionService.token;
              // }

             //config.headers['x-session-token'] = TokenService.getToken();

              return config;
          }
      };
      return sessionInjector;

      }

})();
