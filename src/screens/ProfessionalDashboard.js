import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext'; // Contexto de autenticação

export default function ProfessionalDashboard({ navigation }) {
  const { user, logout } = useAuth(); // Usando o contexto de autenticação
  const [clients, setClients] = useState([]); // Simulando lista de clientes

  // Função de logout
  const handleLogout = () => {
    logout(); // Chama o logout do AuthContext
    navigation.navigate('Login'); // Redireciona para a tela de login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard do Profissional</Text>
      <Text>Bem-vindo, {user?.email}</Text>
      <Text>Tipo de Conta: {user?.role}</Text>
      
      {/* Exemplo de clientes */}
      <Text style={styles.sectionTitle}>Meus Clientes:</Text>
      {clients.length > 0 ? (
        clients.map((client, index) => (
          <Text key={index}>Cliente: {client.name} - Agendamento: {client.appointment}</Text>
        ))
      ) : (
        <Text>Você não tem clientes agendados no momento.</Text>
      )}

      {/* Botão de logout */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

<Button
  title="Ver Detalhes do Cliente"
  onPress={() => navigation.navigate('Details', { clientId: 10 })}
/>


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
