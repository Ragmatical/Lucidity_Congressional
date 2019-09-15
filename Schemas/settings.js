var mongoose = require('mongoose');
var model = mongoose.model('settings',new mongoose.Schema({
    name: String
    , value: [String]
    , dateCreated: Date
    , dateUpdated: Date
    , type: String
    , description: String
    , order: Number
    }
    , {usePushEach: true, collection: 'settings'}
));

exports.getModel = function() {
    return model
}
