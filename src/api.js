import axios from "axios";

const api = axios.create({
  baseURL: "https://api-translate.azharimm.web.id/translate",
});

export default api;
