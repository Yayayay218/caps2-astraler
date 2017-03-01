'use strict';

  angular
    .module('bmcApp')
    .controller('registerCtrl', registerCtrl);

  function registerCtrl($scope, $state, auth) {

    $scope.credentials = {
      name : "",
      email : "",
      password : ""
    };

    $scope.onSubmit = function () {
      console.log('Submitting registration');
      auth
        .register($scope.credentials)
        .error(function(err){
          alert(err);
        })
        .then(function(){
          console.log('Done');
          $state.reload();
        });
    };
}