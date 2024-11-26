import React, { createContext, useState, useContext } from 'react';
import { Alert } from 'react-native';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Representa o usuário logado
  const [users, setUsers] = useState([]); // Simula um banco de dados de usuários

  // Função para registrar um usuário
  const register = (newUser) => {
    const userExists = users.find((u) => u.email === newUser.email);

    if (userExists) {
      throw new Error('Usuário já cadastrado!'); // Evita duplicação
    }

    setUsers([...users, newUser]);
    setUser(newUser); // Faz login automático após o registro
  };

  // Função para realizar login
  const login = async (email, password) => {
    const userFound = users.find((u) => u.email === email && u.password === password);

    if (userFound) {
      setUser(userFound);
      return true; // Retorna sucesso
    } else {
      Alert.alert('Erro', 'Credenciais inválidas.');
      return false; // Retorna falha
    }
  };

  // Função para deslogar
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
