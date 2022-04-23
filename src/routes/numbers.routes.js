/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
const router = require('express').Router();

const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

router.get('/add/:num1/and/:num2', function(req, res) {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num1, num2) });
  }
});

router.get('/subtract/:num2/from/:num1', function(req, res) {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);

  return Number.isNaN(num1) || Number.isNaN(num2)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(num1, num2) });
});

router.post('/multiply/', function(req, res) {
  let num1 = req.body.a;
  let num2 = req.body.b;
  if (typeof num1 === 'string') {
    num1 = parseInt(req.body.a, 10);
  }
  if (typeof num2 === 'string') {
    num2 = parseInt(req.body.b, 10);
  }
  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(num1) && Number.isNaN(num2)) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).json({ result: multiply(num1, num2) });
});

router.post('/divide/', function(req, res) {
  const num1 = req.body.a;
  const num2 = req.body.b;
  const solution = divide(num1, num2);
  if (solution === Infinity) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(solution)) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).json({ result: solution });
});

router.post('/remainder/', function(req, res) {
  const num1 = req.body.a;
  const num2 = req.body.b;
  const solution = remainder(num1, num2);
  if (num2 == 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(solution)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).json({ result: remainder(req.body.a, req.body.b) });
});

module.exports = router;
