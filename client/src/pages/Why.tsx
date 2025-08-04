import React from 'react';

const Why: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-12">
    <header className="mb-8 text-center">
      <h1 className="text-4xl font-extrabold mb-2 text-gold">Why SaintVisionAI?</h1>
      <h2 className="text-xl font-semibold text-gray-300">The only platform combining patent-protected technology with enterprise-grade security</h2>
    </header>
    <section className="max-w-2xl w-full text-center mb-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gold mb-2">Patent Protected Technology</h3>
        <p className="text-gray-200">HACP™ U.S. Patent No. 10,290,222 - The only legally protected AI collaboration protocol in the industry.</p>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gold mb-2">Proven Revenue Generation</h3>
        <p className="text-gray-200">$8,947+ generated for clients through our Route Intelligence platform with 47+ satisfied customers.</p>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gold mb-2">Enterprise Security First</h3>
        <p className="text-gray-200">SOC 2 compliant, AES-256 encryption, faith-aligned values with transparent data practices.</p>
      </div>
    </section>
    <footer className="mt-12 text-gray-400 text-sm text-center">
      Powered by SaintSal™ • Where AI meets intuition<br />
      Protected by U.S. Patent No. 10,290,222 • SOC 2 Compliant • GDPR Ready<br />
      Made with ❤️ by SaintVision Team
    </footer>
  </div>
);

export default Why;
