import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação das telas
import LoginScreen from '@screens/LoginScreen';
import RegisterScreen from '@screens/RegisterScreen';
import AccountTypeScreen from '@screens/AccountTypeScreen';
import ClientDashboard from '@screens/client/ClientDashboard';
import ProfessionalDashboard from '@screens/professional/ProfessionalDashboard';
import ScheduleAppointment from '@screens/ScheduleAppointment';
import BookAppointment from '@screens/client/BookAppointment';
import AppointmentHistory from '@screens/client/AppointmentHistory';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="AccountType">
      {/* Escolha do tipo de conta */}
      <Stack.Screen name="AccountType" component={AccountTypeScreen} />

      {/* Registro e Login */}
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* Dashboards */}
      <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
      <Stack.Screen name="ProfessionalDashboard" component={ProfessionalDashboard} />
      <Stack.Screen name="ScheduleAppointment" component={ScheduleAppointment} />

      {/* Arquivos do DashboardCliente */}
      <Stack.Screen name="BookAppointment" component={BookAppointment} options={{ title: 'Marcar Horário' }} />
      <Stack.Screen name="AppointmentHistory" component={AppointmentHistory} options={{ title: 'Histórico de Agendamentos' }} />

    </Stack.Navigator>
  );
}
