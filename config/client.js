var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var client = new Schema({
    first_name: String,
    last_name: String,
    id_card_number:String,
    address: String,
    contact_number: String,
    emergency_contact_number: String,
    job_status: String,
    date_of_birth: String,
    health_issue: String,
    blood_group: String,
    class_attend: [String],
    photo_location:String
});

var clientInfo = mongoose.model('client',client);
module.exports = clientInfo;