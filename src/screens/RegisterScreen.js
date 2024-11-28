import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function RegisterScreen({ route, navigation }) {
  const { register } = useAuth();
  const { role } = route.params; // Recebe o tipo de conta do parâmetro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Valida o email usando regex.
   * @param {string} email - Email a ser validado.
   * @returns {boolean} - Retorna true se o email for válido.
   */
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = () => {
    // Validações básicas
    if (!email || !password) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Erro', 'Email inválido.');
      return;
    }

    // Registra o usuário
    const success = register({ email, password, role });

    if (success) {
      navigation.navigate(role === 'cliente' ? 'ClientDashboard' : 'ProfessionalDashboard');
    } else {
      Alert.alert('Erro', 'Não foi possível concluir o cadastro. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastro ({role === 'cliente' ? 'Cliente' : 'Profissional'})
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
