angular.module("MainModule").controller("FormAController",
["$scope", "$log",
function($scope, $log){

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

}]);
