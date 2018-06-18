var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginfo = Schema({
    date:String,
    time:String,
    staff:String,
    opperation:String
});
var logData = mongoose.model('log',loginfo);
module.exports = logData;