import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';

const initialState = {
  data: null,
  isLoading: false,
};
export const getBanner = (...props) => {
  return reducerDefault(...props, actions.GET_BANNER);
};
export const getBannerSuggest = (...props) => {
  return reducerDefault(...props, actions.BANNER_SUGGESTION);
};
export const getVoucher = (...props) => {
  return reducerDefault(...props, actions.GET_VOUCHER);
};
export const getPromo = (...props) => {
  return reducerDefault(...props, actions.GET_LIST_PROMO);
};
export const detailPromo = (...props) => {
  return reducerDefault(...props, actions.DETAIL_PROMO);
};
export const getNews = (...props) => {
  return reducerDefault(...props, actions.GET_NEWS);
};
export const detailNew = (...props) => {
  return reducerDefault(...props, actions.DETAIL_NEW);
};
export const getSocial = (...props) => {
  return reducerDefault(...props, actions.SOCIAL);
};
export const getAbout = (...props) => {
  return reducerDefault(...props, actions.ABOUT);
};
export const sysoptions = (...props) => {
  return reducerDefault(...props, actions.SYSOPTIONS);
};
export const getDetailVoucher = (...props) => {
  return reducerDefault(...props, actions.DETAIL_VOUCHER);
};
export const getListExchange = (...props) => {
  return reducerDefault(...props, actions.EXCHANGE_POINT);
};
export const getDetailExchange = (...props) => {
  return reducerDefault(...props, actions.DETAIL_EXCHANGE_POINT);
};
export const redeemVoucher = (...props) => {
  return reducerDefault(...props, actions.REDEEM_VOUCHER);
};
