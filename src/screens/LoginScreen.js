import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login or Sign Up</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Email address" 
        keyboardType="email-address" 
      />
      <TouchableOpacity 
        style={styles.continueButton} 
        onPress={() => navigation.navigate('ClientDashboard')}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Have a business account?{' '}
        <Text 
          style={styles.link} 
          onPress={() => navigation.navigate('Register')}
        >
          Sign in as a professional
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: { textAlign: 'center', fontSize: 16 },
  orText: { textAlign: 'center', marginVertical: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
  },
  continueButtonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
  footerText: { textAlign: 'center', marginTop: 20 },
  link: { color: 'blue', textDecorationLine: 'underline' },
});
