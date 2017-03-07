'use strict';

angular.module('bmcApp')

    .controller('footerCtrl', function ($scope) {
        $scope.quickLinks = ['About Us', 'How to Buy', 'Support', 'Press / Blog', 'Contact Us'];

        $scope.trends = ['Popular', 'Trending', 'Catalog', 'Features'];

        $scope.popularCate = ['Chair Lounges', 'Outdoor Benches', 'Dining Tables', 'Patio Furniture', 'Sofas and Loveseats'];
    });
