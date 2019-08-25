var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    service: String
    , free: Boolean
}));

exports.getModel = function() {
    return model
}
