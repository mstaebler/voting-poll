require('dotenv').config();
var Promise = require('bluebird');
var MongoClient = Promise.promisifyAll(require('mongodb').MongoClient);

module.exports = {
    connect: () => {
    return MongoClient.connectAsync(process.env.MONGO_CONNECTION_STRING)
            .then(connection => {
                module.exports.polls = connection.collection('polls');
                module.exports.users = connection.collection('users');
            });
    }
}