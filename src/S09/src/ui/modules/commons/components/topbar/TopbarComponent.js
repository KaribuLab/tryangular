angular.module('CommonsModule').component('topbar', {
    templateUrl: "../../modules/commons/components/topbar/TopbarView.html",
    controller: ['$scope', '$state','$transitions','$timeout','SessionService','ModalService',
    function($scope, $state, $transitions,$timeout,SessionService,ModalService){
		
		$scope.title = $state.current.title;
        $transitions.onSuccess({ }, function($transition$) {
	        $scope.title = $transition$.$to().self.title;
		});

        $scope.consultUser = function(){
            var user = SessionService.getUser();
            if(user != undefined){
                $scope.nameUser = user.name;    
            } else {
                $timeout(function(){
                    $scope.consultUser();
                }, 500);    
            }
        };

        $scope.consultUser();

        $scope.desloguear = function() {
            $scope.openModalConfirm();
        }

        $scope.openModalConfirm = function(){
            ModalService.showDialog("¿Deseas cerrar la sesión?", ModalService.TYPE.confirm, ModalService.SIZE.md, {
                actionAccept : function(){
                    console.log('Adios')
                    SessionService.logout();
                }
            });
        };        
    }]
});