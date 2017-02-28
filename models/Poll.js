var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
    title: {type:String, default:''},
    timestamp: {type:Date, default:Date.now},
    subject:{type:String, default:''},
    options:{type:Array, default:[]},
});

module.exports = mongoose.model('PollSchema', PollSchema);