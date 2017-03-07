'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('profile', {
                url: '/admin/profile',
                parent: 'admin',
                views: {
                    'content@': {
                        templateUrl: 'scripts/admin/content/profile/profile.html'
                    }
                }
            });
    });