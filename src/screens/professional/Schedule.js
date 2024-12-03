import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Schedule() {
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      clientName: 'João Silva',
      service: 'Corte de Cabelo',
      date: '2024-12-05',
      time: '10:00',
      status: 'Pendente',
    },
    {
      id: '2',
      clientName: 'Maria Oliveira',
      service: 'Manicure',
      date: '2024-12-05',
      time: '14:00',
      status: 'Pendente',
    },
  ]);

  const handleCompleteAppointment = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: 'Concluído' }
          : appointment
      )
    );
    Alert.alert('Sucesso', 'Agendamento marcado como concluído.');
  };

  const handleCancelAppointment = (id) => {
    Alert.alert(
      'Confirmar Cancelamento',
      'Deseja realmente cancelar este agendamento?',
      [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim',
          onPress: () =>
            setAppointments((prevAppointments) =>
              prevAppointments.filter((appointment) => appointment.id !== id)
            ),
        },
      ]
    );
  };

  const renderAppointment = ({ item }) => (
    <View style={styles.appointmentItem}>
      <View style={styles.infoContainer}>
        <Text style={styles.clientName}>{item.clientName}</Text>
        <Text style={styles.service}>
          {item.service} - {item.date} às {item.time}
        </Text>
        <Text
          style={[
            styles.status,
            item.status === 'Pendente' ? styles.pending : styles.completed,
          ]}
        >
          {item.status}
        </Text>
      </View>
      <View style={styles.actions}>
        {item.status === 'Pendente' && (
          <TouchableOpacity
            onPress={() => handleCompleteAppointment(item.id)}
            style={styles.actionButton}
          >
            <Icon name="check" size={18} color="#28a745" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => handleCancelAppointment(item.id)}
          style={styles.actionButton}
        >
          <Icon name="times" size={18} color="#dc3545" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamentos</Text>

      {appointments.length > 0 ? (
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={renderAppointment}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.emptyText}>Nenhum agendamento encontrado.</Text>
      )}
    </View>
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
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  appointmentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoContainer: {
    flex: 1,
  },
  clientName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  service: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  pending: {
    color: '#ffc107',
  },
  completed: {
    color: '#28a745',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});
