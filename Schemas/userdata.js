var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    username: String
    , premium: Boolean
    , password: String
    , salt: String
    , email: String
    , phonenumber: String
    , stripeCustomerId: String
    , dateCreated: Date
    , dateUpdated: Date
    }
    , {usePushEach: true, collection: 'users'}
));

exports.getModel = function() {
    return model
}
