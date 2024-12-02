import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ManageServices() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Serviços</Text>
      <Text>Opções para adicionar, editar ou excluir serviços.</Text>
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
