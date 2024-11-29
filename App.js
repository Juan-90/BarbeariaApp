import React from 'react';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import AppNavigation from './src/navigation/AppNavigation';
import { ActivityIndicator, View } from 'react-native';

function AppContent() {
  const { user } = useAuth();

  if (user === null) {
    // Enquanto verifica o estado do usuário
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <AppNavigation />;
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </AuthProvider>
  );
}
