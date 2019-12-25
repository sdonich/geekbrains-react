import * as types from '../types/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_CHAT:
      return action.payload;
    
    case types.SEND_MESSAGE:
      return action.payload;
  
    default:
      return state;
  }
}