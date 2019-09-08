var mongoose = require('mongoose');
var model = mongoose.model('todos',new mongoose.Schema({
    // assignmentName: String
    // , completed: Boolean
    description: String
    // , dateCreated: Date
    // , dateUpdated: Date
    }
    , {usePushEach: true, collection: 'todos'}
));

exports.getModel = function() {
    return model;
}
