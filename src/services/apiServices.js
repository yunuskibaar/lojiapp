// src/ApiService.js
import axios from 'axios';

 const BASE_URL = 'https://study.logiper.com';

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
export const samplePutWithToken = async (name,email,debtAmount,interestRate,paymentStart,installment,description) => {
  try {
    // const token= localStorage.getItem(token);
    const response = await axios.post(`https://study.logiper.com/finance/debt/`,{
      "debtName": name,
      "lenderName": email,
      "debtAmount": debtAmount,
      "interestRate": 10,
      "amount": 0,
      "paymentStart": "2024-06-13",
      "installment": 0,
      "description": "string",
      "paymentPlan": [
        {
          "paymentDate": "2024-06-13",
          "paymentAmount": 0
        }
      ]
    }, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI0MDE4YzVjYjc5MTkzM2M2MTdjNCIsImlhdCI6MTcxODMwNzA0OX0.Zu59lYUC_Didpod4CeC9c7qqyGHHtJmevcLuminzfJI`
      }
    });
    return response.data;
  } catch (error) {
    console.error('hata var :', error);
    throw error;
  }
};
export const samplegetWithToken = async () => {
  try {
    // const token= localStorage.getItem(token);
const response = await axios.get(`https://study.logiper.com/finance/debt`, {
  headers: {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI0MDE4YzVjYjc5MTkzM2M2MTdjNCIsImlhdCI6MTcxODMwNzA0OX0.Zu59lYUC_Didpod4CeC9c7qqyGHHtJmevcLuminzfJI`
  }
});
    return response.data;
  } catch (error) {
    console.error('hata var :', error);
    throw error;
  }
};
export const samplePostWithToken = async () => {
  try {
    // const token= localStorage.getItem(token);
    const response = await axios.post(`https://study.logiper.com/finance/debt`,{
      "debtName": "string",
      "lenderName": "string",
      "debtAmount": 10,
      "interestRate": 10,
      "amount": 0,
      "paymentStart": "2024-06-13",
      "installment": 0,
      "description": "string",
      "paymentPlan": [
        {
          "paymentDate": "2024-06-13",
          "paymentAmount": 0
        }
      ]
    }, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI0MDE4YzVjYjc5MTkzM2M2MTdjNCIsImlhdCI6MTcxODMwNzA0OX0.Zu59lYUC_Didpod4CeC9c7qqyGHHtJmevcLuminzfJI`
      }
    });
    return response.data;
  } catch (error) {
    console.error('hata var :', error);
    throw error;
  }
};


export const createDebt = async (newDebt) => {
  try {
    const response = await axios.post(`${BASE_URL}/finance/debt`, newDebt, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI0MDE4YzVjYjc5MTkzM2M2MTdjNCIsImlhdCI6MTcxODMwNzA0OX0.Zu59lYUC_Didpod4CeC9c7qqyGHHtJmevcLuminzfJI`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Yeni borç oluşturulurken hata oluştu:', error);
    throw error;
  }
};

// Ödeme planını getirmek için fonksiyon
export const getPaymentPlan = async (debtId) => {
  try {
    const response = await axios.get(`${BASE_URL}/finance/debt/${debtId}/payment-plan`, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI0MDE4YzVjYjc5MTkzM2M2MTdjNCIsImlhdCI6MTcxODMwNzA0OX0.Zu59lYUC_Didpod4CeC9c7qqyGHHtJmevcLuminzfJI`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Ödeme planı getirilirken hata oluştu:', error);
    throw error;
  }
};

// Borçları getirmek için fonksiyon
export const getDebts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/finance/debt`, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI0MDE4YzVjYjc5MTkzM2M2MTdjNCIsImlhdCI6MTcxODMwNzA0OX0.Zu59lYUC_Didpod4CeC9c7qqyGHHtJmevcLuminzfJI`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Borçlar getirilirken hata oluştu:', error);
    throw error;
  }
};

// Borç güncellemek için fonksiyon
export const updateDebt = async (debtId, updatedDebt) => {
  try {
    const response = await axios.put(`${BASE_URL}/finance/debt/${debtId}`, updatedDebt, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI0MDE4YzVjYjc5MTkzM2M2MTdjNCIsImlhdCI6MTcxODMwNzA0OX0.Zu59lYUC_Didpod4CeC9c7qqyGHHtJmevcLuminzfJI`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Borç güncellenirken hata oluştu:', error);
    throw error;
  }
};

// Borç silmek için fonksiyon
export const deleteDebt = async (debtId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/finance/debt/${debtId}`, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI0MDE4YzVjYjc5MTkzM2M2MTdjNCIsImlhdCI6MTcxODMwNzA0OX0.Zu59lYUC_Didpod4CeC9c7qqyGHHtJmevcLuminzfJI`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Borç silinirken hata oluştu:', error);
    throw error;
  }
};