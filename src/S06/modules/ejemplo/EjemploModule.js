angular.module("EjemploModule", ["UtilsModule"]);

angular.module('EjemploModule').run(
['$rootScope', '$log',
function ($rootScope, $log) {

	if($rootScope.modulo == undefined){
		$rootScope.modulo = "EJEMPLO";
	} else {
		$rootScope.modulo = $rootScope.modulo + " + EJEMPLO";
	}

	$log.log("EJECUTANDO EJEMPLO");
	$log.log($rootScope.modulo);

}]);