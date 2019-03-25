angular.module("MainModule").controller("ContainerController",
["$scope", "$rootScope", "EJEMPLO", "LISTA",
function($scope, $rootScope, EJEMPLO, LISTA){
	
	$scope.listaNumeros = EJEMPLO.numeros;
	$scope.listaColores = LISTA.colores;
	
	$scope.mostrarOcultar = function(){
		$scope.textoBoton = ($scope.textoBoton == "Mostrar" ? "Ocultar" : "Mostrar");
		$rootScope.mostrarEjemplo = !$rootScope.mostrarEjemplo;		
	};

	$scope.textoBoton = "Mostrar";

}]);
