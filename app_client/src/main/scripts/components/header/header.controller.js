'use strict';

angular.module('bmcApp')

    .controller('headerCtrl', headerCtrl);

function headerCtrl($scope, $location, auth) {
    $scope.categories = ['Patio Furniture', 'Indoor', 'Dining Room', 'Outdoor Benches', 'Chair Lounges', 'Sofas and Loveseats'];

    $scope.currencies = ['VND', 'EUR'];

    $scope.checkOut = function () {
        if(auth.isLoggedIn())
            $location.path('myCart4');
        else
            $location.path('check-out');
    }
}
