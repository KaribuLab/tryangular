angular.module("MainModule").controller("StyleController",
["$scope", "EJEMPLO",
function($scope, EJEMPLO){
	
	$scope.listaPersonas = EJEMPLO.personas;
	$scope.listaColores = EJEMPLO.colores;
	$scope.metodoMayor = EJEMPLO.esMayor;

	$scope.varColor = "blue";
	$scope.varEstilo = "texto-rojo-bold";

	$scope.lista=['Manzana', 'Pera', 'Uva', 'Cereza', 'Mora'];

	$scope.pintarTexto = function(flag){
		if(flag){
			return 'texto-rojo-bold';
		}else{
			return 'borde-rojo';
		}
	}
}]);
