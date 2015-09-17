angular.module('request_form.services', []).
  factory('ergastAPIservice', function($http,$location,$window,$rootScope) {

    var ergastAPI = {};


    ergastAPI.sendRegisteration = function(formData) {
    	console.log(formData);	
      $http.post('http://localhost:3030/register', formData).success(function (data) {   
    	alert(data);
    });

    }

    return ergastAPI;

  
  });