'use strict';

var app = require('angular').module('githubViewer', []);

app.controller('MainController', ['$scope', '$http', require('./MainController')]);