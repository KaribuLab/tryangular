angular.module("FactoryModule").factory("ListaFactory",
["$log",
function($log){
	
	let lista = ["Uno" , "Dos", "Tres", "12334", "PPPPP"];
	return {
		addTexto : function(texto){
			lista.push(texto);
		},
		getLista : function(){
			return lista;
		}
	};

}]);
