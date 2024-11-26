import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function ClientDashboard({ navigation }) {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Bem-vindo à Dashboard do Cliente!</Text>
      
      {/* Botão para visualizar agendamentos */}
      <Button 
        title="Visualizar Agendamentos" 
        onPress={() => navigation.navigate('Appointments')} 
      />

      {/* Botão para marcar um novo horário */}
      <Button 
        title="Marcar Horário" 
        onPress={() => navigation.navigate('BookAppointment')} 
      />

      {/* Botão para editar perfil */}
      <Button 
        title="Editar Perfil" 
        onPress={() => navigation.navigate('EditProfile')} 
      />

      {/* Botão de Logout */}
      <Button 
        title="Sair" 
        onPress={logout} 
      />

      {/* Botão de Agendamento de Serviço */}
      <Button 
        title="Agendar Serviço" 
        onPress={() => navigation.navigate('Schedule')} 
      />

    </View>
  );
}
