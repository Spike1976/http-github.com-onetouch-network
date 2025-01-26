const express = require('express');
const { createDID, resolveDID } = require('../services/identityService');
const router = express.Router();

// Create DID
router.post('/create', (req, res) => {
  const { userId } = req.body;
  const did = createDID(userId);
  res.json({ did });
});

// Resolve DID
router.get('/resolve', (req, res) => {
  const { did } = req.query;
  const identity = resolveDID(did);
  if (!identity) {
    res.status(404).json({ message: 'DID not found' });
  } else {
    res.json({ identity });
  }
});

module.exports = router;
