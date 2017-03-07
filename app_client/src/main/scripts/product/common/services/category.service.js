'use strict';

angular.module('bmcApp')
// .service('CategoryService',function ($http) {
//     this.getCategory = function getCategory(){
//         return $http.get('http://www.mocky.io/v2/58a94fc02c00006713cae39b');
//     }
// });
    .factory('CategoryService', function ($http) {
        return {
            // getCategory: getCategory
            deleteCategory: deleteCategory,
            getCategory: getCategory,
            addCategory: addCategory
        };
        // function getCategory() {
        //     return $http.get('http://demo4215649.mockable.io/category').then(function (data) {
        //        console.log(data.data);
        //     });
        // }
        function deleteCategory() {
            return $http.get(['http://demo4215649.mockable.io/category', 'delete'].join(''));
        }

        function getCategory() {
            return $http.get(['/api/categories'].join(''));
        }
        function addCategory(category){
            return $http.post('/api/category', category);
        }
    });
