import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';
import { useAuth } from './hooks/useAuth';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import DefaultLayout from './layouts/DefaultLayout';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const RoleGuard = ({ roles, children }: { roles?: string[]; children: React.ReactNode }) => {
  const { user } = useAuth();
  if (!roles || (user && roles.includes(user.role))) return children;
  return <Navigate to="/unauthorized" />;
};

const LayoutWrapper = ({ layout, children }: { layout?: string; children: React.ReactNode }) => {
  switch (layout) {
    case 'dashboard':
      return <DashboardLayout>{children}</DashboardLayout>;
    case 'auth':
      return <AuthLayout>{children}</AuthLayout>;
    default:
      return <DefaultLayout>{children}</DefaultLayout>;
  }
};

export const AppRoutes = () => (
  <Routes>
    {routes.map(({ path, component: Component, private: isPrivate, roles, layout }, i) => {
      let element = <Component />;
      if (roles) {
        element = <RoleGuard roles={roles}>{element}</RoleGuard>;
      }
      if (isPrivate) {
        element = <AuthGuard>{element}</AuthGuard>;
      }
      element = <LayoutWrapper layout={layout}>{element}</LayoutWrapper>;
      return <Route key={i} path={path} element={element} />;
    })}
  </Routes>
);
