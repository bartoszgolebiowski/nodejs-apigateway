const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const {URL, DB_NAME} = require('./config/DB');
const {Hello} = require("./model/hello");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const options = {
    useNewUrlParser: true,
    reconnectTries: 10,
    reconnectInterval: 500,
};
mongoose.connect(`${URL}${DB_NAME}`,options)
    .then(() => console.log('successfully connected to DB'))
    .catch((err) => console.log(err, 'error while connecting to db'));
mongoose.connection.on('error', () => console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => console.log('connected'));

const port = 2222;

app.get('/v1/hello', (req, res) => res.send('Hello World!'));
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