import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'CRM', path: '/crm' },
  { name: 'Lead Discovery', path: '/lead-discovery' },
  { name: 'HACP', path: '/hacp' },
  { name: 'Referral Bot', path: '/referral-bot' },
  { name: 'Analytics', path: '/analytics' },
  { name: 'Dedication', path: '/dedication' },
  { name: 'HACP Showcase', path: '/hacp-showcase' }
];

export default function Header() {
  return (
    <header className="bg-gray-900 text-gold flex items-center justify-between px-6 py-4 shadow-lg">
      <div className="flex items-center gap-4">
        <img src={require('@/assets/logo-gold.svg')} alt="Logo" className="h-10" />
        <span className="font-bold text-xl tracking-wide">Cookin Faith</span>
      </div>
      <nav className="flex gap-6">
        {navItems.map(item => (
          <Link key={item.path} to={item.path} className="hover:text-white transition-colors font-medium">
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
