const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose= require("mongoose");

const routes = require('./routes');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoDdUri = "mongodb+srv://admin:mydeadshot_95@coar-nrkhp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDdUri, { useCreateIndex: true, useNewUrlParser: true }).then(() => {
  console.log("Connected to Db.")
}).catch((err) => {
  console.log("Error Connecting to Db.",err)
});

routes(app)
app.listen(PORT, () => console.log("Server started"))
