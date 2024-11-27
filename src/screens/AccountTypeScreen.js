import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';

export default function AccountTypeScreen() {
  const navigation = useNavigation();
  const { setNewUser } = useAuth();

  const chooseAccountType = (role) => {
    setNewUser({ role }); // Salva temporariamente o tipo de conta
    navigation.navigate('Register'); // Navega para a tela de registro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o tipo de conta</Text>
      <Button title="Cliente" onPress={() => chooseAccountType('cliente')} />
      <Button title="Profissional" onPress={() => chooseAccountType('profissional')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
