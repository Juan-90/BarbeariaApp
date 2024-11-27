import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AccountTypeScreen() {
  const navigation = useNavigation();

  // Função para escolher o tipo de conta e navegar para a tela de registro
  const chooseAccountType = (role) => {
    navigation.navigate('Register', { role }); // Passa o tipo de conta como parâmetro
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
