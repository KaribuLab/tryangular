angular.module('ServiceModule').service('SyncService',
[ '$http', '$log',
function($http, $log) {

    var executeFunctionAfter = function(data, functionAfter){
        data.countFunctions--;
        if(data.countFunctions <= 0){
            functionAfter();    
        }
    };

    this.executeFunction = function(data, functionAfter, functionToExecute){
        functionToExecute();
        executeFunctionAfter(data, functionAfter);
    };

    this.executePromise = function(data, functionAfter, promiseFunction, thenFunction, catchFunction){
        promiseFunction
        .then(function(response){
            thenFunction(response);
            executeFunctionAfter(data, functionAfter);
        }, function(response){
            catchFunction(response);
            executeFunctionAfter(data, functionAfter);
        });
    };

    this.waitFunctions = function(functionList, functionAfter){
        var data = {
            countFunctions : functionList.length
        };
        for(var i = 0; i < functionList.length; i++){
            if(Array.isArray(functionList[i])){
                this.executePromise(data, functionAfter, functionList[i][0], functionList[i][1], functionList[i][2]);
            } else {
                this.executeFunction(data, functionAfter, functionList[i]);
            }
        }

    };



}]);
