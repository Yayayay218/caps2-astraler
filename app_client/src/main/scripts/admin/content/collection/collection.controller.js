'use strict';

angular.module('bmcApp')
    .controller('CollectionController', function ($scope, DataTable, Button) {
        $scope.status = {
            step: 1,
            select: [
                {name: 'Not set', value: 'notset'},
                {name: 'True', value: "True"},
                {name: 'False', value: "False"}
            ]
        };
        $scope.collection = {};
        $scope.collections = [
            {
                "id": 1,
                "name": "Ghế Dài"
            },{
                "id": 1,
                "name": "Ghế Ngắn"
            },{
                "id": 1,
                "name": "Ghế Sofa"
            },{
                "id": 1,
                "name": "Ghế Hòa Phát"
            },{
                "id": 1,
                "name": "Bàn Dài"
            },{
                "id": 1,
                "name": "Bàn Gia Đình"
            },{
                "id": 1,
                "name": "Bàn Nội Thất"
            },{
                "id": 1,
                "name": "Tủ Đứng"
            },{
                "id": 1,
                "name": "Tủ Dài"
            }
        ]
        $scope.changeView = function changeView(param) {
            $scope.status.step = param === 'back' ? $scope.status.step - 1 : $scope.status.step + 1;
            if (param === 'back') {
                $scope.collection = {};
            }
        };

        $scope.edit = function (data) {
            $scope.$apply(function () {
                $scope.changeView();
                $scope.collection = data;
            });
        };

        var loadCollection = function loadCollection() {
            var options = {
                url: ["http://www.mocky.io/v2/58b3e232110000f6161c4310"].join(''),
                columns: [
                    {'title': 'ID', 'data': null},
                    {'title': 'Collection', 'data': 'name'},
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
            options.edit = function (data) {
                $scope.edit(data);
            };
            DataTable.generateDataTable(options, angular.element(document.querySelector('#collectionDataTable')));
        };

        $scope.$on('$includeContentLoaded', function (obj, url) {
            if (url === 'scripts/admin/content/collection/collection.list.template.html') {
                loadCollection();
            }
        });
    });

