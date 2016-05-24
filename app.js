/* global angular */


var app = angular.module('myApp', []);

app.factory('appFactory', ['$http', function($http){

  return {

    recupData: function(url){

      return $http.get(url);

    },

    renameData: function(el){
      var i = 0;
      for (var item in el){
        var cat = el[item].name.split(' ');
        cat[0] = "Dossier"
        el[item].name = cat.join(' ');
        for (var item1 in el[item].child){
          if(el[item].child[item1].name !== undefined){
            var cat1 = el[item].child[item1].name.split(' ');
            cat1[0] = "Dossier";
            el[item].child[item1].name = cat1.join(' ')
            if(el[item].child[item1].child){
              var cat2 = el[item].child[item1].child.name.split(' ');
              cat2[0] = "Fichier";
              el[item].child[item1].child.name = cat2.join(' ');
            }

          }else if(el[item].child[item1][i].name !== undefined){
            console.log('length', el[item].child[item1].length)
            for(var j = 0; j<= el[item].child[item1].length - 1; j++){
              var cat3 = el[item].child[item1][j].name.split(' ')
              cat3[0] = 'Fichier';
              el[item].child[item1][j].name = cat3.join(' ');
            }
          }else if(el[item].child.name !== undefined){
            var cat4 = el[item].child.name.split(' ');
            cat4[0] = "Dossier";
            el[item].child.name = cat4.join(' ');
          }
        }
      }

    }

  }



}]);

app.controller("appCtrl", ['$scope', 'appFactory', function($scope, appFactory){

  appFactory.recupData('tree.json').success(function(data){

    $scope.tree = data;

    appFactory.renameData(data);

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

app.directive('myCustomer', function(){
    return{
        templateUrl: "template.html"   
};
});
