app.service('studentDataService', ['crudService', function(crudService) {
  
  
  return {
    
    getAllStudents : function () {
      return crudService.getAll('students')
      .then( function (result) { 
                                 return result.data.data });
    },
    
    addStudent: function(payload) {
      crudService.addOne('students', payload)
      .then( function (result) {  
                                 return result })
      .catch( function (error) { return error; });
    },
    
    deleteStudent : function(id) {
      crudService.deleteOne('students', id)
      .then( function (result) { console.log(result); 
                                 return result })
      .catch( function (error) { return error; });
    }
  
  }
  
}]);

app.service('crudService', ['$http', function($http) {
  
  var data = [];
  
  return {
    
    getAll: function(resource) {
      return $http.get('/' + resource)
      .then( function (response) { return response })
      .catch( function (error) { return error; });    
    },
    
    addOne: function(resource, payload) {
      return $http.post('/' + resource, payload)
      .then( function (response) { return response })
      .catch( function (error) { return error; });
    },
    
    deleteOne: function(resource, id) {
      return $http.delete(resource + '/delete/' + id)
      .then( function (response) { return response })
      .catch( function (error) { return error; });
    },
    
  }
  
}])