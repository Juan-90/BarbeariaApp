import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate, formatTime } from '@utils/DateUtils';
import { useContext } from 'react';
import { AppointmentContext } from '@context/AppointmentContext';


export default function ScheduleAppointment({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleTimeChange = (event, time) => {
    setShowTimePicker(false);
    if (time) {
      const updatedDate = new Date(selectedDate);
      updatedDate.setHours(time.getHours(), time.getMinutes());
      setSelectedDate(updatedDate);
    }
  };

  const { addAppointment } = useContext(AppointmentContext);

const confirmAppointment = () => {
  const newAppointment = {
    id: Date.now(), // Gera um ID único
    date: selectedDate.toISOString(), // Converte a data para o formato ISO
    service: 'Corte de cabelo', // Você pode permitir que o cliente escolha o serviço
  };

  addAppointment(newAppointment); // Salva no estado global

  Alert.alert(
    'Confirmação',
    `Agendado para: ${formatDate(selectedDate)} às ${formatTime(selectedDate)}`,
    [{ text: 'OK', onPress: () => navigation.navigate('AppointmentHistory') }]
  );
};


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione a data e horário para o agendamento:</Text>
      <Text style={styles.date}>{`${formatDate(selectedDate)} às ${formatTime(selectedDate)}`}</Text>
      <Button title="Selecionar Data" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={handleDateChange}
        />
      )}
      <Button title="Selecionar Horário" onPress={() => setShowTimePicker(true)} />
      {showTimePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="time"
          display="clock"
          onChange={handleTimeChange}
        />
      )}
      <Button title="Confirmar Agendamento" onPress={confirmAppointment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
