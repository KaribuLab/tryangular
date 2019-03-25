angular.module("FactoryModule").component("containerA", {
	templateUrl: "../../modules/factory/components/containerA/ContainerAView.html",
	controller: ["$scope", "ListaFactory",
	function($scope, ListaFactory){
	
		$scope.lista = ListaFactory.getLista();
		
		$scope.agregar = function(){
			ListaFactory.addTexto($scope.texto);
			$scope.lista = ListaFactory.getLista();	
		};
	
	}]
});
