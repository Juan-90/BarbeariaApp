import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfessionalDashboard() {
  const navigation = useNavigation();

  // Dados fictícios para simular agendamentos e receita
  const appointments = [
    { id: '1', client: 'Carlos Silva', time: '09:00', service: 'Corte de cabelo' },
    { id: '2', client: 'Ana Santos', time: '10:30', service: 'Barba' },
    { id: '3', client: 'João Costa', time: '13:00', service: 'Corte e barba' },
  ];

  const totalEarnings = 350.00; // Receita acumulada (fictícia)

  // Função para navegar para os detalhes de um agendamento
  const handleAppointmentDetails = (appointment) => {
    navigation.navigate('AppointmentDetails', { appointment });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, Profissional!</Text>

      {/* Receita acumulada */}
      <View style={styles.earningsContainer}>
        <Text style={styles.earningsTitle}>Receita acumulada:</Text>
        <Text style={styles.earningsValue}>R$ {totalEarnings.toFixed(2)}</Text>
      </View>

      {/* Lista de agendamentos */}
      <Text style={styles.subtitle}>Agendamentos do Dia</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.appointmentItem}
            onPress={() => handleAppointmentDetails(item)}
          >
            <Text style={styles.appointmentText}>
              {item.time} - {item.client} ({item.service})
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Botões adicionais */}
      <View style={styles.buttonsContainer}>
        <Button
          title="Ver Estatísticas"
          onPress={() => navigation.navigate('ProfessionalStats')}
        />
        <Button
          title="Editar Perfil"
          onPress={() => navigation.navigate('EditProfile')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  earningsContainer: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  earningsTitle: {
    fontSize: 18,
    color: '#fff',
  },
  earningsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  appointmentItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  appointmentText: {
    fontSize: 16,
  },
  buttonsContainer: {
    marginTop: 20,
  },
});
