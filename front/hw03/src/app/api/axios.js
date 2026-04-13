import axios from 'axios';
const api = axios.create({
  baseURL: `http://127.0.0.1:80/api`,
  // baseURL: `http://192.168.20.213:80/api`,
  timeout: 5000,
});

export default api;
