import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfessionalDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Painel do Profissional</Text>
      <Text style={styles.subtitle}>Aqui você pode gerenciar seus serviços e clientes.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default ProfessionalDashboard;
