import React, { useState } from 'react';

const SDRVote = () => {
  const [vote, setVote] = useState('');
  const [status, setStatus] = useState('');

  const handleVoteSubmission = async () => {
    const response = await fetch('/sdr/split', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: vote, minParts: 5, maxParts: 10 }),
    });
    const data = await response.json();
    setStatus(data.parts ? 'Vote Submitted Successfully!' : 'Error Submitting Vote');
  };

  return (
    <div>
      <h1>Cast Your Vote</h1>
      <input
        type="text"
        placeholder="Enter your vote"
        value={vote}
        onChange={(e) => setVote(e.target.value)}
      />
      <button onClick={handleVoteSubmission}>Submit Vote</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default SDRVote;
