app.config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/templates/main.html',
        controller: 'myController'
      })
      
//       .when('/register', {
//         templateUrl: '../partials/register.html',
//         controller: 'myController'
//       })
//       
//       .when('/login', {
//         templateUrl: '../partials/login.html',
//         controller: 'myController'
//       })
//       
//       .when('/logout', {
//         templateUrl: '../partials/logout.html',
//         controller: 'myController'
//       })
      
      .otherwise('/');
});
