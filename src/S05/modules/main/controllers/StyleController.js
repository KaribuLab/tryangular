angular.module("MainModule").controller("StyleController",
["$scope", 
function($scope){
	$scope.varColor = "red";
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
