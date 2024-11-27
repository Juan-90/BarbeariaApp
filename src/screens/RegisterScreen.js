import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function RegisterScreen({ route, navigation }) {
  const { register } = useAuth();
  const { role } = route.params; // Recebe o tipo de conta do parâmetro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const success = register({ email, password, role });

    if (success) {
      navigation.navigate(role === 'cliente' ? 'ClientDashboard' : 'ProfessionalDashboard');
    }
  };

  return (
    <View>
      <Text>Cadastro ({role === 'cliente' ? 'Cliente' : 'Profissional'})</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}
