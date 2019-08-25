var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    url: String
    , type: {type: String, enum: ['blacklist', 'whitelist']}
    , user: {type: mongooseModule.Schema.ObjectId, ref: 'User'}
    , dateCreated: Date
    , dateUpdated: Date
  }
    , {usePushEach: true, collection: 'blackwhitelists'}
));

exports.getModel = function() {
    return model
}
