myAngular.controller('update',['$scope','$state','$stateParams',function($scope,$state,$stateParams){
  if ($stateParams.girl) {
    $scope.girl = $stateParams.girl;
    $scope.index = $stateParams.index;
  }
  $scope.update = function(){
    $state.go('home',{girl:$scope.girl,index:$scope.index});
  };
  $scope.cancel = function(){
    $state.go('home');
  };
}]);
