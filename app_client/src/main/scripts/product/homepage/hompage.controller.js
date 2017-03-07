'use strict';

angular.module('bmcApp')

    .controller('homePageCtrl', function ($scope, banner, CategoryService) {

        $scope.bannerByID = banner
            .bannerByID('58bd1d61e2b2605dfa48731e')
            .error(function (e) {
                alert(e);
            })
            .then(function (response) {
                $scope.bannerByID = {
                    title: response.data.title,
                    description: response.data.description,
                    buttonContent: response.data.buttonContent
                };
                // console.log($scope.bannerByID);
            });


        $scope.listBanners = banner
            .bannerGetAll()
            .error(function (e) {
                alert(e);
            })
            .then(function (response) {
                $scope.listBanners = response.data;
                console.log($scope.listBanners);
            });
    });
