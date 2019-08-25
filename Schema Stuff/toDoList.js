var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    AssignmentName: String
    , 
}));

exports.getModel = function() {
    return model
}
