import actions, {_onFail, _onSuccess} from '@actions';
import {reducerDefault} from 'redux/common/reducers';
const initialState = {
  data: null,
  isLoading: false,
};
export const getListCategory = (...props) => {
  return reducerDefault(...props, actions.LIST_CATEGORY);
};
export const getListProduct = (...props) => {
  return reducerDefault(...props, actions.LIST_PRODUCT);
};
export const getListProductDiscount = (...props) => {
  return reducerDefault(...props, actions.LIST_PRODUCT_DISCOUNT);
};
export const getListProductSuggestion = (...props) => {
  return reducerDefault(...props, actions.LIST_PRODUCT_SUGGESTION);
};
export const detailProduct = (...props) => {
  return reducerDefault(...props, actions.DETAIL_PRODUCT);
};
// export const listRating = (...props) => {
//   return reducerDefault(...props, actions.RATING);
// };
export const listRating = (state = initialState, action) => {
  switch (action.type) {
    case _onSuccess(actions.RATING):
      return {
        ...state,
        data: action.data,
        total: action.total,
        star_stats: action.star_stats,
        average: action.average,
        isLoading: false,
      };
    case _onFail(actions.RATING):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export const reportProduct = (...props) => {
  return reducerDefault(...props, actions.REPORT_PRODUCT);
};
