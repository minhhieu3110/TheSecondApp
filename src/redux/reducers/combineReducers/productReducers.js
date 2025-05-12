import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';

export const getListCategory = (...props) => {
  return reducerDefault(...props, actions.LIST_CATEGORY);
};
export const getListProduct = (...props) => {
  return reducerDefault(...props, actions.LIST_PRODUCT);
};
