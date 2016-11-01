'use strict';

var app = require('angular').module('githubViewer', []);

app.factory('github', ['$http', require('./github')]);
app.controller('MainController', ['$scope', 'github', '$interval', '$log', '$anchorScroll', '$location', require('./MainController')]);