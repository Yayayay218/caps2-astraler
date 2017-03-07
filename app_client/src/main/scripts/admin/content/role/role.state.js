'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('role', {
                url: '/admin/role',
                parent: 'admin',
                views: {
                    'content@': {
                        templateUrl: 'scripts/admin/content/role/role.html',
                        controller: 'RoleController'
                    }
                }
            });
    });