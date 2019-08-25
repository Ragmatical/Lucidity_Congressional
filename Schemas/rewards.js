var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    tokenCount: String
    , tokenValue: String
}));

exports.getModel = function() {
    return model
}
