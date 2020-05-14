import axios from 'axios';

const API_URL = 'https://bling.com.br/Api/v2';
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    ContentType: 'application/json',
  },
});
