import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação das telas
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AccountTypeScreen from '../screens/AccountTypeScreen';
import ClientDashboard from '../screens/ClientDashboard';
import ProfessionalDashboard from '../screens/ProfessionalDashboard';

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
    </Stack.Navigator>
  );
}
