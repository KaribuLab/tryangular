angular.module('ServiceModule').directive('authenticationProfile',
['$rootScope', '$timeout', 'SessionService',
function($rootScope, $timeout, SessionService) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var findProfiles = function(){
                $timeout(function(){
                    if(SessionService.getUser() == undefined){
                        findProfiles();
                    } else {
                        var profiles = attrs.authenticationProfile;
                        var profileList = profiles.split(',');
                        var found = false;
                        for (index in profileList) {
                            for(i in SessionService.getUser().profiles){
                                if(SessionService.getUser().profiles[i].trim() == profileList[index].trim()){
                                    found = true;
                                    break;
                                }
                            }
                            if(found){
                                break;
                            }
                        }
                        if(!found){
                            $timeout(function(){
                                element.remove();
                            }, 100);    
                        }                    
                    }
                }, 100);    
            };

            findProfiles();
        }
    };
}]);
