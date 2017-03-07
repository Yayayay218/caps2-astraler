angular.module('bmcApp')
    .controller('OrderController', function ($scope, DataTable, Button) {
            $scope.status = {
                step: 1,
                select: [
                    {name: 'Approve', value: '1'},
                    {name: 'Pending', value: '2'},
                ]
            };
            $scope.orders = {};

            $scope.changeView = function changeView(param) {
                $scope.status.step = param === 'back' ? $scope.status.step - 1 : $scope.status.step + 1;
                if (param === 'back') {
                    $scope.orders = {};
                }
            };
            $scope.edit = function (data) {
                $scope.$apply(function () {
                    $scope.changeView();
                    $scope.orders = data;
                });
            };

            var loadOrdersList = function loadOrdersList() {
                    var options = {
                        url: ["http://www.mocky.io/v2/58bcd0e50f0000e50c5c6604"].join(''),
                        columns: [
                            {'title': 'ID', 'data': null},
                            {'title': 'Order Number', 'data': 'ordernumber'},
                            {'title': 'Customer ID', 'data': 'customerid'},
                            {'title': 'Order Date', 'data': 'orderdate'},
                            {'title': 'Ship Address', 'data': 'address'},
                            {'title': 'Total Price', 'data': 'price'},
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
                                    var className = data === 'Active' ? 'label-success' : 'label-danger';
                                    return ['<span class="label label-sm ', className, '">', data, '</span>'].join('');
                                },
                                "targets": -2
                            },
                            {"width": "auto", "targets": 3},
                        ]
                    };
                    options.edit = function (data) {
                        $scope.edit(data);
                    };
                    DataTable.generateDataTable(options, angular.element(document.querySelector('#ordersDataTable')));
                }
                ;

            $scope.$on('$includeContentLoaded', function (obj, url) {
                if (url === 'scripts/admin/content/orders/order.list.template.html') {
                    loadOrdersList();
                }
            });

        }
    );