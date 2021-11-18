import axios from 'axios';

const api = axios.create({
  baseURL: 'https://54.233.98.54:4000'
})

export default api;