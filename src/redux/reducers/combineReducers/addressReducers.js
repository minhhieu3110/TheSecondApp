import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';

export const getAddressSave = (...props) => {
  return reducerDefault(...props, actions.GET_ADDRESS_SAVE);
};
export const getProvince = (...props) => {
  return reducerDefault(...props, actions.GET_PROVINCE);
};
export const getDistrict = (...props) => {
  return reducerDefault(...props, actions.GET_DISTRICT);
};
export const getWard = (...props) => {
  return reducerDefault(...props, actions.GET_WARD);
};
export const addAddressBook = (...props) => {
  return reducerDefault(...props, actions.ADD_ADDRESS_BOOK);
};
export const deleteAddress = (...props) => {
  return reducerDefault(...props, actions.DELETE_ADDRESS);
};
export const updateAddress = (...props) => {
  return reducerDefault(...props, actions.UPDATE_ADDRESS);
};
