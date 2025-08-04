import React from 'react';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="dashboard-layout min-h-screen bg-gray-900 text-gold flex flex-col">
    {/* Add dashboard header/sidebar here if needed */}
    {children}
  </div>
);

export default DashboardLayout;
