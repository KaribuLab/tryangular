angular.module("ServiceModule").component("containerB", {
	templateUrl: "../../modules/service/components/containerB/ContainerBView.html",
	controller: ["$scope", "ListaService",
	function($scope, ListaService){
	
		$scope.obtenerListaInasistentes = function(){
			$scope.cargando = true;
			$scope.mensajeError = false;
			$scope.listaB = [];
			ListaService.getLista(true)
			.then(function(data) {
				$scope.cargando = false;
				$scope.listaB = data.lista;
			})
			.catch(function(err) {
				$scope.cargando = false;
				$scope.mensajeError = true;
			});
		};
	
	}]
});
