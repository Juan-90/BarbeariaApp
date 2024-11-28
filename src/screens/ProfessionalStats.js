import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfessionalStats() {
  // Dados simulados para exibição inicial
  const stats = {
    totalRevenue: 'R$ 12.000,00',
    totalClients: 150,
    totalReviews: 98,
    averageRating: 4.7,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estatísticas do Profissional</Text>
      <View style={styles.statContainer}>
        <Text style={styles.label}>Receita Acumulada:</Text>
        <Text style={styles.value}>{stats.totalRevenue}</Text>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.label}>Clientes Atendidos:</Text>
        <Text style={styles.value}>{stats.totalClients}</Text>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.label}>Avaliações Recebidas:</Text>
        <Text style={styles.value}>{stats.totalReviews}</Text>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.label}>Média de Avaliação:</Text>
        <Text style={styles.value}>{stats.averageRating}</Text>
      </View>
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
  statContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    width: 150,
  },
  value: {
    flex: 1,
  },
});
