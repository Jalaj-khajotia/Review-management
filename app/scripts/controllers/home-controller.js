'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('HomeCtrl', ['$scope', '$position', '$http', function($scope, $position, $http) {
        $scope.myFunction = function() {
            document.getElementById("myDropdown").classList.toggle("show");
            // $scope.dropdownClicked();
        }
        function GetData(){
            $http.get("http://localhost:8000/products")
                .success(function(data) {
                    console.log(data);
                    $scope.reviews = data;
                })
                .error(function(data, status, headers, config) {
                    console.log(status + " Data: " + data);
                });
        }
        GetData();

        $scope.$watch('searchdata', function(newValue, oldValue) {
            $scope.search(newValue);
            //do something
        });
        $scope.search = function(key) {
          /*  $http.defaults.headers.common['Content-Type'] = 'application/json';
            $http.defaults.headers.common['x-access-token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0NTM5ODEzMTY2MDl9.PIJUtjcvZXmu_zxFh6KeU3aikXRyDcpop2MAMM_sQas';
*/
          /*  $http.get('http://localhost:8500/api/v1/product/' + key)
                .then(function(response) {
                    $scope.searchResult = [];
                    if (response.data.length > 0) {
                        sessionStorage.setItem('customerSearch', JSON.stringify(response.data));
                    }
                    console.log(response.data);
                    $scope.searchResult = response.data;
                }, function(error) {
                    $scope.searchResult = [];
                    console.log(error.data);
                });*/
        }


        // Close the dropdown menu if the user clicks outside of it
        /*    window.onclick = function(event) {
                if (!event.target.matches('.dropbtn')) {

                    var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                }
            }*/
        $scope.isDropDownVisible = false;

        $scope.OptionSelected = function(val) {
            if (val == "1") {
                $scope.searchOption = "by Name";
            } else if (val == "2") {
                $scope.searchOption = "by Order id";
            } else if (val == "3") {
                $scope.searchOption = "by Mobile";
            }
            console.log(val);
        }
        $scope.dropdownClicked = function() {
            document.getElementById("myDropdown").classList.toggle("show");
        }
    }]);
