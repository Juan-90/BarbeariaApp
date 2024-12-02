import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Schedule() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda do Profissional</Text>
      <Text>Horários marcados pelos clientes aparecerão aqui.</Text>
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
