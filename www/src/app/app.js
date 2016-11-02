'use strict';
var angular = require('angular');
require('angular-route');

var app = angular.module('githubViewer', ['ngRoute']);

app.factory('github', ['$http', require('./github')]);
app.controller('MainController', ['$scope', '$interval', '$location', require('./MainController')]);
app.controller('UserController', ['$scope', 'github', '$routeParams', require('./UserController')]);

app.config(function($routeProvider){
    $routeProvider
        .when('/main', {
            templateUrl: 'main.html',
            controller: 'MainController'
        })
        .when('/user/:username', {
            templateUrl: 'user.html',
            controller: 'UserController'
        })
        .otherwise({redirectTo: '/main'});
});