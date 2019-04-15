angular.module("ServiceModule").service("ListaService",
["$log", "$http","PROPERTIES", "$q",
function($log, $http, PROPERTIES, $q){
	
	let service = this;

	service.getLista = function(inasistentes){
		var defered = $q.defer();  
		var promise = defered.promise;

		$http({
			method: "GET",
			dataType: 'json',
			headers: {
				"Content-Type": "application/json"
			},
			url: PROPERTIES.urls.base + PROPERTIES.urls.obtenerUsuarios,
			params: {
				inasistentes: inasistentes
			  }
		  }).then(
			function successCallback(response) {
				defered.resolve(response.data);
			},
			function errorCallback(error) {
				defered.reject(error);
			}
		  );
		  return promise;
	};
	
}]);
