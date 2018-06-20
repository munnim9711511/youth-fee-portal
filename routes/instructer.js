var express = require('express');
var router = express.Router();
var instructer = require('../config/instructer');


router.get('/instructer-data', function (req, res, next) {
  instructer.find({}).exec((err, data) => {
    if (err) {
      return err;
    } else {
      res.send(data);
    }
  });
});
router.post('/upload-instructer', (req, res, next) => {

  var instructerDB = new instructer({

    firstname: req.body.fname,
    last_name: req.body.lname,
    date_birth: req.body.DOB,
    id_card_number: req.body.idCard,
    blood_group: req.body.bloodG,
    contact_number: req.body.cNumber,
    emergency_contact_number: eNumber,
    address: req.body.address,
    instructer_filed: req.body.instruxterQ,
    photo_location: ""
  });
});

router.get('/panel',(req,res,next)=>{
  res.render('instructer', { title: 'Express' });
});


router.get('/instructer-data', function (req, res, next) {
  instructer.find({}).exec((err, data) => {
    if (err) {
      return err;
    } else {
      res.send(data);
    }
  });
});
router.post('/upload-instructer', (req, res, next) => {

  var instructerDB = new instructer({

    firstname: req.body.fname,
    last_name: req.body.lname,
    date_birth: req.body.DOB,
    id_card_number: req.body.idCard,
    blood_group: req.body.bloodG,
    contact_number: req.body.cNumber,
    emergency_contact_number: eNumber,
    address: req.body.address,
    instructer_filed: req.body.instruxterQ,
    photo_location: ""


  });
  instructerDB.save((err) => {
    if (err) {
      res.send("data saving erro")
    }
    res.send('class uploaded');
  });

});

router.post('/update-instructer', (req, res, next) => {

  instructer.update({
    "_id": req.body.id
  }, {
    $set: {
      "firstname": req.body.fname,
      "last_name": req.body.lname,
      "date_birth": req.body.DOB,
      "id_card_number": req.body.idCard,
      "blood_group": req.body.bloodG,
      "contact_number": req.body.cNumber,
      "emergency_contact_number": eNumber,
      "address": req.body.address,
      "instructer_filed": req.body.instruxterQ,
    }
  }).exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send("data updated");
  });

});
router.post('/del-instructer', (req, res, next) => {
  instructer.remove({
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
