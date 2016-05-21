var app = angular.module('myApp', []);

app.controller('appCtrl', function($scope, request) {
  request.success(function(data){
       
       $scope.tree = data;
       
   });
    
});


app.factory('request', function($http){
    
 return $http.get('tree.json');
    
});






                   
                   