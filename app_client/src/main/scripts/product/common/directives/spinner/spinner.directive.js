'use strict';

angular.module('bmcApp')

    .directive('spinner', spinner);

function spinner() {
    return {
        restrict: "AEC",
        compile: function (element) {
            element.bind('keydown', function (e) {
                e.preventDefault();
                return false;
            });
            var minNumber = 1;
            var maxNumber = 10;

            $('.spinner .btn:first-of-type').on('click', function() {
                if(element.val() == maxNumber){
                    return false;
                }else{
                    element.val( parseInt(element.val(), 10) + 1);
                    return false;
                }
            });

            $('.spinner .btn:last-of-type').on('click', function() {
                if(element.val() == minNumber){
                    return false;
                }else{
                    element.val( parseInt(element.val(), 10) - 1);
                    return false;
                }
            });
        }
    }
}