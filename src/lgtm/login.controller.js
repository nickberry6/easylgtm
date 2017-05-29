(function() {
    'use strict';

    angular
        .module('app.lgtm')
        .controller('loginController', loginController);

    /* @ngInject */
    function loginController(programService, $stateParams, $state, $resource, $http, api, api3) {
        var vm = this;

        vm.login = login;

        activate();

        ////////////////////////


        function activate() {

          console.log("Train yourself on the art of the fart.")

          // var login = api3.login({name: 'Nick Berry', password: 'password'}, function(response) {
          //
          //   console.log(response);
          //
          // });
        }


        function login() {

          api3.login({name: vm.username, password: vm.password}, function(response) {
          

            console.log(response);

          });
        }




    }
})();
