import React from 'react';
import { Link } from 'react-router-dom';

const sidebarItems = [
  { name: 'CRM', path: '/crm' },
  { name: 'Lead Discovery', path: '/lead-discovery' },
  { name: 'HACP', path: '/hacp' },
  { name: 'Referral Bot', path: '/referral-bot' },
  { name: 'Analytics', path: '/analytics' },
  { name: 'Dedication', path: '/dedication' },
  { name: 'HACP Showcase', path: '/hacp-showcase' }
];

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-gold w-56 h-full flex flex-col gap-4 py-8 px-4 shadow-xl">
      <img src={require('@/assets/saintsal-badge.png')} alt="Badge" className="h-12 mb-6" />
      {sidebarItems.map(item => (
        <Link key={item.path} to={item.path} className="hover:text-white py-2 px-3 rounded transition-colors font-semibold">
          {item.name}
        </Link>
      ))}
    </aside>
  );
}
