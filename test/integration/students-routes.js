process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var should = chai.should();
var utilities = require('../utilities');
var seed = require('../../src/server/models/seeds/test-seed');
var Students = require('../../src/server/models/students');

chai.use(chaiHttp);


describe('student routes', function() {


   beforeEach(function(done) {
     // drop db
     utilities.dropDatabase();
     seed.runSeed(done);
   });
  
   afterEach(function(done) {
     // drop db
     utilities.dropDatabase(done);
   });

  describe('Insert', function() {
  
    it('should return all students', function(done) {
      chai.request(server)
      .get('/students')
      .end(function(err, res){
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        
        res.body.should.be.a('object');
        
        res.body.should.have.property('status');
        res.body.status.should.equal('success');
        
        res.body.should.have.property('data');
        
        res.body.data.should.be.a('array');
        res.body.data.length.should.equal(1);

        res.body.data[0].firstName.should.equal('Kevin');
        res.body.data[0].lastName.should.equal('Schwartz');
        res.body.data[0].year.should.equal(2001);
        
        done();
      })
    });
  });
  
  describe('Put', function() {
  
    it('should update a SINGLE student', function(done) {
    chai.request(server)
    .get('/students')
    .end(function(err, response){
      chai.request(server)
        .put('/students/update/' + response.body.data[0]._id)
        .send({ lastName: 'Njeru' })
        .end(function(error, res){
          res.body.data.lastName.should.equal('Njeru');
          done();
        });
      });
    });        
  });
  
  
  describe('DELETE from students', function() {
      it('should delete a student', function(done) {
          Students.findOne(function(err, student) {
              var studentID = student._id;
              chai.request(server)
              .delete('/students/delete/'+studentID)
              .end(function(err, res) {
                  res.should.have.status(200);
                  res.type.should.equal('application/json');
                  res.body.should.be.a('object');
                  res.body.should.have.property('status');
                  res.body.status.should.equal('success');
                  done();
              })
          })
      });
  });
});