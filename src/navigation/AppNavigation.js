import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ClientDashboard from '../screens/ClientDashboard';
import ProfessionalDashboard from '../screens/ProfessionalDashboard';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function AppNavigation() {
  const { user, users } = useAuth();

  // Certifique-se de que `users` é um array válido antes de usar `.length`
  const initialRoute = () => {
    if (!users || users.length === 0) return 'RegisterScreen';
    if (!user) return 'LoginScreen';
    return 'HomeScreen';
  };

  return (
    <Stack.Navigator initialRouteName={initialRoute()}>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
      <Stack.Screen name="ProfessionalDashboard" component={ProfessionalDashboard} />
    </Stack.Navigator>
  );
}
