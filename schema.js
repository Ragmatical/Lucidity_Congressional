var mongoose = require('mongoose');
var model = mongoose.model('labels',new mongoose.Schema({
    date: Date
    , url: String
    , label: String
    , image: Buffer
    , averageRed: Number
    , averageGreen: Number
    , averageBlue: Number
    , mostPopular: String
    , colorCount: String
    , text: String
}));

exports.getModel = function() {
    return model
}
