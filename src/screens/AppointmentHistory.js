import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const appointments = [
  { id: '1', service: 'Corte de cabelo', date: '2024-12-01', status: 'Realizado' },
  { id: '2', service: 'Barba', date: '2024-12-03', status: 'Cancelado' },
  { id: '3', service: 'Corte e Barba', date: '2024-12-05', status: 'Pendente' },
];

export default function AppointmentHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Agendamentos</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.service}>{item.service}</Text>
            <Text>{item.date}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  service: {
    fontWeight: 'bold',
  },
});
