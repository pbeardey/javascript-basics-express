const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const app = express();

app.get('/strings/hello/:greet', function(req, res) {
  const greeting = req.params.greet;
  res.json({ result: sayHello(greeting) });
});

app.get('/strings/upper/:greet', function(req, res) {
  const greeting = req.params.greet;
  res.json({ result: uppercase(greeting) });
});

app.get('/strings/lower/:greet', function(req, res) {
  const greeting = req.params.greet;
  res.json({ result: lowercase(greeting) });
});

app.get('/strings/first-characters/:greet', function(req, res) {
  if (req.query.length === undefined) {
    const greeting = firstCharacter(req.params.greet);
    res.status(200).json({ result: greeting });
  } else {
    const greetingLength = parseInt(req.query.length);
    const greeting = firstCharacters(req.params.greet, greetingLength);
    res.status(200).json({ result: greeting });
  }
});

module.exports = app;
