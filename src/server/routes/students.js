var express = require('express');
var router = express.Router();
var Students = require('../models/students');

// Get all students
router.get('/', function(req, res, next) {

  Students.find({})

  .then( function (result) { res.status(200).json({ status : 'success',
                                                    data   : result }); })
  .catch( function (error) { return next(error); });

});

router.post('/', function(req, res, next){
  var student = Students(req.body);

  student.save()

  .then( function (result) { res.status(200).json({ status : 'success',
                                                    data   : result }); })

  .catch( function (error) { return next(error); });

});

router.put('/update/:id', function(req, res, next) {
  Students.findByIdAndUpdate( req.params.id, req.body, { new: true })

  .then( function (result) { res.status(200).json({ status : 'success',
                                                    data   : result }); })

  .catch( function (error) { return next(error); });

});

router.delete('/delete/:id', function(req, res, next) {
  Students.findByIdAndRemove(req.params.id)

  .then( function (result) { res.status(200).json({ status : 'success',
                                                    data   : result }); })

  .catch( function (error) { return next(error); });
});

module.exports = router;
