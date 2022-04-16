const express = require('express');

const app = express();

app.get('/strings/hello/:greet', function(req, res) {
  const greeting = req.params.greet;
  res.send({ result: `Hello, ${greeting}!` });
});

module.exports = app;
