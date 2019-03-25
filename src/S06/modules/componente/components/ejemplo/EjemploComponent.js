angular.module("ComponenteModule").component("ejemplo", {
	templateUrl: "../../modules/componente/components/ejemplo/EjemploView.html",
	controller: ["$scope", "EJEMPLO", "LISTA",
	function($scope, EJEMPLO, LISTA){
	
		$scope.listaNumeros = EJEMPLO.numeros;
		$scope.listaColores = LISTA.colores;
	
	}]
});
