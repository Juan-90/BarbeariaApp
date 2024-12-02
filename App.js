import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Certifique-se de ter instalado corretamente o React Navigation
import { AuthProvider } from './src/context/AuthContext'; // Gerenciamento de autenticação
import { AppointmentProvider } from '@context/AppointmentContext'; // Gerenciamento de agendamentos
import AppNavigation from './src/navigation/AppNavigation'; // Importa sua lógica de navegação principal

export default function App() {
  return (
    // Envolvendo o aplicativo com os contextos
    <AuthProvider>
      <AppointmentProvider>
        <NavigationContainer>
          {/* Adicionando a navegação principal */}
          <AppNavigation />
        </NavigationContainer>
      </AppointmentProvider>
    </AuthProvider>
  );
}
