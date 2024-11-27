import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientDashboard from '../screens/ClientDashboard';
import ScheduleScreen from '../screens/ScheduleScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="ClientDashboard">
      <Stack.Screen
        name="ClientDashboard"
        component={ClientDashboard}
        options={{ title: 'Painel do Cliente' }}
      />
      <Stack.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{ title: 'Agendar Serviço' }}
      />
    </Stack.Navigator>
  );
}
