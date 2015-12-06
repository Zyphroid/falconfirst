angular.module('CreateProductCtrl', []).controller('CreateProductController', ['$scope', '$http', function($scope, $http) {

    $scope.product = {
        'status': '',
        'scheduled': '',
        'image': ''
    };

    $scope.error = false;
    $scope.loading = false;
    $scope.submit = function(data) {
        $scope.loading = true;
        $http.post('/api/v1/product', data).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available

            $scope.loading = false;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.loading = false;
            $scope.error = true;
        });
    };
}]);