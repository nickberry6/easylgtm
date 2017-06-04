(function() {
    'use strict';

    angular
        .module('app.toolbar')
        .controller('toolbarController', toolbarController);

    /* @ngInject */
    function toolbarController($window) {
        var vm = this;

        activate();

        /////////////////////////////////

        function activate() {
          vm.username = $window.localStorage.getItem('username');
        };

    }
})();
