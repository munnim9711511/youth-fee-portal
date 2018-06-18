var express = require('express');
var router = express.Router();

var classDB = require('../config/class');

router.get('/panel',(req,res,next)=>{
    res.render('class', { title: 'Express' });
});

router.get('/class-data', function (req, res, next) {

    classDB.find({}).exec((err, data) => {
        if (err) {
            return err;
        }
        else {
            res.send(data);
        }
    })

});
router.post('/upload-class', (req, res, next) => {
    // console.log(req.body);
    var classIn = new classDB({
        class_type: req.body.classType,
        class_capacity: req.body.classCapacity,
        days_of_the_week_: req.body.daysClass,
        class_time: req.body.time,
        class_instructer: req.body.instructer
    });
    classIn.save((err) => {
        if (err) {
            res.send("data saving erro")
        }
        res.send('class uploaded');
    });

});
router.post('/update-user', (req, res, next) => {

    classDB.update({ "_id": req.body.id }
        , {
            $set: {
                "class_type": req.body.classType,
                "class_capacity": req.body.classCapacity,
                "days_of_the_week": req.body.daysClass,
                "class_instructer": req.body.instructer
            }
        }).exec((err, data) => {
            if (err) {
                res.send(err);
            }
            res.send("data updated");
        });

});
router.post('/del-class', (req, res, next) => {
    classDB.remove({ "_id": req.body.id })
        .exec((err, data) => {
            if (err) {
                res.send("erro in removing");
            }
            res.send("class removed");
        })
});

module.exports = router;