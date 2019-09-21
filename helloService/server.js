const express = require('express');
const app = express();
const port = 2222;

app.get('/v1/welcome', (req, res) => res.send('Welcome World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));