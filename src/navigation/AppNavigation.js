import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext'; // Importando o contexto de autenticação

// Importação das telas
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AccountTypeScreen from '../screens/AccountTypeScreen';
import ClientDashboard from '../screens/ClientDashboard';
import ProfessionalDashboard from '../screens/ProfessionalDashboard';
import EditProfile from '../screens/EditProfile';
import AppointmentDetails from '../screens/AppointmentDetails'; // Nova tela
import ProfessionalStats from '../screens/ProfessionalStats'; // Nova tela

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { user } = useAuth(); // Estado de autenticação

  return (
    <Stack.Navigator
      initialRouteName={user ? "ClientDashboard" : "Login"} // Redireciona com base no estado de login
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6200EE', // Cor de fundo do cabeçalho
        },
        headerTintColor: '#FFF', // Cor do texto do cabeçalho
        headerTitleStyle: {
          fontWeight: 'bold', // Estilo do título
        },
      }}
    >
      {/* Fluxo de Autenticação */}
      {!user ? (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Bem-vindo' }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: 'Cadastro' }}
          />
          <Stack.Screen
            name="AccountType"
            component={AccountTypeScreen}
            options={{ title: 'Escolha sua Conta' }}
          />
        </>
      ) : (
        <>
          {/* Dashboards */}
          <Stack.Screen
            name="ClientDashboard"
            component={ClientDashboard}
            options={{ title: 'Área do Cliente' }}
          />
          <Stack.Screen
            name="ProfessionalDashboard"
            component={ProfessionalDashboard}
            options={{ title: 'Área do Profissional' }}
          />

          {/* Telas Complementares */}
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ title: 'Editar Perfil' }}
          />
          <Stack.Screen
            name="AppointmentDetails"
            component={AppointmentDetails}
            options={{ title: 'Detalhes do Agendamento' }}
          />
          <Stack.Screen
            name="ProfessionalStats"
            component={ProfessionalStats}
            options={{ title: 'Estatísticas' }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
