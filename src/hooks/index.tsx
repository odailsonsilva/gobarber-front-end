import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProdiver: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProdiver;
