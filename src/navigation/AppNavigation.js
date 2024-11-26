import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ClientDashboard from '../screens/ClientDashboard';
import ProfessionalDashboard from '../screens/ProfessionalDashboard';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen 
          name="ClientDashboard" 
          component={ClientDashboard} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ProfessionalDashboard" 
          component={ProfessionalDashboard} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
