var mongoose = require('mongoose');
var model = mongoose.model('sites',new mongoose.Schema({
    url: String
    , timeSpent: String
    , educationalLevel: String
    , 
  }));

exports.getModel = function() {
    return model
}
