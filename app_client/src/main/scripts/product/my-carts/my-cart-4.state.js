'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {

        $stateProvider

            .state('myCart4', {
                url: '/myCart4',
                parent: 'home',
                views: {
                    'content@': {
                        templateUrl: 'scripts/product/my-carts/my-cart-4.html',
                        controller: 'myCart2Ctrl'
                    }
                }
            })


    });