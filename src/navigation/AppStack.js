import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClientDashboard from '../screens/ClientDashboard';
import ProfessionalDashboard from '../screens/ProfessionalDashboard';

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="ClientDashboard" 
        component={ClientDashboard} 
        options={{ title: 'Dashboard Cliente' }} 
      />
      <Tab.Screen 
        name="ProfessionalDashboard" 
        component={ProfessionalDashboard} 
        options={{ title: 'Dashboard Profissional' }} 
      />
    </Tab.Navigator>
  );
}
