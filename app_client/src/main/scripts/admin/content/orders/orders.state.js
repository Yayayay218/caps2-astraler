'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('orders', {
                url: '/admin/orders',
                parent: 'admin',
                views: {
                    'content@': {
                        templateUrl: 'scripts/admin/content/orders/orders.html',
                        controller: 'OrderController'
                    }
                }
            });
    });