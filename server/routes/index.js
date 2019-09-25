const express = require('express');
const tweetRoute = require('../routes/tweetRoute')

const routes = (app) => {
    app.use('/api', tweetRoute);
}

module.exports = routes;