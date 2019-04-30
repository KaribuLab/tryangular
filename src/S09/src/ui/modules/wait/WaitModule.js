angular.module('WaitModule', ['CommonsModule', 'ngCookies','ServiceModule']);

angular.module('WaitModule').run(function($cookies) {

	//if ($cookies.get("access_token")==undefined)
	//	window.location.assign('../../login.html');
	//else
		window.location.assign('../../modules/main/');
});

