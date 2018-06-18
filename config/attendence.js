var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var attendence = new Schema({
    client_id: String,
    date: String,
    class: String,
    attendence: Boolean
});

var attenddencData = attendence;
module.exports = attenddencData;