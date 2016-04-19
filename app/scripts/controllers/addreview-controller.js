/**
 * Created by Jalaj Khajotia on 4/17/2016.
 */

angular.module('sbAdminApp')
    .controller('AddReviewCtrl', function($scope, $http, $location) {
        // Initial chart data
        // GET THE FILE INFORMATION.
        $scope.getFileDetails = function (e) {

            $scope.files = [];
            $scope.$apply(function () {

                // STORE THE FILE OBJECT IN AN ARRAY.
                for (var i = 0; i < e.files.length; i++) {
                    $scope.files.push(e.files[i])
                }

            });
        };

        // NOW UPLOAD THE FILES.
        $scope.uploadFiles = function () {

            //FILL FormData WITH FILE DETAILS.
            var data = new FormData();

            for (var i in $scope.files) {
                data.append("uploadedFile", $scope.files[i]);
            }
            console.log($scope.files);

            $.ajax({
                url : 'http://s3.amazonaws.com/jumpy007/2.jpg?Expires=1460920147&AWSAccessKeyId=AKIAIW2EOFJOSJTIGWSQ&Signature=2MwtKwKbZ9aOvjiHCpO7h4xiVHs%3D',
                type : "PUT",
                data :  $scope.files[0],
                dataType : "image/jpeg",
                cache : false,
                contentType : file.type,
                processData : false
            })
                .done(function(){
                    console.info('YEAH', s3presignedUrl.split('?')[0].substr(6));
                })
                    .fail(function(){
                        console.error('damn...');

        });

            // ADD LISTENERS.
            var objXhr = new XMLHttpRequest();
            objXhr.addEventListener("progress", updateProgress, false);
            objXhr.addEventListener("load", transferComplete, false);

            // SEND FILE DETAILS TO THE API.
            objXhr.open("POST", "/api/fileupload/");
           // objXhr.send(data);
        }

        // UPDATE PROGRESS BAR.
        function updateProgress(e) {
            if (e.lengthComputable) {
                document.getElementById('pro').setAttribute('value', e.loaded);
                document.getElementById('pro').setAttribute('max', e.total);
            }
        }

        // CONFIRMATION.
        function transferComplete(e) {
            alert("Files uploaded successfully.");
        }
    });