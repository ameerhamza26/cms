angular.module('request_form.controllers', []).
controller('regController', function($scope,ergastAPIservice) {

    $scope.register = function() {
		//console.log("aa");
		console.log($scope.formData);
    ergastAPIservice.sendRegisteration($scope.formData);
}

});