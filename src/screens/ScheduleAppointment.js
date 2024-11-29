import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

const services = [
  { id: '1', name: 'Corte de cabelo' },
  { id: '2', name: 'Barba' },
  { id: '3', name: 'Corte + Barba' },
];

const times = [
  { id: '1', time: '09:00' },
  { id: '2', time: '10:00' },
  { id: '3', time: '11:00' },
  { id: '4', time: '14:00' },
  { id: '5', time: '15:00' },
];

export default function ScheduleAppointment({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleConfirm = () => {
    if (selectedDate && selectedService && selectedTime) {
      Alert.alert(
        'Agendamento Confirmado',
        `Serviço: ${selectedService.name}\nData: ${selectedDate}\nHorário: ${selectedTime.time}`,
        [{ text: 'OK', onPress: () => navigation.navigate('ClientDashboard') }]
      );
    } else {
      Alert.alert('Erro', 'Por favor, selecione uma data, serviço e horário.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Serviço</Text>

      {/* Calendário */}
      <Text style={styles.sectionTitle}>Escolha uma Data:</Text>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#007bff' },
        }}
        style={styles.calendar}
      />

      {/* Lista de Serviços */}
      <Text style={styles.sectionTitle}>Selecione um Serviço:</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.item,
              selectedService?.id === item.id && styles.selectedItem,
            ]}
            onPress={() => setSelectedService(item)}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        horizontal
      />

      {/* Lista de Horários */}
      {selectedService && (
        <>
          <Text style={styles.sectionTitle}>Selecione um Horário:</Text>
          <FlatList
            data={times}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.item,
                  selectedTime?.id === item.id && styles.selectedItem,
                ]}
                onPress={() => setSelectedTime(item)}
              >
                <Text style={styles.itemText}>{item.time}</Text>
              </TouchableOpacity>
            )}
            horizontal
          />
        </>
      )}

      {/* Botão de Confirmação */}
      {selectedDate && selectedService && selectedTime && (
        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirmar Agendamento</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  calendar: {
    marginBottom: 16,
  },
  item: {
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginHorizontal: 8,
  },
  selectedItem: {
    backgroundColor: '#007bff',
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    padding: 16,
    backgroundColor: '#28a745',
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
