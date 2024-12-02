import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function BookAppointment({ navigation }) {
  const [selectedService, setSelectedService] = useState(null);

  // Lista de serviços disponíveis
  const services = [
    { id: '1', name: 'Corte de Cabelo' },
    { id: '2', name: 'Barba' },
    { id: '3', name: 'Corte + Barba' },
    { id: '4', name: 'Tratamento Capilar' },
  ];

  // Handle seleção de serviço
  const handleSelectService = (service) => {
    setSelectedService(service);
    // Aqui podemos adicionar lógica para avançar para seleção de horário
    navigation.navigate('ScheduleAppointment');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcar Horário</Text>
      <Text style={styles.subtitle}>Escolha um serviço:</Text>

      {/* Lista de serviços */}
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.serviceButton,
              selectedService?.id === item.id && styles.selectedServiceButton,
            ]}
            onPress={() => handleSelectService(item)}
          >
            <Text
              style={[
                styles.serviceText,
                selectedService?.id === item.id && styles.selectedServiceText,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Botão de confirmação */}
      {selectedService && (
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() =>
            alert(`Serviço "${selectedService.name}" selecionado!`)
          }
        >
          <Text style={styles.confirmButtonText}>Confirmar Serviço</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  serviceButton: {
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedServiceButton: {
    backgroundColor: '#007bff',
  },
  serviceText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  selectedServiceText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  confirmButton: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#28a745',
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
