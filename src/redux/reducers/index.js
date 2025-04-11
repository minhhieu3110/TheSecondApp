import {combineReducers} from 'redux';
import * as userReducers from './combineReducers/userReducers';
import * as serviceReducers from './combineReducers/serviceReducers';
import * as promoReducers from './combineReducers/promoReducers';
const rootReducers = combineReducers({
  ...userReducers,
  ...serviceReducers,
  ...promoReducers,
});
export default rootReducers;
