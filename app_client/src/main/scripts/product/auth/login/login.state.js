'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'scripts/product/auth/login/login.html',
                controller: 'loginCtrl'
            });
    });
