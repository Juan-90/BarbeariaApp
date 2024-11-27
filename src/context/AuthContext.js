import React, { createContext, useState, useContext } from 'react';
import { Alert } from 'react-native';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Representa o usuário logado
  const [users, setUsers] = useState([]); // Simula um banco de dados de usuários

  /**
   * Registra um novo usuário.
   * @param {Object} newUser - Objeto contendo `email`, `password` e `role` (cliente ou profissional).
   */
  const register = (newUser) => {
    const userExists = users.find((u) => u.email === newUser.email);

    if (userExists) {
      Alert.alert('Erro', 'Usuário já cadastrado!');
      return false;
    }

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUser(newUser); // Faz login automático após o registro
    Alert.alert('Sucesso', 'Registro concluído com sucesso!');
    return true;
  };

  /**
   * Realiza o login de um usuário.
   * @param {string} email - Email do usuário.
   * @param {string} password - Senha do usuário.
   * @returns {boolean} - Retorna `true` se o login for bem-sucedido, caso contrário, `false`.
   */
  const login = (email, password) => {
    const foundUser = users.find((u) => u.email === email && u.password === password);

    if (foundUser) {
      setUser(foundUser); // Define o usuário logado
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      return true;
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos.');
      return false;
    }
  };

  /**
   * Realiza o logout do usuário.
   */
  const logout = () => {
    setUser(null);
    Alert.alert('Sucesso', 'Logout realizado com sucesso!');
  };

  return (
    <AuthContext.Provider value={{ user: user || null, users: users || [], register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook para acessar o contexto de autenticação. */
  export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
      throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }

    return context; // Certifique-se de que o contexto retorna `user` e `users`
  }

