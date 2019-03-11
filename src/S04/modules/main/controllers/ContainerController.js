angular.module("MainModule").controller("ContainerController",
["$scope",
function($scope){

    $scope.texto = "Ejemplo";
    
    $scope.numero = 10;
    
    $scope.metodo = function(num){
    	return 10 * num;
    };

    $scope.bool = true;

    $scope.objeto = {
    	id: 1,
    	nombre: "Articulo X",
    	cantidad: 20,
    	precio: 100
    };

    $scope.arreglo = [1, 2, 3, 4, 5];

	$scope.arregloObjetos = [{
		id: 1,
		nombre: "Prueba A"
	}, {
		nombre: "Prueba B",
		campo: true,
		color: "red"
	}];

}]);
