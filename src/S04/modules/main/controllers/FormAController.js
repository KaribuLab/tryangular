angular.module("MainModule").controller("FormAController",
["$scope", "$log", "$timeout",
function($scope, $log, $timeout){

$scope.objeto = {};

$scope.funcionClick = function(saludo){
	$log.debug("EJEMPLO");
	if($scope.objeto.nombre == 'Jorge'){
		$log.warn("ES JORGE");
	} else {
		$log.error("NO ES JORGE");
	}
};

$scope.funcionBlur = function(){
	$log.log("Listo el nombre");
};

$scope.funcionPress = function(){
	$log.log($scope.objeto.apellido);
};

$scope.lista = [
{ id: "1", nombre: "red", activo: true},
{ id: "2", nombre: "green", activo: false},
{ id: "3", nombre: "blue", activo: true},
{ id: "4", nombre: "red", activo: true}
];

$scope.$watch(function(){
	return $scope.objeto.nombre + $scope.objeto.apellido;
}, function(){
	$log.log($scope.objeto.nombre + $scope.objeto.apellido);
});

$timeout(function(){
	$scope.objeto.apellido = $scope.objeto.apellido + "prueba";
}, 5000);

}]);
