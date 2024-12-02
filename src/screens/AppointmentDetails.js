// src/screens/client/AppointmentDetails.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatDate, formatTime } from '@utils/DateUtils';

export default function AppointmentDetails({ route }) {
  const { appointment } = route.params; // Recebe os detalhes via navegação

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Agendamento</Text>
      <Text style={styles.label}>Serviço:</Text>
      <Text style={styles.value}>{appointment.service}</Text>
      <Text style={styles.label}>Data:</Text>
      <Text style={styles.value}>{formatDate(appointment.date)}</Text>
      <Text style={styles.label}>Hora:</Text>
      <Text style={styles.value}>{formatTime(appointment.date)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});
