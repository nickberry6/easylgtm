(function() {
    'use strict';

    angular
        .module('app.lgtm')
        .controller('lgtmCreateController', lgtmCreateController);

    /* @ngInject */
    function lgtmCreateController(postService, $stateParams, $state) {
        var vm = this;

        vm.post = {};

        vm.addNew = addNew;

        activate();

        ////////////////////////

        function activate() {

        }

        function addNew() {
          var sanitizedPost = {
            title: vm.post.title,
            description: vm.post.description,
            image: vm.post.image
          };
          postService.Posts().save({sanitizedPost}, function(response) {
            console.log(response);
            $state.go('home');
          });
        }
    }
})();
