var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    service: String
    , free: Boolean
    , dateCreated: Date
    , dateUpdated: Date
    , options: {}
    , description: String
    }
    , {usePushEach: true, collection: 'products'}
));

exports.getModel = function() {
    return model
}
