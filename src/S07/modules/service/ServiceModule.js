angular.module('ServiceModule', [
    'ngRoute'
]);

angular.module('ServiceModule').config(function ($routeProvider) {
    $routeProvider.when('/', {
        template: '<container-a></container-a>',
    });

    $routeProvider.when('/containerb', {
        template: '<container-b></container-b>',
    });
});