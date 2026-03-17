// utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.cloudqlobe.com',  //'https://api.cloudqlobe.com/'
  withCredentials: true, // If using cookies for authentication
});

// ✅ Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    const token = response.headers['x-auth-token'];
    const tokenName = response.headers['x-auth-token-name'];

    if (token && tokenName) {
      sessionStorage.setItem(tokenName, token); // ✅ Store token using dynamic name
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const customerToken = sessionStorage.getItem('authToken');
    const vendorToken = sessionStorage.getItem('Ven-Au-To');


    // ✅ Attach token based on priority (or customize per API)
    if (customerToken) {
      config.headers['Authorization'] = `Bearer ${customerToken}`;
    }else if (vendorToken) {
      config.headers['Authorization'] = `Bearer ${vendorToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
