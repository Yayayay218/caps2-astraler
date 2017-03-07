'use strict'
angular.module('bmcApp')
    .controller('RoleController', function ($scope, RoleService) {
        RoleService.getRole().then(function (response) {
            $scope.role = response.data;
        })
            .catch(function () {
                $scope.role = [];
            });
        $scope.changename = function (name) {
           $scope.name = 'Cha';
        };

    });