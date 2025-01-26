const crypto = require('crypto');

let identities = [];

// Create DID
function createDID(userId) {
  const did = `did:onetouch:${crypto.randomUUID()}`;
  identities.push({ userId, did });
  return did;
}

// Resolve DID
function resolveDID(did) {
  return identities.find((identity) => identity.did === did);
}

module.exports = {
  createDID,
  resolveDID,
};
