app.controller('myController', ['$scope', 'studentDataService', function($scope, studentDataService) {
  
  $scope.student = {};
  
  $scope.getAll = function () {
    studentDataService.getAllStudents()
    .then( function (result) { 
      $scope.students =  result;
    });
  };
  
  $scope.addStudent = function() {
    studentDataService.addStudent($scope.student);
    $scope.student = {};
    $scope.getAll();
  };
  
  $scope.delete = function(id) {
    studentDataService.deleteStudent(id);
    $scope.getAll();
  }
  
  $scope.getAll();
  
}]);


app.controller('registerController', ['$scope', '$location', 'authService' function($scope, $location, authService) {
  
  $scope.user = {};
  
  $scope.register = function() {
    
    authService.register($scope.user)
    
    .then( function (user) { authService.setUserInfo(user),
                             $location.path('/') })
    
    // TO DO check status code and send an appropriate message
    .catch( function (error) { console.log(error); return error; })
    
  }
  
  
}]);


app.controller('loginController', ['$scope', '$location', 'authService' function($scope, $location, authService) {
  $scope.user = {};
  
  $scope.login = function() {
    
    authService.login($scope.user)
    
    .then( function (user) { authService.setUserInfo(user),
                             $location.path('/') })
    
    // TO DO check status code and send an appropriate message
    .catch( function (error) { console.log(error); return error; })
    
  }
  
  
}]);