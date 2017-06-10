(function() {
    'use strict';

    angular
        .module('app')
        .factory('postService', postService);

    /* @ngInject */
    function postService($resource) {
        var service = {
          Posts: Posts,
          updatePost: updatePost
        };

        return service;

        // refactor Posts method for each action individually

        function Posts() {
          return $resource('http://localhost:3000/api/posts/:id');
        }

        function updatePost() {
          return $resource('http://localhost:3000/api/posts/:id', null, {
          'update': { method:'PUT' }
        })
      };
    }
})();
