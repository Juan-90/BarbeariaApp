import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function RegisterScreen({ navigation }) {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('cliente'); // 'cliente' ou 'profissional'

  const handleRegister = () => {
    try {
      register({ email, password, role });
      Alert.alert('Sucesso', 'Usuário registrado com sucesso!');
      navigation.navigate('LoginScreen'); // Redireciona para a tela de login
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <View>
      <Text>Cadastro</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput
        placeholder="Papel (cliente ou profissional)"
        value={role}
        onChangeText={setRole}
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}
