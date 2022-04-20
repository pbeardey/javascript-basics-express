const express = require('express');

const stringsRoute = require('./routes/strings.routes.js');
const numbersRoute = require('./routes/numbers.routes.js');

const app = express();
const router = express.Router();
app.use(express.json());

app.use('/strings', stringsRoute);
app.use('/numbers', numbersRoute);

module.exports = app;
