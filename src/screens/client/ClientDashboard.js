import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ClientDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Painel do Cliente!</Text>

      {/* Botão para agendar serviço */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ScheduleAppointment')}
      >
        <Text style={styles.buttonText}>Agendar Serviço</Text>
      </TouchableOpacity>

      {/* Outros botões ou funcionalidades podem ser adicionados aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    padding: 16,
    backgroundColor: '#007bff',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
