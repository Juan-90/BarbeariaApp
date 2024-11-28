import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function ReviewService() {
  const [review, setReview] = useState('');

  const handleSubmit = () => {
    Alert.alert('Sucesso', 'Avaliação enviada com sucesso!');
    setReview(''); // Limpar o campo após envio
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avaliar Serviço</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Digite sua avaliação aqui..."
        value={review}
        onChangeText={setReview}
        multiline
      />
      <Button title="Enviar Avaliação" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    height: 100,
    marginBottom: 15,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
});
