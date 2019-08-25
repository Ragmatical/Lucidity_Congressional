var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    assignmentName: String
    , verified: Boolean
    , proof: Buffer
}));

exports.getModel = function() {
    return model
}
