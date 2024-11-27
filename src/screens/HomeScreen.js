import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();

  const navigateToDashboard = () => {
    if (user.role === 'cliente') {
      navigation.navigate('ClientDashboard');
    } else if (user.role === 'profissional') {
      navigation.navigate('ProfessionalDashboard');
    }
  };

  return (
    <View>
      <Text>Bem-vindo, {user?.email}</Text>
      <Button title="Acessar Dashboard" onPress={navigateToDashboard} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
