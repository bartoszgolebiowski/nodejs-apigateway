const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const os = require('os');

const {URL, DB_NAME} = require('./config/DB');
const {Hello} = require("./model/hello");
const port = 2222;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const options = {
    useNewUrlParser: true,
};

const mathRandom = Math.random();
const counter = 0;
mongoose.connect(`${URL}${DB_NAME}`, options)
    .then(() => console.log('successfully connected to DB'))
    .catch((err) => console.log(err, 'error while connecting to db'));
mongoose.connection.on('error', () => console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => console.log('connected'));

app.get('/v1/hello', (req, res) => {
    console.log(os.hostname())
    res.send(`${os.hostname()} +  ${mathRandom} counter: ${counter}`)
});
app.get('/', (req, res) => res.send(os.hostname()));
app.post('/v1/hello', (req, res) => {
    Promise.resolve()
        .then(() => new Hello(req.body))
        .then(todo => todo.save())
        .then(todo => res.send(todo))
        .catch(err => res.send(err));
});
app.get('/v1/hello/all', (req, res) => {
    Promise.resolve()
        .then(() => Hello.find({}))
        .then(todo => res.send(todo))
        .catch(err => res.send(err));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));