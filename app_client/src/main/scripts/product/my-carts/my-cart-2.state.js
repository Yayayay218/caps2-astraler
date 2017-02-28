'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {

        $stateProvider

            .state('myCart2', {
                url: '/check-out',
                parent: 'home',
                views: {
                    'content@': {
                        templateUrl: 'scripts/product/my-carts/my-cart-2.html',
                        controller: 'myCart2Ctrl'
                    }
                }
            })


    });
