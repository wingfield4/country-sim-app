import axios from 'axios';

const BASE_URL = 'http://localhost:8080';
const SOCKET_URL = 'ws://localhost:8080/socket-connect';

const api = {
  getConfigFiles() {
    return axios.get(`${BASE_URL}/getConfigFiles`);
  },
  planAhead(config) {
    return axios.post(`${BASE_URL}/planAhead`, config);
  },
  startSimulation(config) {
    return axios.post(`${BASE_URL}/startSimulation`, config);
  },
  SOCKET_URL
}

export default api;
