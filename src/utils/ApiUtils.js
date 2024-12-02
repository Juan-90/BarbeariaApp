// src/utils/ApiUtils.js

import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Substitua pela URL real do backend

export async function fetchData(endpoint, token) {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function postData(endpoint, data, token) {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
}
