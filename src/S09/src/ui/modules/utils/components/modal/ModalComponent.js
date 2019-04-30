angular.module('UtilsModule').component('modalView', {
	templateUrl: "../utils/components/modal/ModalView.html",
	transclude: true,
	controller: ['$scope', '$state',
	function($scope, $state) {
		$scope.title = $state.current.title;
	}]
});
