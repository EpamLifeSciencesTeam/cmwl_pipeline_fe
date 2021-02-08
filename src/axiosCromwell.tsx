import axios from 'axios';

const axiosCromwell = axios.create({
  baseURL: 'http://localhost:3001/'
});

export default axiosCromwell;
