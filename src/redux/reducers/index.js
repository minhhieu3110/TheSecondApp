import {combineReducers} from 'redux';
import * as userReducers from './combineReducers/userReducers';
const rootReducers = combineReducers({
  ...userReducers,
});
export default rootReducers;
