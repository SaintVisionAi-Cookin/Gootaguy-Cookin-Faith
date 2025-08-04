import React from 'react';

export default function VoiceMic({ onClick }) {
  return (
    <button onClick={onClick} className="bg-gold text-black rounded-full p-3 shadow-lg hover:bg-yellow-400">
      <img src={require('@/assets/azure-logo.svg')} alt="Mic" className="h-6" />
    </button>
  );
}
