var AngularMVCApp = angular.module('AngularMVCApp', ['ngRoute']);
AngularMVCApp.controller('LandingPageController', LandingPageController);

var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'RoutesDemo/One'
        })
        .when('/routeTwo', {
            templateUrl: 'RoutesDemo/Two'
        })
        .when('/routeThree', {
            templateUrl: 'RoutesDemo/Three'
        });
}

AngularMVCApp.config(configFunction);
