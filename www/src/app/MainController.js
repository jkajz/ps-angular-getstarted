'use strict';

module.exports = function($scope, $interval, $location) {

    $scope.search = function(username) {
        if (countdownInterval) {
            $interval.cancel(countdownInterval);
            $scope.countdown = null;
        }
        $location.path('/user/' + username);
    };

    var countdownInterval = null;

    var  decrementCountdown = function() {
        $scope.countdown -= 1;
        if ($scope.countdown < 1) {
            $scope.search($scope.username);
        }
    };

    var startCountdown = function() {
        countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };
    
    $scope.username = 'angular';
    $scope.countdown = 5;

    startCountdown();
};