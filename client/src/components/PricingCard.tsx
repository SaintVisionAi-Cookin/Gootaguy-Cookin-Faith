import React from 'react';

export default function PricingCard({ tier, price, features }) {
  return (
    <div className="bg-white text-black rounded-lg shadow-md p-6 w-80">
      <h3 className="text-2xl font-bold mb-2">{tier}</h3>
      <p className="text-xl font-semibold mb-4">${price}/mo</p>
      <ul className="mb-4">
        {features.map((f, i) => <li key={i} className="mb-1">- {f}</li>)}
      </ul>
      <button className="bg-gold text-black px-4 py-2 rounded hover:bg-yellow-400 font-bold">Upgrade</button>
    </div>
  );
}
