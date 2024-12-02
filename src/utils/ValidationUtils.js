// src/utils/ValidationUtils.js

export function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  export function isPasswordStrong(password) {
    return password.length >= 8; // Personalize conforme necessário
  }
  
  export function areFieldsFilled(fields) {
    return fields.every((field) => field.trim() !== '');
  }
  