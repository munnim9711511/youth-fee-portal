var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fee = new Schema({
    date:String,
    time:String,
    client_name:String,
    class_payment_method:String,
    amount_payied:Number,
    balance:Number,
    payment_recived_by:String,
    fine_payment:Number,

});
var feeData = mongoose.model('fee',fee);
module.exports =feeData;