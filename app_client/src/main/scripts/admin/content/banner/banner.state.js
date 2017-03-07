'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('banner', {
                url: '/admin/banner',
                parent: 'admin',
                views: {
                    'content@': {
                        templateUrl: 'scripts/admin/content/banner/banner.html'
                    }
                }
            });
    });