'use strict';

angular.module('bmcApp')

    .controller('myCart2Ctrl', function ($scope) {

        $scope.cart = {
            img: 'assets/img/home/greenchair.jpg',
            name: 'Garden Chairs',
            description: 'Althusser Competing Interpellations And The Third Text',
            price: '$400',
            quantity: '2',
            amount: '$200'
        };
    });
