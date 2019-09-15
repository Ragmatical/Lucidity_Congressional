var mongoose = require('mongoose');
<<<<<<< HEAD
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
=======
var model = mongoose.model('users',new mongoose.Schema({
    username: {type:String, required: true, unique: true, lowercase: true}
    , premium: {type:Boolean, default:false}
    , password: {type:String, required:true}
    , salt: String
    , email: {type:String, required: true}
    , phonenumber: {type:String, required:true}
    , stripeCustomerId: {type:String, required:true}
    , dateCreated: {type:Date, required:true}
    , dateUpdated: {type:Date, required:true}
>>>>>>> 7e8584e9b1b52623917966048b9e99d89b76729b
    }
    , {usePushEach: true, collection: 'users'}
));

exports.getModel = function() {
    return model
}
