angular.module("MainModule").constant("EJEMPLO",
{
	colores: ["white", "gray", "cyan"],

	personas: [{
		nombre: "Jorge",
		apellido: "Parra",
		edad: 30
	},{
		nombre: "Harold",
		apellido: "Montenegro",
		edad: 15
	},{
		nombre: "Mariangel",
		apellido: "Hernandez",
		edad: 40
	}],

	esMayor: function(xw){
		return xw.edad > 18;
	}
});
