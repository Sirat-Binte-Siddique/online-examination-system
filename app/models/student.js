var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var StudentSchema = new Schema({
    studentname: String,
    studentemail: String,
    studentphone: String,
    studentgender: String,
    studentage: String

});

mongoose.model('Student', StudentSchema);
