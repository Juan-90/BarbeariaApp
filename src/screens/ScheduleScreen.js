import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ScheduleScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Serviço</Text>
      <Button
        title="Voltar para Dashboard"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
