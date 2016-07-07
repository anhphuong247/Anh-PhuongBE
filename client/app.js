var myAngular = angular.module("myAngular", ["ui.router"]);

myAngular.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");

  $stateProvider.state('home', {
    url: "/home",
    templateUrl: "templates/home.html",
    controller: "HomeController",
    params: {girl: null}
  });

  $stateProvider.state('add-girl', {
    url: "/add-girl",
    templateUrl: "templates/add-girl.html",
    controller: "LXController"
  });

  $stateProvider.state('about-us', {
    url: "/about-us",
    templateUrl: "templates/about-us.html"
  });
  $stateProvider.state('update', {
  url: "/update",
  templateUrl: "templates/update.html",
  controller: "update",
  params : {girl: null,index: null}
});

});


myAngular.directive("techkids", [function(){
  return {
    restrict: "A",
    templateUrl: "templates/techkids.html",
    link : function(scope, element, attrs) {
      // console.log(element.getElementsByTagName('H1'));
    }
  }
}])

myAngular.directive("lx",[function(){
  return {
    restrict: "A",
    templateUrl: "templates/home.html",
    scope:{
      page: "=",
      size: "="
    },
  }
}])
