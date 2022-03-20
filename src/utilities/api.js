import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const api = {
  getConfigFiles() {
    return axios.get(`${BASE_URL}/getConfigFiles`);
  },
  runSimulation(config) {
    return axios.post(`${BASE_URL}/runSimulation`, config);
  }
}

export default api;
