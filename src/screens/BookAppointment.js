import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookAppointment() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcar Horário</Text>
      <Text>Formulário para o cliente selecionar data e horário.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});