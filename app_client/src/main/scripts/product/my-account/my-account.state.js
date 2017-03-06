'use strict';

angular.module('bmcApp')

    .config(function ($stateProvider) {

        $stateProvider

            .state('my-account', {
                url: '/customer/account/edit',
                parent: 'home',
                views: {
                    'content@': {
                        templateUrl: 'scripts/product/my-account/my-account.html'
                    }
                }
            });
    });
