var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $scope.myFun = function(){

    var urlf="https://api.github.com/users/" + $scope.uname;
    var urlfo=urlf+ "/followers";
    var urlfol=urlf + "/following"
    $http.get(urlf)
        .then(function(response) {
          $scope.myWelcome = response.data;
          $scope.dataU= new Array();
          for(var key in $scope.myWelcome) {
              var obj = {}
              obj[key] = $scope.myWelcome[key];
              $scope.dataU.push(obj);
          }

  })

      $http.get(urlfo)
          .then(function(response) {
              $scope.myfo = response.data;

          })
      $http.get(urlfol)
          .then(function(response) {
              $scope.myfol = response.data;

          })
      $scope.isClicked=true;
  }
});