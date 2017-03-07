'use strict';

angular.module('bmcApp')
    .controller('UserController', function ($scope, DataTable, Button) {
            $scope.status = {
                step: 1,
                select: [
                    {name: 'Active', value: "1"},
                    {name: 'Locked', value: "2"},
                    {name: 'Pending', value: "3"}
                ]
            };
            $scope.user = {};
            $scope.changeView = function changeView(param) {
                $scope.status.step = param === 'back' ? $scope.status.step - 1 : $scope.status.step + 1;
                if (param === 'back') {
                    $scope.user = {};
                }
            };
            $scope.edit = function (data) {
                $scope.$apply(function () {
                    $scope.changeView();
                    $scope.user = data;
                });
            };
            var loadUsersList = function loadUsersList() {
                    var options = {
                        url: ["http://www.mocky.io/v2/58b633c0110000e2079c40e2"].join(''),
                        columns: [
                            {'title': 'ID', 'data': null},
                            {'title': 'Username', 'data': 'username'},
                            {'title': 'Email', 'data': 'email'},
                            {'title': 'Fullname', 'data': 'fullname'},
                            {'title': 'Address', 'data': 'address'},
                            {'title': 'Created At', 'data': 'timespan'},
                            {'title': 'Status', 'data': 'status'},
                            {'': ''}
                        ],
                        columnDefs: [
                            {
                                "render": function () {
                                    return Button.groupButton([Button.editButton(), Button.deleteButton()]);
                                },
                                "targets": -1
                            },
                            {
                                "render": function (data) {
                                    var className = data;
                                    if (data === 'Active') {
                                        className = 'label-success'
                                    }
                                    else {
                                        if (data === 'Pending') {
                                            className = 'label-warning'
                                        }
                                        else
                                            className = 'label label-sm label-inverse arrowed-in'
                                    }
                                    return ['<span class="label label-sm ', className, '">', data, '</span>'].join('');
                                }
                                ,
                                "targets": -2
                            },
                            {"width": "auto", "targets": 3},

                        ]
                    };
                    options.edit = function (data) {
                        $scope.edit(data);
                    };
                    DataTable.generateDataTable(options, angular.element(document.querySelector('#userDataTable')));
                }
                ;
            $scope.$on('$includeContentLoaded', function (obj, url) {
                if (url === 'scripts/admin/content/users/user.list.template.html') {
                    loadUsersList();
                }
            });
        }
    );