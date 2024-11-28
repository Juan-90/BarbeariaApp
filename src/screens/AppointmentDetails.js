import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function AppointmentDetails({ route, navigation }) {
  const { appointment } = route.params; // Recebe os detalhes do agendamento via navegação

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Agendamento</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Cliente:</Text>
        <Text style={styles.value}>{appointment.clientName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Serviço:</Text>
        <Text style={styles.value}>{appointment.service}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Data:</Text>
        <Text style={styles.value}>{appointment.date}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Horário:</Text>
        <Text style={styles.value}>{appointment.time}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{appointment.status}</Text>
      </View>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
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
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 100,
  },
  value: {
    flex: 1,
  },
});
