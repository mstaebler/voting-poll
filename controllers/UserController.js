var Promise = require('bluebird');
var MongoClient = Promise.promisifyAll(require('mongodb').MongoClient);
var ObjectId = require('mongodb').ObjectId;
var config = require('./config');

module.exports = {
    
    find: (params) => {
        return Promise.resolve(config.users.find(params).toArray());
    },
    
    findById: (id) => {
        return Promise.resolve(config.users.find({_id: ObjectId(id)}).limit(1).toArray());
    },

    create: (params) => {
        return Promise.resolve(config.users.insertOne(params));
    },

    delete: (id) => {
        return Promise.resolve(config.users.findOneAndDelete({_id: ObjectId(id)}));
    }

}