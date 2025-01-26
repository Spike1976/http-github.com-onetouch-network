const crypto = require('crypto');

// Split Transaction
function splitTransaction(data, minParts = 5, maxParts = 30) {
  const parts = [];
  const numParts = Math.floor(Math.random() * (maxParts - minParts + 1)) + minParts;

  for (let i = 0; i < numParts; i++) {
    const part = {
      id: `part${i + 1}`,
      data: encryptDataPart(data, i),
    };
    parts.push(part);
  }

  return parts;
}

// Encrypt Data Part
function encryptDataPart(data, index) {
  const cipher = crypto.createCipher('aes-256-cbc', `key-part${index}`);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Reassemble Transaction
function reassembleTransaction(parts) {
  return parts
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((part, index) => decryptDataPart(part.data, index))
    .join('');
}

// Decrypt Data Part
function decryptDataPart(encryptedPart, index) {
  const decipher = crypto.createDecipher('aes-256-cbc', `key-part${index}`);
  let decrypted = decipher.update(encryptedPart, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = {
  splitTransaction,
  reassembleTransaction,
};
