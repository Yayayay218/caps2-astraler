'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {

        $stateProvider

            .state('collection-details', {
                url: '/collection-details',
                parent: 'home',
                views: {
                    'content@': {
                        templateUrl: 'scripts/product/collection-details/collection-details.html'
                    }
                }
            });
    });