'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('DashboardCtrl', function($scope, $http) {
      function GetData(){
        $http.get("http://localhost:8000/tasks")
            .success(function(data) {
              console.log(data);
              $scope.reviews = data;
            })
            .error(function(data, status, headers, config) {
              console.log(status + " Data: " + data);
            });
      }
      GetData();
});