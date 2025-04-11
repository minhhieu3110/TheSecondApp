import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';

const initialState = {
  data: null,
  isLoading: false,
};

export const getPromo = (...props) => {
  return reducerDefault(...props, actions.GET_LIST_PROMO);
};
