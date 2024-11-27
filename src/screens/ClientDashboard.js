import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const services = [
  { id: '1', name: 'Corte de Cabelo', price: 'R$ 50,00' },
  { id: '2', name: 'Barba', price: 'R$ 30,00' },
  { id: '3', name: 'Corte e Barba', price: 'R$ 70,00' },
];

export default function ClientDashboard() {
  const navigation = useNavigation();

  const handleSchedule = (service) => {
    navigation.navigate('Schedule', { service });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços Disponíveis</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.serviceName}>{item.name}</Text>
            <Text style={styles.servicePrice}>{item.price}</Text>
            <Button
              title="Agendar"
              onPress={() => handleSchedule(item)}
              color="#FFD700"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
  },
  card: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#333',
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  servicePrice: {
    fontSize: 16,
    color: '#CCC',
  },
});
