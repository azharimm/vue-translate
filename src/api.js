import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-translate.azharimm.site/'
});

export default api;
