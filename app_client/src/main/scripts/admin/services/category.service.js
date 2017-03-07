'use strict';

angular.module('bmcApp')
    // .service('CategoryService',function ($http) {
    //     this.getCategory = function getCategory(){
    //         return $http.get('http://www.mocky.io/v2/58a94fc02c00006713cae39b');
    //     }
    // });
    .factory('CategoryService', function ($http){
       return {
           // getCategory: getCategory
           deleteCategory: deleteCategory
      };
       // function getCategory() {
       //     return $http.get('http://demo4215649.mockable.io/category').then(function (data) {
       //        console.log(data.data);
       //     });
       // }
        function deleteCategory() {
            return $http.get(['http://demo4215649.mockable.io/category', 'delete'].join(''));
        }
    });