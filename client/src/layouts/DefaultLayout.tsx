import React from 'react';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="default-layout min-h-screen bg-black text-white">
    {children}
  </div>
);

export default DefaultLayout;
