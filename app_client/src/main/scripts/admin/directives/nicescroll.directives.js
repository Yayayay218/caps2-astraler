'use strict';

angular.module('bmcApp')
    .directive('html',function () {
        return {
            restrict: 'E',
            link: function (scope,element,attr) {
                element.niceScroll();
            }
        }
    });