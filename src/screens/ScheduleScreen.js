import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ScheduleScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { service } = route.params;

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleConfirm = () => {
    // Simular salvar o agendamento
    alert(`Serviço: ${service.name}\nData: ${date}\nHora: ${time}`);
    navigation.navigate('ClientDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Serviço</Text>
      <Text style={styles.serviceName}>{service.name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Data (DD/MM/AAAA)"
        placeholderTextColor="#CCC"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora (HH:MM)"
        placeholderTextColor="#CCC"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Confirmar" onPress={handleConfirm} color="#FFD700" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
  },
  serviceName: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 5,
    padding: 10,
    color: '#FFF',
    marginBottom: 15,
  },
});
