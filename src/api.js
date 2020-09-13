import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-translate.azharimm.tk/'
});

export default api;