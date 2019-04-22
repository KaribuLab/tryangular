angular.module("MiModulo").component("containerA", {
	templateUrl: "../../modules/mimodulo/components/containerA/ContainerAView.html",
	controller: ["$scope", "ListaService", "$window", "$filter", "$sce",
	function($scope, ListaService, $window, $filter, $sce){

		$scope.sce = $sce;
	
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

		$scope.fechaFormateada = $filter("date")("2019-04-22T19:00:00", "dd/MM/yyyy H:mma");	
	
	}]
});
