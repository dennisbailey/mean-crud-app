app.config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'myController',
        restricted: true,
        preventLoggedIn: false
      })
      
      .when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'registerController',
        restricted: false,
        preventLoggedIn: true
      })
      
      .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'loginController',
        restricted: false,
        preventLoggedIn: false
      })
      
      .when('/logout', { restricted: false,
                         preventLoggedIn: false,
                         resolve: { logThemOut: function(authService, $location) {
                                                  authService.logout();
                                                  $location.path('/login') }
                                  } 
                       })
      
      .otherwise({redirectTo: '/login'});
      
      $httpProvider.interceptors.push('authInterceptor');
});

app.run(function($rootScope, $location, $window, authService){
  // check if the token is there
  $rootScope.$on('$routeChangeStart', function(event, next, current){
    // If restricted and no token
    if (next.restricted && !$window.localStorage.getItem('token')) {
      $location.path('/login');
    } 
    
    // If token and prevent logging in redirect to the main page
    if (next.preventLoggedIn && $window.localStorage.getItem('token')) {
      $location.path('/');
    }
    
  });
});