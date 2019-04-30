angular.module('CommonsModule').component('sidebar', {
	templateUrl: "../../modules/commons/components/sidebar/SidebarView.html",
	controller: ['$scope', '$log',
    function($scope, $log){
			
			$scope.goMain = function() {
				window.location.href="/modules/main";
			} 	

    }]
});