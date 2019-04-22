angular.module('MiModulo', [
    'ngRoute', 'ngSanitize'
]);

angular.module('MiModulo').config(function ($routeProvider) {
    $routeProvider.when('/', {
        template: '<container-a></container-a>',
    });
});