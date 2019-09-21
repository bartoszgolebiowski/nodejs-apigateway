const express = require('express');
const proxy = require('http-proxy-middleware');
const {HELLO_SERVICE, WELCOME_SERVICE} = require("./config/SERVICES_NAMES");

const app = express();

app.use('/v1/hello', proxy({target: HELLO_SERVICE, changeOrigin: true,}));
app.use('/v1/welcome', proxy({target: WELCOME_SERVICE, changeOrigin: true,}));
app.listen(3333);
