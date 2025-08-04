import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="auth-layout min-h-screen bg-gradient-to-br from-black via-gray-900 to-gold flex items-center justify-center">
    {children}
  </div>
);

export default AuthLayout;
