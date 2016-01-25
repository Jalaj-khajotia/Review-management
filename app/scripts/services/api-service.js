'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .service('Api', function($scope, $http) {
    this.getProductListByName = function(keyword){
 	
    
      return $http.get('http://localhost:8500/api/v1/products')
        .then(function(response) {
          return response;
        }, function(error) {
          return error;
        });
    }
    
});