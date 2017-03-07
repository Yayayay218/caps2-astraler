'use strict';

angular.module('bmcApp')

    .service('banner', banner);

function banner($http) {

    var bannerGetAll = function (banners) {
        return $http.get('/api/banners');
    };

    var bannerByID = function (banner_id) {
        return $http.get('/api/banners/' + banner_id);
    };

    return {
        bannerGetAll: bannerGetAll,
        bannerByID : bannerByID
    };
}
