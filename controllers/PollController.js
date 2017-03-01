require('dotenv').config();
var Promise = require('bluebird');
var MongoClient = Promise.promisifyAll(require('mongodb').MongoClient);
var ObjectId = require('mongodb').ObjectId;
var db;

module.exports = {
    connect: () => {
        return MongoClient.connectAsync(process.env.MONGO_CONNECTION_STRING)
              .then(connection => {
                db = connection.collection('polls');
              });
    },

    find: (params) => {
        return Promise.resolve(db.find(params).toArray());
    },
    
    findById: (id) => {
        return Promise.resolve(db.find({_id: ObjectId(id)}).limit(1).toArray());
    },

    update: (id, params) => {
        return Promise.resolve(db.findOneAndUpdate({_id: ObjectId(id)}, params).toArray());
    },

    create: (params) => {
        return Promise.resolve(db.insertOne(params));
    },

    delete: (id) => {
        return Promise.resolve(db.findOneAndDelete({_id: ObjectId(id)}.toArray()));
    }

}