/**
 * Created by Jalaj Khajotia on 4/13/2016.
 */
google.setOnLoadCallback(function () {
   // angular.bootstrap(document.body, ['sbAdminApp']);
});
google.load('visualization', '1', {
    packages: ['corechart']
});
angular.module('sbAdminApp',['graph'])
    .controller('ReviewCtrl', function($scope, $http, $location) {
        // Initial chart data
        $scope.chartTitle = "Customer Happiness Index";
        $scope.chartWidth = 400;
        $scope.chartHeight = 300;
        $scope.chartData = [
            ['Manageable', 11],
            ['Not Satisfied', 4],
            ['Average', 4],
            ['Dont Buy', 7],
            ['Loved it & Recommended', 3]
        ];
        $scope.myInterval = 3000;
        $scope.slides = [
            {
                image: 'images/1.jpg'
            },
            {
                image: 'images/2.jpg'
            },
            {
                image: 'images/3.jpg'
            },
            {
                image: 'images/4.jpg'
            }
        ];
    });