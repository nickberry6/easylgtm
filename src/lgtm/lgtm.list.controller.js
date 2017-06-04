(function() {
    'use strict';

    angular
        .module('app.lgtm')
        .controller('lgtmListController', lgtmListController)
        .factory('api2', ['$resource',
           function($resource) {
            return {
              Posts: $resource('http://localhost:3000/api/posts', {}),
              Recipe: $resource('/recipes/:id', {id: '@id'}),
              Users:  $resource('/users/:id', {id: '@id'}),
              Group:  $resource('/groups/:id', {id: '@id'})

            };
          }])
          .factory('api', function ($resource) {
              var data = $resource('http://localhost:3000/api/posts/', {}, {

              posts:{
                  method:'GET'
                  ,
                  isArray:true
                  }

              });
              return data;
          })
          .factory('api3', function ($resource) {
                        var data = $resource('http://localhost:3000/api/authenticate/', {}, {

                        login:{
                            method:'POST'
                          },
                        posts:{
                            method:'GET'
                            ,
                            isArray:true
                            }

                        });
                        return data;
                    });

    /* @ngInject */
    function lgtmListController(loginService,programService, $stateParams, $state, $resource, $http, api, api3) {
        var vm = this;

        activate();

        ////////////////////////

        function activate() {

          vm.userProfile = loginService.getProfile();

          api.posts({}, function(response) {
            vm.posts = response;
            console.log(vm.posts)
          });


        }
    }
})();
