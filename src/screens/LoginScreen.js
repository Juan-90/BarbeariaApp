import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const { login, user } = useAuth(); // Obtém o método `login` e o estado `user` do contexto
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const success = login(email, password); // Realiza o login

    if (success) {
      // Após login bem-sucedido, redireciona com base no tipo de conta
      if (user.role === 'cliente') {
        navigation.navigate('ClientDashboard');
      } else if (user.role === 'profissional') {
        navigation.navigate('ProfessionalDashboard');
      } else {
        Alert.alert('Erro', 'Tipo de conta desconhecido.');
      }
    }
  }

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
