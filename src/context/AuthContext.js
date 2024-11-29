import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Carregar usuário do AsyncStorage ao inicializar
  useEffect(() => {
    const loadUserFromStorage = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUserFromStorage();
  }, []);

  // Função de login
  const login = async (email, password) => {
    // Lógica de autenticação (simulada aqui)
    const mockUser = { email, role: email.includes('cliente') ? 'cliente' : 'profissional' };
    if (password === '12345678') { // Exemplo de senha válida
      await AsyncStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
      return mockUser;
    } else {
      return null;
    }
  };

  // Função de registro (simulada)
  const register = async (userData) => {
    // Simular sucesso de registro
    await AsyncStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    return true;
  };

  // Função de logout
  const logout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
