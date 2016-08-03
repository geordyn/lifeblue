angular.module('lifeblue', ['ui.router', 'ngAnimate'])

/// VIEWS
.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './views/home.html',
      controller: 'homeCtrl'
    })
    .state('archive', {
      url: '/archive',
      templateUrl: './views/archive.html',
      controller: 'homeCtrl'
    })

  $urlRouterProvider.otherwise('/home');


  // END VIEWS CONFIG
})

.directive('globalHeader', function() {
    return {
      templateUrl: './dirs/globalheader.html',
      restrict: 'E'
    };
  })
  .directive('signUp', function() {
    return {
      templateUrl: './dirs/signup.html',
      restrict: 'E'
    };
  })
  .directive('archives', function() {
    return {
      templateUrl: './dirs/archive.html',
      restrict: 'E',
      controller: "homeCtrl"
    };
  })
  .directive('footsie', function() {
    return {
      templateUrl: './dirs/footer.html',
      restrict: 'E'
    };
  })
  .directive('articles', function() {
    return {
      templateUrl: './dirs/articles.html',
      restrict: 'E'
    };
});
