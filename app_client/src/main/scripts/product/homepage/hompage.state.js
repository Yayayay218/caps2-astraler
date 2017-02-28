'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {

        $stateProvider

            .state('home-page', {
                url: '/',
                parent: 'home',
                views: {
                    'content@': {
                        templateUrl: 'scripts/product/homepage/home-page.html',
                        controller: 'homePageCtrl'
                    }
                }
            });
    });