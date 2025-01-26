const express = require('express');
const { hashBiometricData, verifyBiometricData } = require('../services/biometricService');
const router = express.Router();

// Register Biometric Data
router.post('/register', (req, res) => {
  const { biometricData } = req.body;
  const hashedData = hashBiometricData(biometricData);
  res.json({ message: 'Biometric data registered', hashedData });
});

// Verify Biometric Data
router.post('/verify', (req, res) => {
  const { inputHash, storedHash } = req.body;
  const isValid = verifyBiometricData(inputHash, storedHash);
  res.json({ isValid });
});

module.exports = router;
