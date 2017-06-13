(function() {
    'use strict';

    angular
        .module('app')
        .factory('httpInterceptorService', httpInterceptorService)

      /* @ngInject */
      function httpInterceptorService($cookies, TokenService, $log) {

        var sessionInjector = {
          request: function(config) {
            var token = TokenService.getToken();
            if (token) {
              config.headers['X-Access-Token'] = token;
            };

            return config;
          }
      };
      return sessionInjector;

      }

})();
