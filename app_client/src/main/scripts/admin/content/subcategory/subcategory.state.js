'use strict'
angular.module('bmcApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('subCategory', {
                url: "/admin/subcategory",
                parent: "admin",
                views:{
                    'content@': {
                        templateUrl: "scripts/admin/content/subcategory/subcategory.html",
                        controller: "SubcategoryController"
                    }
                }
            });
    });