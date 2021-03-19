import axios from 'axios'

const api = axios.create({
    baseURL: 'https://amm-api-translate.herokuapp.com/translate'
});

export default api;