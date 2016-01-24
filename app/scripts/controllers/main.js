'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position) {
  	  $scope.myFunction = function() {
        document.getElementById("myDropdown").classList.toggle("show");
       // $scope.dropdownClicked();
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

    $scope.OptionSelected = function(val){
    	  	if(val == "1"){
    		$scope.searchOption = "by Name";    		
    	} else if(val == "2"){
    		$scope.searchOption = "by Order id";
    	}else if(val == "3"){
    		$scope.searchOption = "by Mobile";
    	}
    	console.log(val);
    }
    $scope.dropdownClicked = function(){
    	 document.getElementById("myDropdown").classList.toggle("show");
    }
  });
