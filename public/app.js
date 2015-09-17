'use strict';


angular
.module('request_form', [
  'request_form.controllers','request_form.services','ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
 when("/register", {templateUrl: "partials/register.html", controller: "regController"}).
 otherwise({redirectTo: '/home'});
}]);