import React, { useState } from 'react';

const SDRStatus = () => {
  const [transactionId, setTransactionId] = useState('');
  const [status, setStatus] = useState('');

  const handleCheckStatus = async () => {
    const response = await fetch(`/sdr/status?transactionId=${transactionId}`);
    const data = await response.json();
    setStatus(data.status || 'Transaction not found');
  };

  return (
    <div>
      <h2>Check Transaction Status</h2>
      <input
        type="text"
        placeholder="Enter Transaction ID"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
      />
      <button onClick={handleCheckStatus}>Check Status</button>
      {status && <p>Status: {status}</p>}
    </div>
  );
};

export default SDRStatus;
