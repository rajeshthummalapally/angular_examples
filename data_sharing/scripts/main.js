var angularApp = angular.module('angularApp', []);

//create a service that will return data
angularApp.factory('Data', function(){
  return {message: 'I am passed around by service', label_color: '#555'}
});

//inject data from service
function firstCtrl($scope, Data){
  $scope.data = Data;
}

function secondCtrl($scope, Data){
  $scope.data = Data
}
