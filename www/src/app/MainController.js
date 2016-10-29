'use strict';

module.exports = function($scope, $http) {

    var onUserComplete = function(response) {
        $scope.user = response.data;
    };

    var onError = function(error) {
        $scope.error = 'Could not fetch user';
    };

    $http.get('https://api.github.com/users/robconery')
        .then(onUserComplete, onError);

    $scope.message = 'Hello Angular';
};