'use strict';
angular.module('bmcApp')
    .directive('roleDirective', function () {
        return {
            restrict: 'A',
            scope: {
                name: '@'
            }, //thay doi parent scope
            // scope: true, //khong thay doi parent scope
            templateUrl: 'scripts/admin/content/role/role.children.html',
            // link: function (scope, element, attr) {
            //     scope.changename1 = function () {
            //         scope.name = 'Con';
            //     }
            // }
            link: function (scope, element, attr) {
                console.log(scope.name);
            }
        }
    });