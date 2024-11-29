import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Certifique-se de ter instalado corretamente o React Navigation
import { AuthProvider } from './src/context/AuthContext';
import AppNavigation from './src/navigation/AppNavigation'; // Importa sua lógica de navegação principal

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
