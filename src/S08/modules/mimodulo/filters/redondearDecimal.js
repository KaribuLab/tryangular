angular.module('MiModulo').filter('redondearDecimal', function () {
	return function (decimal, offset) {
		if (!offset) {
			var entero = Math.round(decimal);
		} else {
			var entero = Math.round(decimal) / offset;
		}
		return entero;
	};
});