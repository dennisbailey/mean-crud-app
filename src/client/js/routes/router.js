app.config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/templates/main.html',
        controller: 'myController'
      })
      
      .when('/register', {
        templateUrl: 'js/templates/register.html',
        controller: 'registerController'
      })
      
      .when('/login', {
        templateUrl: 'js/templates/login.html',
        controller: 'loginController'
      })
      
      .when('/logout', {})
      
      .otherwise({redirectTo: '/login'});
      
//       $httpProvider.interceptors.push('AuthInterceptor');
});
