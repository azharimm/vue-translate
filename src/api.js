import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-translate.azharimm.tk/translate'
});

export default api;