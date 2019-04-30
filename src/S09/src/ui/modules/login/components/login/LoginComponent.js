angular.module('LoginModule').component('login', {
	templateUrl: "../../modules/login/components/login/LoginView.html",
	controller:['$log','$scope', 'RestService','$cookies',
	function($log,$scope,RestService,$cookies) {

		this.login = function(){
			window.location.href = "../../modules/main/";
		};

		$scope.recoverView = function() {
			window.location.href = "../../modules/login/components/recoverPassword/";
		}

		$scope.sendData = function() {
			RestService.http(RestService.TYPE.post, '/login/login-api/oauth/token?client_id=barClientIdPassword&client_secret=secret&grant_type=password&password='+$scope.password+'&username='+$scope.username).then(function(response) {
				$scope.token = response;
				$cookies.put("access_token",$scope.token.access_token);
				window.location.href = "../../modules/main/";
			}, function(response) {
				alert("Las credenciales son incorrectas");
			});
		};
	}]
});
