'use strict';
angular.module('bmcApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('collection', {
                url: '/admin/collection',
                parent: 'admin',
                views: {
                    'content@':{
                        templateUrl: "scripts/admin/content/collection/collection.html",
                        controller: 'CollectionController'
                    }
                }
            });
    });