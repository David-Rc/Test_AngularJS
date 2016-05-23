/* global angular */


var app = angular.module('myApp', []);

app.factory('appFactory', ['$http', function($http){
    
    return {
        
        recupData: function(url){
        
        return $http.get(url);
        
    },
        
    }
    
}]);

app.controller("appCtrl", ['$scope', 'appFactory', function($scope, appFactory){
    
    appFactory.recupData('tree.json').success(function(data){
        
        $scope.tree = data;
        
    });
    
}]);

app.filter('point', function(){
    return function(input) {
        var point = ".";
        var output;
        console.log('input : '+input);
        if(input === undefined){
            return '';
        }
        if(input.length > 1){
            output = input.split('');
            output = output.join(point);
            console.log("1 : ",output);
        }else{
            output = input;
        }
        return output + point;
    
    };
});






                   
                   