import actions from '@actions';
import {reducerDefault} from 'redux/common/reducers';

export const getHelp = (...props) => {
  return reducerDefault(...props, actions.GET_HELP);
};
export const getFAQ = (...props) => {
  return reducerDefault(...props, actions.GET_FAQ);
};
