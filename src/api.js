import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-translate.azharimm.site/translate'
});

export default api;
