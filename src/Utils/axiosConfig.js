import axios from 'axios';

// Create custom Axios instance with base URL
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export default instance;