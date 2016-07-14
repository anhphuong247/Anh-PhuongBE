myAngular.controller("GirlController", ["$scope", "$state", "$stateParams","$http",
function($scope, $state, $stateParams,$http){
  $scope.girl = {};
  $scope.index = -1;
  if ($stateParams.girl) {
    $scope.type = "Update";
    $scope.index = $stateParams.index;
    $scope.girl = $stateParams.girl;
  } else {
    $scope.type = "Add";
  }

  $scope.addOrUpdate = function() {
      $http.post('/api/hot-girl',{girl:$scope.girl,index:$scope.index}).then(function(res){
        console.log("add sucessfully!");
        $state.go("home");
      })
  }

  $scope.cancel = function() {
    $state.go("home");
  }
}]);
