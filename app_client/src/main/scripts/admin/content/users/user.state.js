'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('user', {
                url: '/admin/user',
                parent: 'admin',
                views: {
                    'content@': {
                        templateUrl: 'scripts/admin/content/users/user.html',
                        controller: 'UserController'
                    }
                }
            });

    });