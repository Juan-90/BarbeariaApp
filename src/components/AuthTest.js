import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext'; // Atualize o caminho se necessário

export default function AuthTest() {
  const { user, login, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Usuário atual: {user ? user.email : 'Nenhum usuário logado'}
      </Text>
      <Button
        title="Login de Teste"
        onPress={() => login('test@example.com', '123456')}
      />
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
