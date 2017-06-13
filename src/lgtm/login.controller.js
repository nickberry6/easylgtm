(function() {
    'use strict';

    angular
        .module('app.lgtm')
        .controller('loginController', loginController);

    /* @ngInject */
    function loginController($stateParams, $state, $cookies, $window, loginService) {
        var vm = this;

        vm.login = login;

        activate();

        ////////////////////////


        function activate() {

        }


        function login() {
          loginService.authenticate().save({username: vm.username, password: vm.password}, function(response) {
            $cookies.put('et', response.token);
            $window.localStorage.setItem('username', response.username);
            $state.go('home');
          });
        }
    }
})();
