'use strict';

// Declare src level module which depends on views, and components
angular.module('bmcApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/admin');

        $stateProvider
            .state('admin', {
                views: {
                    'navbar@': {
                        templateUrl: 'scripts/admin/components/navbar/navbar.html'
                    },
                    'sidebar@': {
                        templateUrl: 'scripts/admin/components/sidebar/sidebar.html',
                        controller: 'SidebarController'
                    },
                    'footer@': {
                        templateUrl: 'scripts/admin/components/footer/footer.html'
                    }
                }
            });
    })
    .run(function () {

    });

