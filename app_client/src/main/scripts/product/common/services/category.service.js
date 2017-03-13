'use strict';

angular.module('bmcApp')

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
