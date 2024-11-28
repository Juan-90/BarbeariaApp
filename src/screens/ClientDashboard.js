import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ClientDashboard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Dashboard do Cliente!</Text>
      <Text style={styles.subtitle}>Confira seus serviços e funcionalidades abaixo:</Text>
      <Button 
        title="Histórico de Agendamentos" 
        onPress={() => navigation.navigate('AppointmentHistory')} 
      />
      <Button 
        title="Gerenciar Perfil" 
        onPress={() => navigation.navigate('EditProfile')} 
      />
      <Button 
        title="Avaliar Serviços" 
        onPress={() => navigation.navigate('ReviewService')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
  },
});
