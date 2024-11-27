import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext'; // Corrigido o caminho para 'context'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ClientDashboard from '../screens/ClientDashboard';
import ProfessionalDashboard from '../screens/ProfessionalDashboard';
import AccountTypeScreen from '../screens/AccountTypeScreen';
import BusinessDetails from '../screens/BusinessDetails';

const Stack = createStackNavigator();

export default function AppNavigation() {
  const { user } = useAuth(); // Obtém o usuário logado

  return (
  <Stack.Navigator initialRouteName="BusinessDetails">
  <Stack.Screen name="AccountType" component={AccountTypeScreen} />
  <Stack.Screen name="Register" component={RegisterScreen} />
  <Stack.Screen name="Login" component={LoginScreen} />
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
  <Stack.Screen name="ProfessionalDashboard" component={ProfessionalDashboard} />
  <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
</Stack.Navigator>

  );
}
