angular.module("ServiceModule").service("ListaService",
["$log",
function($log){
	
	let service = this;

	service.lista = ["Uno" , "Dos", "Tres", "12334", "PPPPP"];
	
	service.addTexto = function(texto){
		service.lista.push(texto);
	};

	service.getLista = function(){
		return service.lista;
	};
	
}]);
