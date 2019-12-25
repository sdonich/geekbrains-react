import api from '../../api';
import * as types from '../types/actionTypes';

export const getChat = async (id) => {
  const data = await api.getChat(id);

  return {
    type: types.GET_CHAT,
    payload: data
  }
}

export const sendMessage = async (message, id) => {
  const data = await api.sendMessage(message, id);

  return {
    type: types.SEND_MESSAGE,
    payload: data
  }
}