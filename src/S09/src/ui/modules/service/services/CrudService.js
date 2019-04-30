angular.module('ServiceModule').service('CrudService',
['RestService', 'SessionService', 'SERVICE_URL', '$rootScope',
function(RestService, SessionService, SERVICE_URL, $rootScope) {
    
    this.get = function(endpoint, id, projection) {
        var complement = '';
        if(projection != undefined){
            complement += "?projection=" + projection;
        }
        var url = endpoint + "/" + id + complement;
        return RestService.http(RestService.TYPE.get, url);
    };

    this.list = function(endpoint, size, page, projection) {
        var complement = '';
        if(size != undefined){
            complement += '?size=' + size;
        }
        if(page != undefined){
            if(complement.length == 0){
                complement += '?page=' + page;
            } else {
                complement += '&page=' + page;
            }
        }
        if(projection != undefined){
            if(complement.length == 0){
                complement += '?projection=' + projection;
            } else {
                complement += '&projection=' + projection;
            }
        }
        if(complement.length == 0){
            complement += '?size=1000';
        }
        var url = endpoint + complement;
        var defered = RestService.httpDefered(RestService.TYPE.get, url, undefined,
            function(response){
                defered.resolve(response.data);
            },
            function(response){
                defered.reject(response.data);
            } 
        );
        return defered.promise;
    };

    this.create = function(endpoint, input) {
        delete input.id;
        this.cleanObject(input);
        var url = endpoint;
        return RestService.http(RestService.TYPE.post, url, input);
    };

    this.createCascade = function(endpoint, input) {
        delete input.id;
        this.cleanObjectCascade(input);
        var url = endpoint;
        return RestService.http(RestService.TYPE.post, url, input);
    };

    this.cleanObject = function(input, cascade){
        delete input["_links"];
        delete input["_embedded"];
        delete input["$$hashKey"];
        var keysList = Object.keys(input);
        for(var i = 0; i < keysList.length; i++){
            if(input[keysList[i]] == undefined || input[keysList[i]] == null){
                delete input[keysList[i]];
            } else if(typeof input[keysList[i]] == "object"){
                if (Array.isArray(input[keysList[i]])){
                    for(var k = 0; k < input[keysList[i]].length; k++){
                        console.log(typeof keysList[i]);
                        console.log(input[keysList[i]][k]);
                        input[keysList[i]][k] = input[keysList[i]][k]._links.self.href;
                        if(cascade != undefined && cascade){
                            input[keysList[i]][k] = input[keysList[i]][k].replace("admin-apache", "localhost:8080");
                        }
                    }
                } else {
                    console.log(typeof input[keysList[i]]);
                    console.log(keysList[i]);
                    if(input[keysList[i]] != undefined && input[keysList[i]]._links != undefined && input[keysList[i]]._links.self != undefined){
                        input[keysList[i]] = input[keysList[i]]._links.self.href;
                        if(cascade != undefined && cascade){
                            input[keysList[i]] = input[keysList[i]].replace("admin-apache", "localhost:8080");
                        }    
                    }
                }
            }
        }
    };

    this.cleanObjectCascade = function(input){
        delete input["_links"];
        delete input["_embedded"];
        delete input["$$hashKey"];
        var keysList = Object.keys(input);
        for(var i = 0; i < keysList.length; i++){
            if(input[keysList[i]] == undefined || input[keysList[i]] == null){
                delete input[keysList[i]];
            } else if(typeof input[keysList[i]] == "object"){
                if (Array.isArray(input[keysList[i]])){
                    for(var k = 0; k < input[keysList[i]].length; k++){
                        this.cleanObject(input[keysList[i]][k], true);
                    }
                } else {
                    input[keysList[i]] = input[keysList[i]]._links.self.href;
                }
            }
        }
    };

    this.update = function(endpoint, id, input, association) {
        var url = endpoint + "/" + id;
        //if(association == undefined){
        this.cleanObject(input);
        return RestService.http(RestService.TYPE.patch, url, input);
        //}
        //url = endpoint + "/" + id + "/" + association;
        //return RestService.httpAssociations(RestService.TYPE.put, url, input);
    };
    var crudServiceUpdate = this.update;

    this.delete = function(endpoint, id) {
        var url = endpoint + "/" + id;
        return RestService.http(RestService.TYPE.delete, url);
    };
    var crudServiceDelete = this.delete;
    


}]);
