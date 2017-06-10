(function() {
    'use strict';

    angular
        .module('app.lgtm')
        .controller('lgtmListController', lgtmListController);

    /* @ngInject */
    function lgtmListController(postService, $stateParams, $state) {
        var vm = this;

        activate();

        ////////////////////////

        function activate() {

          postService.Posts().query({}, function(response) {
            vm.posts = response;
            console.log(vm.posts)
          });

        }
    }
})();
