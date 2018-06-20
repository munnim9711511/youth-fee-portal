var express = require('express');
var router = express.Router();
var client = require('../config/client');


router.get('/panel',(req,res,next)=>{
  res.render('client', { title: 'client' });
});


router.get('/client-data', function (req, res, next) {

  client.find({}).exec((err, data) => {
    if (err) {
      return err;
    } else {
      res.send(data);
    }
  })

});

router.post('/upload-client', (req, res, next) => {

  var client = new client({
    first_name: req.body.fname,
    last_name: req.body.lname,
    id_card_number: req.body.idcrad,
    address: req.body.address,
    contact_number: req.body.contactNumber,
    emergency_contact_number: req.body.emnumber,
    job_status: req.body.jobStatus,
    date_of_birth: req.body.DOB,
    health_issue: req.body.healthBody,
    blood_group: req.body.bloodGroup,
    class_attend: req.body.classAttend,
    photo_location: ""
  });
  classIn.save((err) => {
    if (err) {
      res.send("data saving erro")
    }
    res.send('class uploaded');
  });

});


router.post('/update-client', (req, res, next) => {
  client.update({
    "_id": req.body.id
  }, {
    $set: {
      "first_name": req.body.fname,
      "last_name": req.body.lname,
      "id_card_number": req.body.idcrad,
      "address": req.body.address,
      "contact_number": req.body.contactNumber,
      "emergency_contact_number": req.body.emnumber,
      "job_status": req.body.jobStatus,
      "date_of_birth": req.body.DOB,
      "health_issue": req.body.healthBody,
      "blood_group": req.body.bloodGroup,
      "class_attend": req.body.classAttend,
    }
  }).exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send("data updated");
  });

});


router.post('/del-client', (req, res, next) => {
  client.remove({
      "_id": req.body.id
    })
    .exec((err, data) => {
      if (err) {
        res.send("erro in removing");
      }
      res.send("class removed");
    })
});
module.exports = router;
