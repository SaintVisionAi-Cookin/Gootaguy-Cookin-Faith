import React from 'react';

export default function Upgrade() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-6 text-gold">Upgrade Your Plan</h1>
      <p className="mb-6 text-lg text-gray-300">Choose a plan to unlock more features and access premium tools.</p>
      <a
        href="/api/stripe/checkout"
        className="bg-gold text-black px-6 py-3 rounded font-bold shadow hover:bg-yellow-400"
      >
        Go to Stripe Checkout
      </a>
    </div>
  );
}
