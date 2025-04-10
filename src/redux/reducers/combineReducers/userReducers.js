import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';

const initialState = {
  data: null,
  token: null,
  isLoading: false,
};
export const signUpUser = (...props) => {
  return reducerDefault(...props, actions.SIGN_UP);
};
export const signInUser = (...props) => {
  return reducerDefault(...props, actions.SIGN_IN);
};
export const sendOTP = (...props) => {
  return reducerDefault(...props, actions.SEND_OTP);
};
