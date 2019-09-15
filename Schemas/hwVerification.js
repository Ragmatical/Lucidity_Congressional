var mongoose = require('mongoose');
var model = mongoose.model('hwVerfication',new mongoose.Schema({
    assignmentName: String
    , verified: Boolean
    , verifiedMethod: String
    , evidence: []
    , dateCreated: Date
    , dateUpdated: Date
    }
    , {usePushEach: true, collection: 'hwverifications'}
));

exports.getModel = function() {
    return model
}
