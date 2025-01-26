const express = require('express');
const { splitTransaction, reassembleTransaction } = require('../services/sdrService');
const router = express.Router();

// Split Transaction Endpoint
router.post('/split', (req, res) => {
  const { data, minParts, maxParts } = req.body;
  const parts = splitTransaction(data, minParts, maxParts);
  res.json({ parts });
});

// Reassemble Transaction Endpoint
router.post('/reassemble', (req, res) => {
  const { parts } = req.body;
  const result = reassembleTransaction(parts);
  res.json({ result });
});

module.exports = router;
