const crypto = require('crypto');

// Hash Biometric Data
function hashBiometricData(biometricData) {
  return crypto.createHash('sha256').update(biometricData).digest('hex');
}

// Verify Biometric Data
function verifyBiometricData(inputHash, storedHash) {
  return inputHash === storedHash;
}

module.exports = {
  hashBiometricData,
  verifyBiometricData,
};
