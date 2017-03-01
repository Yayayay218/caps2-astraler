'use strict';

angular.module('bmcApp')

    .controller('loginCtrl', loginCtrl);

function loginCtrl($scope, $state, auth, $location) {

    $scope.credentials = {
        email: '',
        password: ''
    }

    // Home/Login
    $scope.onSubmit = function () {
        auth
            .login($scope.credentials)
            .error(function (err) {
                alert(err);
            })
            .then(function () {
                $state.reload();
            })
    };

    // Check-out / Login
    $scope.onLogin = function () {
        auth.login($scope.credentials)
            .error(function (err) {
                alert(err);
            })
            .then(function () {
                $location.path('myCart4');
            })
    }

    $scope.logOut = function () {
        auth.logout();
        $state.reload();
    };

    $scope.isLoggedIn = auth.isLoggedIn();

    $scope.currentUser = auth.currentUser();
}