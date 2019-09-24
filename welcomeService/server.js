const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const os = require('os');

const {URL, DB_NAME} = require('./config/DB');
const {Welcome} = require("./model/welcome");

const app = express();
const port = 1111;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const options = {
    useNewUrlParser: true,
};

mongoose.connect(`${URL}${DB_NAME}`, options)
    .then(() => console.log('successfully connected to DB'))
    .catch((err) => console.log(err, 'error while connecting to db'));
mongoose.connection.on('error', () => console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => console.log('connected'));


app.get('/v1/welcome', (req, res) => res.send(os.hostname()));
app.get('/', (req, res) => res.send(os.hostname()));
app.post('/v1/welcome', (req, res) => {
    Promise.resolve()
        .then(() => new Welcome(req.body))
        .then(todo => todo.save())
        .then(todo => res.send(todo))
        .catch(err => res.send(err));
});
app.get('/v1/welcome/all', (req, res) => {
    Promise.resolve()
        .then(() => Welcome.find({}))
        .then(todo => res.send(todo))
        .catch(err => res.send(err));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));