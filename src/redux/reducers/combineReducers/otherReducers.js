import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';

const initialState = {
  data: null,
  isLoading: false,
};
export const getBanner = (...props) => {
  return reducerDefault(...props, actions.GET_BANNER);
};
export const getVoucher = (...props) => {
  return reducerDefault(...props, actions.GET_VOUCHER);
};
export const getPromo = (...props) => {
  return reducerDefault(...props, actions.GET_LIST_PROMO);
};
export const getNews = (...props) => {
  return reducerDefault(...props, actions.GET_NEWS);
};
