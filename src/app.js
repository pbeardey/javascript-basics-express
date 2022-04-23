const express = require('express');

const stringsRoute = require('./routes/strings.routes.js');
const numbersRoute = require('./routes/numbers.routes.js');
const booleansRoute = require('./routes/booleans.routes.js');

const app = express();
app.use(express.json());

app.use('/strings', stringsRoute);
app.use('/numbers', numbersRoute);
app.use('/booleans', booleansRoute);

module.exports = app;
