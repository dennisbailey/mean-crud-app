app.service('studentDataService', ['crudService', function(crudService) {


  return {

    getAllStudents : function () {
      return crudService.getAll('students')
      .then( function (result) {
                                 return result.data.data; });
    },

    addStudent: function(payload) {
      crudService.addOne('students', payload)
      .then( function (result) { return result; })
      .catch( function (error) { return error; });
    },

    deleteStudent : function(id) {
      crudService.deleteOne('students', id)
      .then( function (result) { return result; })
      .catch( function (error) { return error; });
    }

  };

}]);

app.service('crudService', ['$http', function($http) {

  var data = [];

  return {

    getAll: function(resource) {
              return $http.get('/' + resource)
              .then( function (response) { return response; })
              .catch( function (error) { return error; });
            },

    addOne: function(resource, payload) {
              return $http.post('/' + resource, payload)
              .then( function (response) { return response; })
              .catch( function (error) { return error; });
            },

    deleteOne: function(resource, id) {
                 return $http.delete(resource + '/delete/' + id)
                 .then( function (response) { return response; })
                 .catch( function (error) { return error; });
               },

  };

}]);

// Login
// Register
// Local Storage : Set User Info
// Local Storage : Get User Info

app.service('authService', ['$http', '$window', function($http, $window) {
  
  var user = {};
  
  return {

    register: function(user) {
                return $http.post('/auth/register', user);
              },
           
    login: function(user) {
             return $http.post('/auth/login', user);
           },
           
    logout: function(user) {
              user = null;
              $window.localStorage.clear();
            },
    
    setUserInfo: function(userData) {
                   $window.localStorage.set('user', 'PLACEHOLDER');
                   $window.localStorage.set('token', 'PLACEHOLDER');
                 },
                 
   getUserInfo: function(userData) {
                   $window.localStorage.get('user', 'PLACEHOLDER');
                   $window.localStorage.get('token', 'PLACEHOLDER');
                 },              
  
  };

}]);
