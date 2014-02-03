var myApp = angular.module('myApp', []);

myApp.factory('states', function(){
  var states = {};
  states = [
           { 
             name: 'Maryland',
             capital: 'Annapolis'
           },
           {
             name: 'New York',
             capital: 'Albany'
           },
           { 
             name: 'New Jersey',
             capital: 'Trenton'
           },
           {
             name: 'Masachussets',
             capital: 'Boston'
           },
           {
             name: 'Tennessee',
             capital: 'Nashville'
           },           
           {
             name: 'South Carolina',
             capital: 'Columbia'
           },
           {
             name: 'Colorado',
             capital: 'Denver'
           }           
  ]
  return states;
});

myApp.controller('statesCtrl', function($scope, states){
  $scope.states = states;
});
