'use strict';

angular.module('bmcApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('adminHome',{
                url: '/admin',
                parent: 'admin',
                views: {
                    'content@':{
                        templateUrl: 'scripts/admin/content/home/home.html'
                    }
                }
            });
    });