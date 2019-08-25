var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    username: String
    , text: String
    , rating: String
}));

exports.getModel = function() {
    return model
}
