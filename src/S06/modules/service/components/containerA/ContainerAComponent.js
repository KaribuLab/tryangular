angular.module("ServiceModule").component("containerA", {
	templateUrl: "../../modules/service/components/containerA/ContainerAView.html",
	controller: ["$scope", "ListaService",
	function($scope, ListaService){
	
		$scope.lista = ListaService.getLista();
		
		$scope.agregar = function(){
			ListaService.addTexto($scope.texto);
			$scope.lista = ListaService.getLista();	
		};
	
	}]
});
