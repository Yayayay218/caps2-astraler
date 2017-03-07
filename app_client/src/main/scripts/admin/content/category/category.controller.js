'use strict';

angular.module('bmcApp')
    .controller('CategoryController', function ($scope, DataTable, Button, Dialog, CategoryService) {
        $scope.status = {
            step: 1,
            select: [
                {name: 'Not set', value: 'notset'},
                {name: 'True', value: "True"},
                {name: 'False', value: "False"}
            ]
        };
        $scope.category = {};

        $scope.changeView = function changeView(param) {
            $scope.status.step = param === 'back' ? $scope.status.step - 1 : $scope.status.step + 1;
            if (param === 'back') {
                $scope.category = {};
            }
        };

        var reloadListCategory = function reloadListCategory() {
            angular.element(document.querySelector('#categoryDataTable')).DataTable().ajax.reload(null, false);
        };

        $scope.edit = function (data) {
            $scope.$apply(function () {
                $scope.changeView();
                $scope.category = data;
            });
        };

        var loadCategoriesList = function loadCategoriesList() {
            var options = {
                url: ["http://www.mocky.io/v2/58b3b1fb11000048111c42a1"].join(''),
                columns: [
                    {'title': 'ID', 'data': null},
                    {'title': 'CategoryName', 'data': 'categoryname'},
                    {'title': 'Description', 'data': 'description'},
                    {'': ''}
                ],
                columnDefs: [
                    {
                        "render": function () {
                            return Button.groupButton([Button.editButton(), Button.deleteButton()]);
                        },
                        "targets": -1
                    },
                ]
            };
            options.delete = function (data) {
                $scope.deleteCategory(data);
            };
            options.edit = function (data) {
                $scope.edit(data);
            };
            DataTable.generateDataTable(options, angular.element(document.querySelector('#categoryDataTable')));
        };

        $scope.$on('$includeContentLoaded', function (obj, url) {
            if (url === 'scripts/admin/content/category/category.list.template.html') {
                loadCategoriesList();
            }
        });
    });

