angular.module("FactoryModule").component("containerB", {
	templateUrl: "../../modules/factory/components/containerB/ContainerBView.html",
	controller: ["$scope", "ListaFactory",
	function($scope, ListaFactory){
	
		$scope.lista = ListaFactory.getLista();
		
		$scope.agregar = function(){
			ListaService.addTexto($scope.texto);
			$scope.lista = ListaService.getLista();	
		};
	
	}]
});
