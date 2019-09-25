const mongoose = require('mongoose');

const TweetSchema = mongoose.model('tweets', new mongoose.Schema({
    name: {
        type: String
    },
    content: {
        type: String,
        required : true
    },
    create_date: {
        type: Date,
    }
}), 'tweets');

module.exports = TweetSchema;