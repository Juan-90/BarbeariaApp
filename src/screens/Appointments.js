import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Appointments() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Agendamentos</Text>
      <Text>Aqui será exibida a lista de agendamentos do cliente.</Text>
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
