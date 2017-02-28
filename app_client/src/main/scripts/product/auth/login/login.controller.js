'use strict';

angular.module('bmcApp')

    .controller('loginCtrl', loginCtrl);

function loginCtrl($scope, $state, auth) {

    $scope.credentials = {
        email: '',
        password: ''
    }

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

    $scope.logOut = function () {
        auth.logout()
        $state.reload();
    };

    $scope.isLoggedIn = auth.isLoggedIn();

    $scope.currentUser = auth.currentUser();
}