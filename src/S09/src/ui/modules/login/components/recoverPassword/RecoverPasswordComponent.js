angular.module('LoginModule').component('recoverPassword', {
	templateUrl: "../../components/recoverPassword/RecoverPasswordView.html",
	controller:['$log','$scope', 'RestService','SERVICE_URL',
	function($log,$scope,RestService,SERVICE_URL) {

		$scope.init = function() {
			$scope.errorValidate = false;	   	
			$scope.errorFound = false;
			$scope.showProgress = false;
			$scope.email = "";
			$scope.remail = "";
		};

		$scope.cancel = function() {
			window.location.href = "/modules/login/";
		}

		$scope.sendData = function() {

			if ($scope.email!=$scope.remail) {
				$scope.errorValidate = true;
			} else {
				$scope.showProgress = true;
				$scope.errorFound = false;	
				$scope.errorValidate = false;

				$scope.data = {
					email:$scope.email
				}

				RestService.http(RestService.TYPE.post, SERVICE_URL.recoverPass,$scope.data)
				.then(function(response) {
					if (response) {					
						window.location.href = "/modules/login/";
					}


				}, function(response) {
					if (!response.data) {
						$scope.errorFound = true;	
						$scope.showProgress = false;
					}
				});
			}
		};

		$scope.init();
	}]
});
