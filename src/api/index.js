import axios from 'axios';

const fetchApi = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 0
});

const getChat = async (id) => {
  const response = await fetchApi.get(`chat/${id}`);

  return response.data;
}

const sendMessage = async (message, id) => {
  const response = await fetchApi.post(`chat/${id}`, {message});

  return response.data;
}

const api = {
  getChat,
  sendMessage
}

export default api;