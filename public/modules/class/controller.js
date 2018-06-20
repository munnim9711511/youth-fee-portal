var classModule = angular.module("classModule",[]);
classModule.controller("classCTL",["$scope","$http",function($scope,$http){
$scope.submitClass = function(data){
console.log(data);
}
}]);