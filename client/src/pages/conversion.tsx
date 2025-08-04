import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Conversion() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-6 text-gold">Upgrade Required</h1>
      <p className="mb-6 text-lg text-gray-300">Your current plan does not grant access to this feature. Please upgrade to continue.</p>
      <button
        onClick={() => navigate('/upgrade')}
        className="bg-gold text-black px-6 py-3 rounded font-bold shadow hover:bg-yellow-400"
      >
        Upgrade Now
      </button>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 bg-gray-700 text-white px-6 py-3 rounded font-bold shadow hover:bg-gray-600"
      >
        Go Back
      </button>
    </div>
  );
}
