var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    blacklist: String
    , whitelist: String
}));

exports.getModel = function() {
    return model
}
