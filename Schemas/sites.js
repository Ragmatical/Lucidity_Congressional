var mongoose = require('mongoose');
var model = mongoose.model('sites',new mongoose.Schema({
    url: String
    , timeSpent: String
    , educationalLevel: String
    , name: String
    , user: {type: mongooseModule.Schema.ObjectId, ref: 'User'}
  }
    , {usePushEach: true, collection: 'sites'} 
));

exports.getModel = function() {
    return model
}
