// src/utils/DateUtils.js

export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  }
  
  export function formatTime(date) {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  
  export function isDateInFuture(date) {
    const today = new Date();
    return new Date(date) > today;
  }
  