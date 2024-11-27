import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext'; // Contexto de autenticação

export default function ClientDashboard({ navigation }) {
  const { user, logout } = useAuth(); // Usando o contexto de autenticação
  const [appointments, setAppointments] = useState([]); // Simulando agendamentos do cliente

  // Função de logout
  const handleLogout = () => {
    logout(); // Chama o logout do AuthContext
    navigation.navigate('Login'); // Redireciona para a tela de login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard do Cliente</Text>
      <Text>Bem-vindo, {user?.email}</Text>
      <Text>Tipo de Conta: {user?.role}</Text>
      
      {/* Exemplo de agendamentos */}
      <Text style={styles.sectionTitle}>Meus Agendamentos:</Text>
      {appointments.length > 0 ? (
        appointments.map((appointment, index) => (
          <Text key={index}>Serviço: {appointment.service} - Data: {appointment.date}</Text>
        ))
      ) : (
        <Text>Você ainda não tem agendamentos.</Text>
      )}

      {/* Botão de logout */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
  },
});
