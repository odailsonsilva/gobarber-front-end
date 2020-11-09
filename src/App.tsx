import React from 'react';

import GlobalStyled from './styles/global';
import SignIn from './pages/SignIn';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyled />
    </>
  );
};

export default App;
