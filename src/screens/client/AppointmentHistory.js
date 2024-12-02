import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { formatDate } from '@utils/DateUtils';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppointmentContext } from '@context/AppointmentContext';

export default function AppointmentHistory() {
  const { appointments } = useContext(AppointmentContext); // Obtém os agendamentos do contexto
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação de carregamento inicial (apenas para visualização do spinner)
    const fetchData = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Erro ao carregar agendamentos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Agendamentos</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : appointments.length === 0 ? (
        <Text style={styles.emptyState}>Você ainda não tem agendamentos.</Text>
      ) : (
        <FlatList
          data={appointments.sort((a, b) => new Date(b.date) - new Date(a.date))}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Icon name="scissors" size={20} color="#007bff" style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.service}>{item.service}</Text>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  service: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  emptyState: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});
