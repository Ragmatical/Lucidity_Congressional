var mongoose = require('mongoose');
var model = mongoose.model('labels',new mongoose.Schema({
    date: Date
    , url: String
    , educationalLevel: String
    , timeSpent: String
}));

exports.getModel = function() {
    return model
}
