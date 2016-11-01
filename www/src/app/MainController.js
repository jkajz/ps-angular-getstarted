'use strict';

module.exports = function($scope, github, $interval, $log, $anchorScroll, $location) {

    var onRepos = function(data) {
        $scope.repos = data;
        $location.hash('userdetails');
        $anchorScroll();
    };

    var onUserComplete = function(data) {
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos, onError);
    };

    var onError = function(error) {
        $scope.error = 'Could not fetch data';
    };
    
    $scope.search = function(username) {
        $log.info('Searching for ' + username);
        github.getUser(username).then(onUserComplete, onError);
        if (countdownInterval) {
            $interval.cancel(countdownInterval);
            $scope.countdown = null;
        }
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
    $scope.message = 'Github Viewer';
    $scope.repoSortOrder = '-stargazers_count';
    $scope.countdown = 5;

    startCountdown();
};