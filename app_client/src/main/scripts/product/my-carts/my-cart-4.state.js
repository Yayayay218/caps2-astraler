'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {

        $stateProvider

            .state('myCart4', {
                url: '/checkout/cart',
                parent: 'home',
                views: {
                    'content@': {
                        templateUrl: 'scripts/product/my-carts/my-cart-4.html',
                        controller: 'myCart2Ctrl'
                    }
                }
            })


    });