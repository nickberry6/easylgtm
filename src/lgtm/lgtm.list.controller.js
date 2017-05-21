(function() {
    'use strict';

    angular
        .module('app.lgtm')
        .controller('lgtmListController', lgtmListController);

    /* @ngInject */
    function lgtmListController(programService, $stateParams, $state) {
        var vm = this;

        activate();

        ////////////////////////

        function activate() {
          console.log("I was called")
          // programService.Programs().query(function(response){
          //   vm.items = response;
          // });
        }
    }
})();
