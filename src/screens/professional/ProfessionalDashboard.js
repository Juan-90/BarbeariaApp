import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function ProfessionalDashboard() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard do Profissional</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Agendamentos</Text>
        <Text style={styles.cardContent}>
          Visualize, gerencie e acompanhe seus agendamentos.
        </Text>
        <TouchableOpacity
          style={styles.cardButton}
          onPress={() => navigation.navigate('Schedule')}
        >
          <Text style={styles.cardButtonText}>Gerenciar Agendamentos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Serviços</Text>
        <Text style={styles.cardContent}>
          Adicione, edite ou remova os serviços oferecidos.
        </Text>
        <TouchableOpacity
          style={styles.cardButton}
          onPress={() => navigation.navigate('ManageServices')}
        >
          <Text style={styles.cardButtonText}>Gerenciar Serviços</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statistics}>
        <Text style={styles.statisticsTitle}>Estatísticas</Text>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Icon name="calendar-check-o" size={30} color="#28a745" />
            <Text style={styles.statLabel}>Concluídos</Text>
            <Text style={styles.statValue}>15</Text>
          </View>

          <View style={styles.statItem}>
            <Icon name="clock-o" size={30} color="#ffc107" />
            <Text style={styles.statLabel}>Pendentes</Text>
            <Text style={styles.statValue}>5</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Icon name="scissors" size={30} color="#007bff" />
            <Text style={styles.statLabel}>Serviços</Text>
            <Text style={styles.statValue}>8</Text>
          </View>

          <View style={styles.statItem}>
            <Icon name="users" size={30} color="#6c757d" />
            <Text style={styles.statLabel}>Clientes</Text>
            <Text style={styles.statValue}>20</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  cardButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statistics: {
    marginTop: 20,
  },
  statisticsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
