var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classInfo = new Schema({
    class_type: String,
    class_capacity: Number,
    days_of_the_week_: [String],
    class_time: String,
    class_instructer: String
});

var classInfoData = classInfo;
module.exports = classInfoData;