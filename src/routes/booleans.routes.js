const router = require('express').Router();

const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

router.post('/negate/', function(req, res) {
  return res.status(200).json({ result: negate(req.body.value) });
});

router.post('/truthiness', (req, res) => {
  return res.status(200).json({ result: truthiness(req.body.value) });
});

router.get('/is-odd/:num', (req, res) => {
  if (Number.isNaN(parseInt(req.params.num, 10))) {
    return res.status(400).json({ error: 'Parameter must be a number.' });
  }
  return res.status(200).json({ result: isOdd(req.params.num) });
});

router.get('/:str1/starts-with/:char1', (req, res) => {
  if (req.params.char1.length > 1) {
    return res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  return res.status(200).json({ result: startsWith(req.params.char1, req.params.str1) });
});

module.exports = router;
