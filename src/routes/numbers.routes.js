const router = require('express').Router();

const { add, subtract, multiply } = require('../lib/numbers');

router.get('/add/:num1/and/:num2', function(req, res) {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num1, num2) });
  }
});

router.get('/subtract/:num2/from/:num1', function(req, res) {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  // if (Number.isNaN(num1) || Number.isNaN(num2)) {
  //   res.status(400).json({ error: 'Parameters must be valid numbers.' });
  // } else {
  //   res.status(200).json({ result: subtract(num1, num2) });
  // }
  return Number.isNaN(num1) || Number.isNaN(num2)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(num1, num2) });
});

router.post('/multiply/', function(req, res) {
  let num1 = req.body.a;
  let num2 = req.body.b;
  if (typeof num1 === 'string') {
    num1 = parseInt(req.body.a);
  }

  if (typeof num2 === 'string') {
    num2 = parseInt(req.body.b);
  }

  return Number.isNaN(num1) || Number.isNaN(num2)
    ? res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' })
    : res.status(200).json({ result: multiply(num1, num2) });
});

module.exports = router;
