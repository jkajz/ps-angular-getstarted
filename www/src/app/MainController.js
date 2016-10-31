'use strict';

module.exports = function($scope, $http) {

    var onRepos = function(response) {
        $scope.repos = response.data;
    };

    var onUserComplete = function(response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
             .then(onRepos, onError);
    };

    
        
    var onError = function(error) {
        $scope.error = 'Could not fetch data';
    };
    
    $scope.search = function(username) {
        $http.get('https://api.github.com/users/' + username)
        .then(onUserComplete, onError);
    };

    $scope.username = 'angular';
    $scope.message = 'Github Viewer';
    $scope.repoSortOrder = '-stargazers_count';
};