var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    username: {type: mongooseModule.Schema.ObjectId, ref: 'User'}
    , text: String
    , rating: String
    }
    , {usePushEach: true, collection: 'sites'}
));

exports.getModel = function() {
    return model
}
