var mongoose = require('mongoose');

utilities = {
  
  dropDatabase : function(done) {
    mongoose.connection.db.dropDatabase();
    
    if (done) { done();} 
     
  }
    
}

module.exports = utilities;