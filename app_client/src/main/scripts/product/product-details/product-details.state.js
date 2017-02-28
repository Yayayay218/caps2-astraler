'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {

        $stateProvider

            .state('product-details', {
                url: '/product-details',
                parent: 'home',
                views: {
                    'content@': {
                        templateUrl: 'scripts/product/product-details/product-details.html'
                    }
                }
            });
    });