const express = require('express');
const tweetRouter = express.Router();

const { tweetsPost, tweetsGet ,tweetsDelete } = require('../controller/tweetController');

tweetRouter.route("/tweets")
    .post(tweetsPost);

tweetRouter.route("/tweets")
    .get(tweetsGet);

tweetRouter.route("/tweets/:id")
    .get(tweetsGet);

tweetRouter.route("/tweets/:id")
    .delete(tweetsDelete);

module.exports = tweetRouter;