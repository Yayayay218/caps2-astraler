'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('adminCategory', {
                url: '/admin/category',
                parent: 'admin',
                views: {
                    'content@': {
                        templateUrl: 'scripts/admin/content/category/category.html',
                        controller: 'CategoryController'
                    }
                }
            });
    });