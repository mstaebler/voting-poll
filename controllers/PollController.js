var Promise = require('bluebird');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var config = require('./config');

module.exports = {
    
    find: (params) => {
        return Promise.resolve(config.polls.find(params).toArray());
    },
    
    findById: (id) => {
        return Promise.resolve(config.polls.find({_id: ObjectId(id)}).limit(1).toArray());
    },

    create: (params) => {
        return Promise.resolve(config.polls.insertOne(params));
    },

    delete: (id) => {
        return Promise.resolve(config.polls.findOneAndDelete({_id: ObjectId(id)}));
    }

}