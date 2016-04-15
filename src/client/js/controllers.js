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


app.controller('registerController', ['$scope', function($scope){
  $scope.user = {};
  
  $scope.register = function() {
    console.log($scope.user);
    
    $scope.user = {};
  }
  
  
}]);


app.controller('loginController', ['$scope', function($scope){
  $scope.user = {};
  
  $scope.login = function() {
    console.log($scope.user);
    
    $scope.user = {};
  }
  
  
}]);