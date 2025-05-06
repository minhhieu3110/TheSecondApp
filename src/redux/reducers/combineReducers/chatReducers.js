import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';

const initialState = {
  data: null,
  isLoading: false,
};
export const historyChat = (...props) => {
  return reducerDefault(...props, actions.HISTORY_CHAT);
};
export const room = (...props) => {
  return reducerDefault(...props, actions.ROOM);
};
export const sendMessage = (...props) => {
  return reducerDefault(...props, actions.SEND_MESSAGE);
};
