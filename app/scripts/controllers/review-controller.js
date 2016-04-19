/**
 * Created by Jalaj Khajotia on 4/13/2016.
 */
google.setOnLoadCallback(function() {
    // angular.bootstrap(document.body, ['sbAdminApp']);
});
google.load('visualization', '1', {
    packages: ['corechart']
});
angular.module('sbAdminApp', ['graph'])
    .controller('ReviewCtrl', function($scope, $http, $location, $timeout, $stateParams) {
        // Initial chart data
        $scope.chartTitle = "Customer Happiness Index";
        $scope.chartWidth = 400;
        $scope.chartHeight = 300;
        var reviewId = $stateParams.key;
        console.log(reviewId);
        /*$scope.chartData = [
            ['Loved it & Recommended', 3],
            ['Manageable', 11],
            ['Average', 4],
            ['Not Satisfied', 4],
            ['Awful', 7]

        ];*/
        $(document).ready(function() {
            // $('.carousel.carousel-slider').carousel({full_width: true});
        });

        function processReviews(reviews) {
            console.log(reviews);
            var productRating = [0, 0, 0, 0, 0];
            for (var i = reviews.length - 1; i >= 0; i--) {
                productRating[reviews[i].rating - 1] = productRating[reviews[i].rating - 1] + 1;
            };
            return productRating;
        }

        function GetData() {
            $http.get("http://localhost:8000/product/"+ reviewId)
                .success(function(data) {
                    console.log(data);
                    $scope.product = data;
                    var processedReviews = processReviews(data.Reviews);
                    $scope.chartData = [
                        ['Loved it & Recommended', processedReviews[4]],
                        ['Manageable', processedReviews[3]],
                        ['Average', processedReviews[2]],
                        ['Not Satisfied', processedReviews[1]],
                        ['Awful', processedReviews[0]]

                    ];
                    console.log(processedReviews);
                    $timeout(function() {
                        $('.carousel').carousel({ time_constant: 400, dist: 0 });
                    }, 100);

                })
                .error(function(data, status, headers, config) {
                    console.log(status + " Data: " + data);
                });
        }
        GetData();

        $scope.myInterval = 3000;
        $scope.slides = [{
            image: 'images/1.jpg'
        }, {
            image: 'images/2.jpg'
        }, {
            image: 'images/3.jpg'
        }, {
            image: 'images/4.jpg'
        }];
    });
