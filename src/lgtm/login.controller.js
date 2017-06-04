(function() {
    'use strict';

    angular
        .module('app.lgtm')
        .controller('loginController', loginController);

    /* @ngInject */
    function loginController($stateParams, $state, api3, $cookies, $window) {
        var vm = this;

        vm.login = login;

        activate();

        ////////////////////////


        function activate() {

        }


        function login() {
          api3.login({username: vm.username, password: vm.password}, function(response) {

            $cookies.put('et', response.token);
            $window.localStorage.setItem('username', response.username);
            $state.go('home');
          });
        }
    }
})();
