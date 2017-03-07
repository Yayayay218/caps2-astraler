'use strict';

angular.module('bmcApp')
    .controller('SubcategoryController', function ($scope, DataTable, Button) {
        $scope.status = {
            step: 1,
            select: [
                {name: 'Not set', value: 'notset'},
                {name: 'True', value: "True"},
                {name: 'False', value: "False"}
            ]
        };
        $scope.subcategory = {};

        $scope.changeView = function changeView(param) {
            $scope.status.step = param === 'back' ? $scope.status.step - 1 : $scope.status.step + 1;
            if (param === 'back') {
                $scope.subcategory = {};
            }
        };

        $scope.edit = function (data) {
            $scope.$apply(function () {
                $scope.changeView();
                $scope.subcategory = data;
            });
        };

        var loadSubcategoriesList = function loadSubcategoriesList() {
            var options = {
                url: ["http://www.mocky.io/v2/58b3ace0110000fa101c429c"].join(''),
                columns: [
                    {'title': 'ID', 'data': null},
                    {'title': 'SubcategoryName', 'data': 'name'},
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
            options.edit = function (data) {
                $scope.edit(data);
            };
            DataTable.generateDataTable(options, angular.element(document.querySelector('#subcategoryDataTable')));
        };

        $scope.$on('$includeContentLoaded', function (obj, url) {
            if (url === 'scripts/admin/content/subcategory/subcategory.list.template.html') {
                loadSubcategoriesList();
            }
        });
    });

