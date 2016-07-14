myAngular.controller("LXController", ["$scope", "$state", "$stateParams","$http",
function($scope, $state, $stateParams,$http){
  $scope.data = [];

  $http.get("/api/hot-girl").then(function(response){
     $scope.data = response.data;
     $scope.goToPage($scope.page);
   });
  $scope.fetchData = function(){
      $scope.girls = $scope.data.slice(($scope.page - 1) * $scope.size, $scope.page * $scope.size);
  }

  $scope.goToPage = function(page){
    $scope.page = page;
    $scope.fetchData();
  }

  $scope.add = function() {
    $state.go("add-girl");
  }

  $scope.delete = function(index) {
    $http.post('/api/hot-girl',{id:$scope.data[index].id}).then(function(res){
      console.log("send request");
    })
    $scope.fetchData();
    $state.reload();
  }

  $scope.update = function(girl, index) {
    $state.go("update-girl", { girl:girl, index: ($scope.page - 1) * $scope.size + index });
  }

  $scope.pages = [];
  for (var n = 0; n < Math.ceil($scope.data.length/$scope.size); n++) {
    $scope.pages[n] = n + 1;
  };

  $scope.goToPage($scope.page);
}]);
