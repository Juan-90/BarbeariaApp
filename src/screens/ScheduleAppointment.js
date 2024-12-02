// src/screens/client/ScheduleAppointment.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from '@utils/DateUtils';

export default function ScheduleAppointment() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, date) => {
    setShowPicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione a data para o agendamento:</Text>
      <Text style={styles.date}>{formatDate(selectedDate)}</Text>
      <Button title="Selecionar Data" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={handleDateChange}
        />
      )}
      <Button title="Confirmar Agendamento" onPress={() => alert(`Agendado para: ${formatDate(selectedDate)}`)} />
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
