import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const { user, logout } = useAuth();
  const navigation = useNavigation();

  const handleNavigateToDashboard = () => {
    if (user.role === 'cliente') {
      navigation.navigate('ClientDashboard');
    } else if (user.role === 'profissional') {
      navigation.navigate('ProfessionalDashboard');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo(a), {user.name}!</Text>
      <Button title="Acessar Dashboard" onPress={handleNavigateToDashboard} />
      <Button title="Logout" onPress={logout} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
