import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';

export const getListStatus = (...props) => {
  return reducerDefault(...props, actions.LIST_STATUS);
};
export const addCart = (...props) => {
  return reducerDefault(...props, actions.ADD_CART);
};
export const getCart = (...props) => {
  return reducerDefault(...props, actions.GET_CART);
};
export const updateCart = (...props) => {
  return reducerDefault(...props, actions.UPDATE_CART);
};
export const deleteCart = (...props) => {
  return reducerDefault(...props, actions.DELETE_CART);
};
export const calculationPriceProduct = (...props) => {
  return reducerDefault(...props, actions.CALCULATION_PRICE_PRODUCT);
};
export const checkout = (...props) => {
  return reducerDefault(...props, actions.CHECKOUT);
};
export const listOrder = (...props) => {
  return reducerDefault(...props, actions.LIST_ORDER);
};
export const newOrder = (...props) => {
  return reducerDefault(...props, actions.NEW_ORDER);
};
export const confirmOrder = (...props) => {
  return reducerDefault(...props, actions.CONFIRM_ORDER);
};
export const shippingOrder = (...props) => {
  return reducerDefault(...props, actions.SHIPPING_ORDER);
};
export const completeShipOrder = (...props) => {
  return reducerDefault(...props, actions.COMPLETE_SHIP_ORDER);
};
export const cancelOrderPro = (...props) => {
  return reducerDefault(...props, actions.CANCEL_ORDER_PRO);
};

export const detailOrder = (...props) => {
  return reducerDefault(...props, actions.DETAIL_ORDER);
};
export const cancelOrder = (...props) => {
  return reducerDefault(...props, actions.CANCEL_ORDER);
};
export const rating = (...props) => {
  return reducerDefault(...props, actions.EVALUATE_ORDER);
};
