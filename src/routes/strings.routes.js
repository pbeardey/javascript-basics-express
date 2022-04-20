const router = require('express').Router();

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

router.get('/hello/:greet', function(req, res) {
  res.json({ result: sayHello(req.params.greet) });
});

router.get('/upper/:greet', function(req, res) {
  const greeting = req.params.greet;
  res.json({ result: uppercase(greeting) });
});

router.get('/lower/:greet', function(req, res) {
  const greeting = req.params.greet;
  res.json({ result: lowercase(greeting) });
});

router.get('/first-characters/:greet', function(req, res) {
  if (req.query.length === undefined) {
    const greeting = firstCharacter(req.params.greet);
    res.status(200).json({ result: greeting });
  } else {
    const greetingLength = parseInt(req.query.length);
    const greeting = firstCharacters(req.params.greet, greetingLength);
    res.status(200).json({ result: greeting });
  }
});

module.exports = router;
