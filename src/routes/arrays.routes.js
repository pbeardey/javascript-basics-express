const router = require('express').Router();

const res = require('express/lib/response');
const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

router.post('/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  return res.status(200).json({ result: getNthElement(index, array) });
});

router.post('/to-string', (req, res) => {
  const { array } = req.body;
  return res.status(200).json({ result: arrayToCSVString(array) });
});

router.post('/append', (req, res) => {
  const { array, value } = req.body;
  addToArray(value, array);
  return res.status(200).json({ result: array });
});

router.post('/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  return res.status(200).json({ result: elementsStartingWithAVowel(array) });
});

router.post('/remove-element', (req, res) => {
  let { index } = req.query;
  const { array } = req.body;
  if (index === undefined) {
    index = 0;
  }
  const array2 = removeNthElement2(index, array);
  return res.status(200).json({ result: array2 });
});

module.exports = router;
