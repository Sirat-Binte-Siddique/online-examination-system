var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var DriverSchema = new Schema({
    drivername: String,
    driveremail: String,
    driverphone: String,
    //    boss: String,
    drivergender: String,
    driverage: String

});

mongoose.model('Driver', DriverSchema);
