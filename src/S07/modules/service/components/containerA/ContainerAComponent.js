angular.module("ServiceModule").component("containerA", {
	templateUrl: "../../modules/service/components/containerA/ContainerAView.html",
	controller: ["$scope", "ListaService", "$window",
	function($scope, ListaService, $window){
	
		$scope.obtenerLista = function(){
			$scope.cargando = true;
			$scope.mensajeError = false;
			$scope.lista = [];
			ListaService.getLista()
			.then(function(data) {
				$scope.cargando = false;
				$scope.lista = data.lista;
			})
			.catch(function(err) {
				$scope.cargando = false;
				$scope.mensajeError = true;
			});
		};

		$scope.irListadoB = function() {
			$window.location.href = '#!/containerb';
		}
	
	}]
});
