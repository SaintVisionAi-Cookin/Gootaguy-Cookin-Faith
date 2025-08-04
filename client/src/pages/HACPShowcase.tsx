import React from "react";

const Header = () => (
  <header className="w-full py-4 bg-black text-white border-b border-gray-800 flex justify-center items-center">
    <h1 className="text-2xl font-bold">HACP Framework Showcase</h1>
  </header>
);

const Footer = () => (
  <footer className="w-full py-3 bg-black text-gray-400 border-t border-gray-800 text-center">
    &copy; 2025 PartnerTech.ai &mdash; Powered by HACP
  </footer>
);

export default function HACPShowcase() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-xl w-full text-center">
          <h2 className="text-xl font-semibold text-[hsl(var(--gold))] mb-4">Human-AI Connection Protocol (HACP)</h2>
          <p className="text-gray-300 mb-6">
            The HACP framework powers all behavioral intelligence and tier-based access in PartnerTech.ai. This page is dedicated to showcasing the patented 4-tier model and its emotional calibration capabilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
              <h3 className="font-bold text-blue-200 mb-2">T1: Discovery</h3>
              <p className="text-sm text-gray-200">Initial contact, low emotional calibration.</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
              <h3 className="font-bold text-green-200 mb-2">T2: Qualification</h3>
              <p className="text-sm text-gray-200">Engagement, medium emotional calibration.</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-400/20 to-[hsl(var(--gold))]/20 border border-yellow-400/30">
              <h3 className="font-bold text-yellow-200 mb-2">T3: Negotiation</h3>
              <p className="text-sm text-gray-200">Decision phase, high emotional calibration.</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <h3 className="font-bold text-purple-200 mb-2">T4: Closing</h3>
              <p className="text-sm text-gray-200">Implementation, enterprise emotional calibration.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
