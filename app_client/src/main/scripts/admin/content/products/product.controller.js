angular.module('bmcApp')
    .controller('ProductController', function ($scope, DataTable, Button) {
        $scope.status = {
            step: 1,
            select: [
                {name: 'Not set', value: 'notset'},
                {name: 'True', value: "True"},
                {name: 'False', value: "False"}
            ]
        };
        $scope.products = {};

        $scope.changeView = function changeView(param) {
            $scope.status.step = param === 'back' ? $scope.status.step - 1 : $scope.status.step + 1;
            if (param === 'back') {
                $scope.products = {};
            }
        };
        $scope.edit = function (data) {
            $scope.$apply(function () {
                $scope.changeView();
                $scope.products = data;
            });
        };
        $scope.categories = [
            {
                "id:": 1,
                "name": "indoor"
            },  {
                "id:": 2,
                "name": "outdoor"
            },  {
                "id:": 3,
                "name": "beach"
            },  {
                "id:": 3,
                "name": "garden"
            },  {
                "id:": 3,
                "name": "table"
            }
        ];
        var loadProductsList = function loadProductsList() {
            var options = {
                url: [" http://www.mocky.io/v2/58afbd29120000370c7422a7"].join(''),
                columns: [
                    {'title': 'ID', 'data': null},
                    {'title': 'Category', 'data': 'category'},
                    {'title': 'Image', 'data': 'image'},
                    {'title': 'Product SKU', 'data': 'sku'},
                    {'title': 'Product Name', 'data': 'name'},
                    {'title': 'Unit Price', 'data': 'unitprice'},
                    {'title': 'Discounted Price', 'data': 'discounted'},
                    {'title': 'In Stock', 'data': 'instock'},
                    {'': ''}
                ],
                columnDefs: [
                    {
                        "render": function () {
                            return Button.groupButton([Button.editButton(), Button.deleteButton()]);
                        },
                        "targets": -1
                    },
                    {"width": "auto", "targets": 3},
                ]
            };
            options.edit = function (data) {
                $scope.edit(data);
            };
            DataTable.generateDataTable(options, angular.element(document.querySelector('#productsDataTable')));
        };

        $scope.$on('$includeContentLoaded', function (obj, url) {
            if (url === 'scripts/admin/content/products/product.list.template.html') {
                loadProductsList();
            }
        });

    });