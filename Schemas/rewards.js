var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    tokenValue: String
    , dateCreated: Date
    , dateUpdated: Date
    , description: String
    , name: String
    }
    , {usePushEach: true, collection: 'rewards'}
));

exports.getModel = function() {
    return model
}
