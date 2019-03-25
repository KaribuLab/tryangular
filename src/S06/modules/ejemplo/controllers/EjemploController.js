angular.module("EjemploModule").controller("EjemploController",
["$scope", "EJEMPLO", "LISTA",
function($scope, EJEMPLO, LISTA){
	
	$scope.listaNumeros = EJEMPLO.numeros;
	$scope.listaColores = LISTA.colores;
	
}]);
