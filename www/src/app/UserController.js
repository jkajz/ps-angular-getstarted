'use strict';

module.exports = function($scope, github, $routeParams) {

    var onRepos = function(data) {
        $scope.repos = data;
    };

    var onUserComplete = function(data) {
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos, onError);
    };

    var onError = function(error) {
        $scope.error = 'Could not fetch data';
    };

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = '-stargazers_count';

    github.getUser($scope.username).then(onUserComplete, onError);

};