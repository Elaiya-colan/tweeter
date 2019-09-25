const TweetSchema = require("../model/tweetModel")
const ObjectId = require('mongodb').ObjectID

const tweetsPost = (req, res) => {
    const TweetModel = new TweetSchema({
        name: req.body.name,
        content: req.body.content,
        create_date: new Date().toLocaleDateString()
    })

    TweetModel.save().then((data) => {
        res.status(201).json({ success: true, message: "Tweet created", data })
    }).catch((err) => {
        res.status(400).json({ success: false, message: "Tweet cannot be created", err })
    })

}

const tweetsGet = (req, res) => {
    const { id = null } = req.params;
    if (!id) {
        TweetSchema.find().then((data) => {
            res.status(200).json({ success: true, message: "Tweets could be returned", data })
        }).catch((err) => {
            res.status(400).json({ success: false, message: "Tweets could not be found", err })
        })
    } else {
        TweetSchema.findById(id).then((data) => {
            res.status(200).json({ success: true, message: "Tweet could be returned", data })
        }).catch((err) => {
            res.status(404).json({ success: false, message: "Tweet could not be found", err })
        })
    }
}

const tweetsDelete = (req, res) => {
    const { id = null } = req.params;
    TweetSchema.findByIdAndDelete({ _id: ObjectId(id) }).then((data) => {
        res.status(200).json({ success: true, message: "Tweet got deleted", data })
    }).catch((err) => {
        res.status(400).json({ success: false, message: "Tweets could not be found", err })
    })
}

module.exports = { tweetsPost, tweetsGet, tweetsDelete }