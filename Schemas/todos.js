var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    assignmentName: String
    , completed: String
    , task: String
    , description: String
    , dateCreated: Date
    , dateUpdated: Date
    }
    , {usePushEach: true, collection: 'todos'}
));

exports.getModel = function() {
    return model
}
