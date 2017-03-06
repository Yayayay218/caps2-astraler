'use strict';

angular.module('bmcApp')

    .controller('accountCtrl', accountCtrl);

function accountCtrl($scope, auth) {

    $scope.user={};

    auth.secureLogged()
        .success(function (data) {
        $scope.user=data;
    })
        .error(function (e) {
            console.log(e);
        });
}