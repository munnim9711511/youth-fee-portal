var express = require('express');
var router = express.Router();
var fee = require('../config/free');

router.get('/fee-data', function (req, res, next) {
  fee.find({}).exec((err, data) => {
    if (err) {
      return err;
    } else {
      res.send(data);
    }
  });
});
router.post('/upload-fee', (req, res, next) => {

  var fee = new fee({
    date: req.body.fdate,
    time: req.body.timef,
    client_name: req.body.cname,
    class_payment_method: req.body.method,
    amount_payied: req.body.amountP,
    balance: req.body.balance,
    payment_recived_by: req.body.pRby,
    fine_payment: req.body.fine

  });
  fee.save((err) => {
    if (err) {
      res.send("data saving erro")
    }
    res.send('payment uploaded');
  });

});


module.exports = router;
