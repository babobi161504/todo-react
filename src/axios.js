// src/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/tasks', // Đảm bảo đúng URL của backend
});

export default axiosInstance;
