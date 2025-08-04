import React from 'react';

export default function UpgradeButton({ onClick }) {
  return (
    <button onClick={onClick} className="bg-gold text-black px-4 py-2 rounded font-bold shadow hover:bg-yellow-400">
      Upgrade
    </button>
  );
}
