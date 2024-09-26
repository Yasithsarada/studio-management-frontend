import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://65.2.129.99/api/', // Replace this with your base URL
  timeout: 50000, // Optional timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
   
  },
});

export default axiosInstance;