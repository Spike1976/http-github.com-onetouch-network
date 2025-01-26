import React, { useState } from 'react';

const DIDManager = () => {
  const [did, setDID] = useState('');
  const [userId, setUserId] = useState('');
  const [resolvedDID, setResolvedDID] = useState('');

  const handleCreateDID = async () => {
    const response = await fetch('/did/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    });
    const data = await response.json();
    setDID(data.did);
  };

  const handleResolveDID = async () => {
    const response = await fetch(`/did/resolve?did=${did}`);
    const data = await response.json();
    setResolvedDID(data.identity ? JSON.stringify(data.identity) : 'DID not found');
  };

  return (
    <div>
      <h2>Decentralized Identity Manager</h2>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleCreateDID}>Create DID</button>
      {did && <p>Your DID: {did}</p>}
      <input
        type="text"
        placeholder="Enter DID"
        value={did}
        onChange={(e) => setDID(e.target.value)}
      />
      <button onClick={handleResolveDID}>Resolve DID</button>
      {resolvedDID && <p>Resolved Identity: {resolvedDID}</p>}
    </div>
  );
};

export default DIDManager;
