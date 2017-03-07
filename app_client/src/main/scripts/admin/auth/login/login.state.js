'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'content@': {
                        templateUrl: 'scripts/admin/auth/login/login.html'
                    }
                }
            });
    });