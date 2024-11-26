import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function ProfessionalDashboard({ navigation }) {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Bem-vindo à Dashboard do Profissional!</Text>
      
      {/* Botão para visualizar agenda */}
      <Button 
        title="Visualizar Agenda" 
        onPress={() => navigation.navigate('Schedule')} 
      />

      {/* Botão para gerenciar serviços */}
      <Button 
        title="Gerenciar Serviços" 
        onPress={() => navigation.navigate('ManageServices')} 
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

      {/* Botão para vizualizar os detaljes dos agendamentos de serviços */}
      <Button
        title="Ver Detalhes"
        onPress={() => navigation.navigate('Details')}
      />

    </View>
  );
}
