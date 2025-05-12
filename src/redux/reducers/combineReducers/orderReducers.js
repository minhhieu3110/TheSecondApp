import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';

export const getListStatus = (...props) => {
  return reducerDefault(...props, actions.LIST_STATUS);
};
