var mongoose = require('mongoose');
var model = mongoose.model('userdata',new mongoose.Schema({
    username: { type: String, required: true, unuque: true, lowercase: true }
    , premium: {type: Boolean, default: false}
    , password: {type: String, required: true}
    , salt: String
    , email: {type: String, required: true}
    , phonenumber: {type: String, required: true}
    , stripeCustomerId: {type: String, required: true}
    , dateCreated: {type: Date, required: true}
    , dateUpdated: {type: Date, required: true}
    }
    , {usePushEach: true, collection: 'users'}
));

exports.getModel = function() {
    return model
}
