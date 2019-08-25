var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    AssignmentName: String
    , Completed: String
    , Task: String
    , Description: String
    , dateCreated: Date
    , dateUpdated: Date
    }
    , {usePushEach: true, collection: 'todolists'}
));

exports.getModel = function() {
    return model
}
