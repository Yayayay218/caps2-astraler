'use strict';

angular.module('bmcApp')

    .config(function ($stateProvider) {

        $stateProvider

            .state('my-order', {
                url: '/myOrders',
                parent: 'home',
                views: {
                    'content@': {
                        templateUrl: 'scripts/product/my-order/my-order.html'
                    }
                }
            })
    });