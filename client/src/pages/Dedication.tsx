import React from "react";

const Header = () => (
  <header className="w-full py-4 bg-black text-white border-b border-gray-800 flex justify-center items-center">
    <h1 className="text-2xl font-bold">Dedication</h1>
  </header>
);

const Footer = () => (
  <footer className="w-full py-3 bg-black text-gray-400 border-t border-gray-800 text-center">
    &copy; 2025 PartnerTech.ai &mdash; Powered by HACP
  </footer>
);

export default function Dedication() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-xl w-full text-center">
          <h2 className="text-xl font-semibold text-[hsl(var(--gold))] mb-4">Dedication</h2>
          <p className="text-gray-300 mb-6">
            This page is dedicated to the visionaries, engineers, and believers who made PartnerTech.ai and the HACP framework a reality. Thank you for your relentless pursuit of human-AI synergy and for building a platform that empowers everyone.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
