angular.module("ServiceModule").component("containerB", {
	templateUrl: "../../modules/service/components/containerB/ContainerBView.html",
	controller: ["$scope", "ListaService",
	function($scope, ListaService){
	
		$scope.lista = ListaService.getLista();
		
		$scope.agregar = function(){
			ListaService.addTexto($scope.texto);
			$scope.lista = ListaService.getLista();	
		};
	
	}]
});
