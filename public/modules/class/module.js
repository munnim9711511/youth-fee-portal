var classApp = angular.module("classApp", ["ngRoute","classModule"]);
classApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/modules/class/main.html",
            controller :"classCTL"
        })
        .when("/update-class", {
            templateUrl: "/modules/class/update.html"
        })
        .when("/delet-class", {
            templateUrl: "/modules/class/delet.html"
        })
        .when("/class", {
            templateUrl: "/modules/class/class.html"
        })
});
