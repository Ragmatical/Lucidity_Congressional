var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    Downtime: String
    , Ai: Boolean
    , Password: String
}));

exports.getModel = function() {
    return model
}
