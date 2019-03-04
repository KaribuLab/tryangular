angular.module("MainModule").controller("FormABController",
["$scope", "$rootScope",
function($scope, $rootScope){

    $scope.activarFormC = function(){
        $rootScope.formC = true; 
    }

}]);
