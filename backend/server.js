const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once( 'open', () => {
    console.log("MongoDb connection established successfully");
})

const MatchesRouter = require('./Routes/Matches');
const UserRouter = require('./Routes/User');

app.use('/Matches', MatchesRouter); //Here to add more variables later i.e. Login and Quiz.
app.use('/User', UserRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});