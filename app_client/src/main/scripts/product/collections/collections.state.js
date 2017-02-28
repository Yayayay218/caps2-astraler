'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {

        $stateProvider

            .state('collections', {
                url: '/collections',
                parent: 'home',
                views: {
                    'content@': {
                        templateUrl: 'scripts/product/collections/collections.html'
                    }
                }
            });
    });