angular.module('ServiceModule').service('RestService',
[ '$http', '$q', '$log',
function($http, $q, $log) {

    this.TYPE = {
        get     :   "GET",
        post    :   "POST",
        put     :   "PUT",
        delete  :   "DELETE",
        patch   :   "PATCH"
    };

	var getConfig = function(type, url, input, headers){
		$log.info("RestService Input -> ", input);
        return {
            method: type,
            url: url,
            data: input,
            headers:headers
        }
	};
	
	this.http = function(type, url, input){
		var defered = $q.defer();
		$http(getConfig(type, url, input))
		.then(function(response) {
    		$log.info("RESPONSE - HTTP " + type + " - " + url)
    		$log.info(response)
    		$log.info("-------")
		    defered.resolve(response.data);
		}).catch(function(response) {
		    $log.error("RESPONSE - HTTP " + type + " - " + url)
		    $log.error("ERROR")
    		$log.error(response)
    		$log.error("-------")
		    defered.reject(response);
		});
		return defered.promise;
	};

    this.httpHeaders = function(type, url, input,headers){
        var defered = $q.defer();
        $http(getConfig(type, url, input,headers))
        .then(function(response) {
            $log.info("RESPONSE - HTTP " + type + " - " + url)
            $log.info(response)
            $log.info("-------")
            defered.resolve(response.data);
        }).catch(function(response) {
            $log.error("RESPONSE - HTTP " + type + " - " + url)
            $log.error("ERROR")
            $log.error(response)
            $log.error("-------")
            defered.reject(response);
        });
        return defered.promise;
    };

	this.httpDefered = function(type, url, input, successFunction, errorFunction){
		var defered = $q.defer();
		$http(getConfig(type, url, input))
		.then(function(response) {
    		$log.info("RESPONSE - HTTP " + type + " - " + url)
    		$log.info(response)
    		$log.info("-------")
		    successFunction(response);
		}).catch(function(response) {
		    $log.error("RESPONSE - HTTP " + type + " - " + url)
		    $log.error("ERROR")
    		$log.error(response)
    		$log.error("-------")
		    errorFunction(response);
		});
		return defered;
	};

    this.httpAssociations = function(type, url, input){
        var defered = $q.defer();
        var config = getConfig(type, url, input);
        config.headers = {
            "Content-Type": "text/uri-list"
        };
        $http(config)
        .then(function(response) {
            $log.info("RESPONSE - HTTP " + type + " - " + url)
            $log.info(response)
            $log.info("-------")
            defered.resolve(response.data);
        }).catch(function(response) {
            $log.error("RESPONSE - HTTP " + type + " - " + url)
            $log.error("ERROR")
            $log.error(response)
            $log.error("-------")
            defered.reject(response);
        });
        return defered.promise;
    };

} ]);
