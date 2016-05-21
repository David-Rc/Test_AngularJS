/* global angular */

var app = angular.module('myApp', []);

app.controller('appCtrl', function($scope, httpRequest) {
   httpRequest.success(function(data){
       
       $scope.tree = data;
       
   });
    
});

app.factory('httpRequest', function($http) {
    
 return $http.get('tree.json');   
    
});






                   
                   