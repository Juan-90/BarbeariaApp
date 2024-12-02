// src/screens/client/AppointmentHistory.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { formatDate } from '@utils/DateUtils';

const mockAppointments = [
  { id: 1, date: '2024-12-01T14:00:00Z', service: 'Corte de cabelo' },
  { id: 2, date: '2024-12-05T10:30:00Z', service: 'Barba' },
];

export default function AppointmentHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Agendamentos</Text>
      <FlatList
        data={mockAppointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.service}>{item.service}</Text>
            <Text style={styles.date}>{formatDate(item.date)}</Text>
          </View>
        )}
      />
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
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  service: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
});
