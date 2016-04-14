var express = require('express');
var router = express.Router();
var moment = require('moment');
var jwt = require('jwt-simple');
var Users = require('../models/users');


// Get all students
router.get('/', function(req, res, next) {
  
  Students.find(function(err, students){
    if (err) { return next(err) };
    
    res.status(200).json({ status : 'success',
                           data   : students }); 
  });    

});

router.post('/', function(req, res, next){
 var student = Students(req.body);
 student.save(function(error, student){
   res.status(200).json({
     status: 'success',
     data: student
   });
 });
});

router.put('/update/:id', function(req, res, next) {
  Students.findByIdAndUpdate( req.params.id, req.body, { new: true }, function(err, update) { 
    if (err) { return next(err) };
    res.status(200).json({ status : 'success',
                           data : update }); 
  });    

});

router.delete('/delete/:id', function(req, res, next) {
  Students.findByIdAndRemove(req.params.id, function(err, student) {
    if (err) { return next(err) };
    res.status(200).json({ status : 'goodbye, sucker!',
                           data : student });
  });

});  

module.exports = router;
