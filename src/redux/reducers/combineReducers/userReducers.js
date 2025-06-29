import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';

const initialState = {
  data: null,
  token: null,
  isLoading: false,
};

export const sendOTP = (...props) => {
  return reducerDefault(...props, actions.SEND_OTP);
};
export const verifyOTP = (...props) => {
  return reducerDefault(...props, actions.VERIFY_OTP);
};
export const checkPhone = (...props) => {
  return reducerDefault(...props, actions.CHECK_PHONE);
};
export const signUpUser = (...props) => {
  return reducerDefault(...props, actions.SIGN_UP);
};
export const signInUser = (...props) => {
  return reducerDefault(...props, actions.SIGN_IN);
};
export const logoutUser = (...props) => {
  return reducerDefault(...props, actions.LOGOUT);
};
export const getUserInfo = (...props) => {
  return reducerDefault(...props, actions.GET_USER_INFO);
};
export const updateUserInfo = (...props) => {
  return reducerDefault(...props, actions.UPDATE_USER_INFO);
};
export const user = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_USER_INFO:
      return {...state, token: action.token};
    case actions.UNMOUNT_USER:
      return initialState;
    default:
      return state;
  }
};
export const sendFeedback = (...props) => {
  return reducerDefault(...props, actions.FEEDBACK);
};
export const getFeedback = (...props) => {
  return reducerDefault(...props, actions.GET_FEEDBACK);
};
export const getInfoRank = (...props) => {
  return reducerDefault(...props, actions.INFO_RANK);
};
export const getListRank = (...props) => {
  return reducerDefault(...props, actions.LIST_RANK);
};
export const getNotification = (...props) => {
  return reducerDefault(...props, actions.GET_NOTIFICATION);
};
export const getDetailNotification = (...props) => {
  return reducerDefault(...props, actions.GET_DETAIL_NOTIFICATION);
};
export const getListEmployee = (...props) => {
  return reducerDefault(...props, actions.GET_LIST_EMPLOYEE);
};
export const getDetailEmployee = (...props) => {
  return reducerDefault(...props, actions.GET_DETAIL_EMPLOYEE);
};
export const favoriteEmployee = (...props) => {
  return reducerDefault(...props, actions.FAVORITE_EMPLOYEE);
};
export const getFavoriteEmployee = (...props) => {
  return reducerDefault(...props, actions.GET_FAVORITE_EMPLOYEE);
};
export const blockEmployee = (...props) => {
  return reducerDefault(...props, actions.BLOCK_EMPLOYEE);
};
export const getBlockedEmployee = (...props) => {
  return reducerDefault(...props, actions.GET_BLOCK_EMPLOYEE);
};
export const getRef = (...props) => {
  return reducerDefault(...props, actions.GET_REF);
};
export const recharge = (...props) => {
  return reducerDefault(...props, actions.RECHARGE);
};
export const updateBill = (...props) => {
  return reducerDefault(...props, actions.UPDATE_BILL);
};
export const getListBank = (...props) => {
  return reducerDefault(...props, actions.GET_LIST_BANK);
};
export const getBankCard = (...props) => {
  return reducerDefault(...props, actions.GET_BANK_CARD);
};
export const addBank = (...props) => {
  return reducerDefault(...props, actions.ADD_BANK);
};
export const deleteBank = (...props) => {
  return reducerDefault(...props, actions.DELETE_BANK);
};
export const updateAvatar = (...props) => {
  return reducerDefault(...props, actions.UPDATE_AVATAR);
};
export const deleteAccount = (...props) => {
  return reducerDefault(...props, actions.DELETE_ACCOUNT);
};
export const walletLog = (...props) => {
  return reducerDefault(...props, actions.WALLET_LOG);
};
export const pointLog = (...props) => {
  return reducerDefault(...props, actions.POINT_LOG);
};
