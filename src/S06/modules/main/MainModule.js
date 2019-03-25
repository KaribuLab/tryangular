angular.module("MainModule", ["UtilsModule", "EjemploModule"]);






































angular.module('MainModule').run(
['$rootScope', '$log',
function ($rootScope, $log) {

	if($rootScope.modulo == undefined){
		$rootScope.modulo = "MAIN";
	} else {
		$rootScope.modulo = $rootScope.modulo + " - MAIN";
	}

	$log.log("EJECUTANDO MAIN");
	$log.log($rootScope.modulo);

	$rootScope.frutas = ["Kiwi", "Manzana", "Platano", "Cereza", "Uva"];

	$rootScope.mostrarEjemplo = false;

}]);