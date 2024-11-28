import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import AuthTest from './src/components/AuthTest'; // Certifique-se de que o caminho está correto

export default function App() {
  return (
    <AuthProvider>
      <AuthTest />
    </AuthProvider>
  );
}
