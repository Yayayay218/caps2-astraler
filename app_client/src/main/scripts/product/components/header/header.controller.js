'use strict';

angular.module('bmcApp')

    .controller('headerCtrl', headerCtrl);

function headerCtrl($scope, $location, auth, CategoryService) {

    //  Category
    $scope.listAllCate = CategoryService.getCategory()
        .error(function (e) {
            alert(e);
        })
        .then(function (res) {
            $scope.listAllCate = res.data;
            console.log($scope.listAllCate);
        });

    $scope.checkOut = function () {
        if(auth.isLoggedIn())
            $location.path('checkout/cart');
        else
            $location.path('check-out');
    }
}
