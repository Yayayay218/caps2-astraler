'use strict'

angular.module('bmcApp')
    .factory('RoleService', function ($http) {
        return {
            getRole: getRole
        };
        function getRole() {
            return $http.get('http://www.mocky.io/v2/58b2e7e0100000101cc3a959');
        }
    });