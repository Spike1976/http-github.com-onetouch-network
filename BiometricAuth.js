import React, { useState } from 'react';

const BiometricAuth = () => {
  const [biometricData, setBiometricData] = useState('');
  const [result, setResult] = useState('');

  const handleRegister = async () => {
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ biometricData }),
    });
    const data = await response.json();
    setResult(`Registered! Hashed Data: ${data.hashedData}`);
  };

  const handleVerify = async () => {
    const response = await fetch('/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputHash: biometricData, storedHash: biometricData }),
    });
    const data = await response.json();
    setResult(data.isValid ? 'Verification successful!' : 'Verification failed!');
  };

  return (
    <div>
      <h2>Biometric Authentication</h2>
      <input
        type="text"
        placeholder="Enter Biometric Data"
        value={biometricData}
        onChange={(e) => setBiometricData(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleVerify}>Verify</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default BiometricAuth;
