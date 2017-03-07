'use strict';

var bmcApp = angular.module('bmcApp', ['ui.router']);

bmcApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            views: {
                'header': {
                    templateUrl: 'scripts/product/components/header/header.html',
                    controller: 'headerCtrl'
                },

                'footer': {
                    templateUrl: 'scripts/product/components/footer/footer.html',
                    controller: 'footerCtrl'
                }
            }
        });
});



