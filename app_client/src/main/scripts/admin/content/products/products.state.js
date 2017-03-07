'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('adminproducts', {
                url: '/admin/products',
                parent: 'admin',
                views: {
                    'content@': {
                        templateUrl: 'scripts/admin/content/products/products.html',
                        controller: 'ProductController'
                    }
                }
            });
    });