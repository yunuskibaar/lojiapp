// src/ApiService.js
import axios from 'axios';

/* const BASE_URL = 'https://study.logiper.com'; // Base URL */

// Giriş yapmak için fonksiyon
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`https://study.logiper.com/auth/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('hata var:', error);
    throw error;
  }
};

// Yeni bir kullanıcı kaydetmek için fonksiyon
export const registerUser = async (name, email, password,passwordConfirm) => {
  try {
    const response = await axios.post(`https://study.logiper.com/auth/register`, {
      name,
      email,
      password,
      passwordConfirm,
    });
    return response.data;
  } catch (error) {
    console.error('hata var :', error);
    throw error;
  }
};

