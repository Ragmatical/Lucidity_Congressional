var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    url: String
    , type: String
}));

exports.getModel = function() {
    return model
}
