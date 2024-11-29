import React from 'react';
import { View, Button, Text } from 'react-native';

export default function AccountTypeScreen({ navigation }) {
  return (
    <View>
      <Text>Escolha o tipo de conta</Text>
      <Button
        title="Sou Cliente"
        onPress={() => navigation.navigate('Register', { role: 'cliente' })}
      />
      <Button
        title="Sou Profissional"
        onPress={() => navigation.navigate('Register', { role: 'profissional' })}
      />
      <Button
        title="Já tenho uma conta"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
