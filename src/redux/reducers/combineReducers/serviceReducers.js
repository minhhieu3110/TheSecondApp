import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';

const initialState = {
  data: null,
  isLoading: false,
};

export const getServices = (...props) => {
  return reducerDefault(...props, actions.GET_LIST_SERVICE);
};
export const getServiceSub = (...props) => {
  return reducerDefault(...props, actions.GET_SERVICE_SUB);
};
export const getDetailServiceSub = (...props) => {
  return reducerDefault(...props, actions.GET_DETAIL_SERVICE_SUB);
};
export const getPaymentMethod = (...props) => {
  return reducerDefault(...props, actions.GET_PAYMENT_METHOD);
};
export const priceCalculation = (...props) => {
  return reducerDefault(...props, actions.PRICE_CALCULATION);
};
export const orderService = (...props) => {
  return reducerDefault(...props, actions.ORDER_SERVICE);
};
