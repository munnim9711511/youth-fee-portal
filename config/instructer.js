var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var instructer = new Schema({

    firstname: String,
    last_name: String,
    date_birth: String,
    id_cared_number: String,
    blood_group: String,
    contact_number: Strng,
    emergency_contact_number: String,
    address: String,
    instructer_filed: [String],
    photo_location: String

});
var instructerInfo = instructer;
module.exports = instructerInfo;