angular.module("MainModule").controller("FormABController",
["$scope", "$rootScope",
function($scope, $rootScope){

	$scope.nombre="";

	$scope.asignar = function(){
		return $scope.activarFormB();
	};

	$scope.activarFormB = function(){
		return $scope.nombre ==  'hola';
	};

	$scope.mensaje = function(){
		alert("HOLA MUNDO");
	};

	$scope.verFormB = false;
}]);
