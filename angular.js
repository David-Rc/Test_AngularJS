/* global angular */

var app = angular.module('myApp', []);

app.factory('appFactory', ['$http', function($http){
    
    return {
        
        recupData: function(url){
        
        return $http.get(url);
        
    },
    
    renommeName: function(data){
        
        
        
    },
    
        
    }
    
}]);

app.controller("appCtrl", ['$scope', 'appFactory', function($scope, appFactory){
    
    appFactory.recupData('tree.json').success(function(data){
        
        $scope.tree = data;
        
    })
    
}]);






                   
                   