import {combineReducers} from 'redux';
import * as userReducers from './combineReducers/userReducers';
import * as serviceReducers from './combineReducers/serviceReducers';
import * as otherReducers from './combineReducers/otherReducers';
import * as addressReducers from './combineReducers/addressReducers';
import * as helpReducers from './combineReducers/helpReducers';
const rootReducers = combineReducers({
  ...userReducers,
  ...serviceReducers,
  ...otherReducers,
  ...addressReducers,
  ...helpReducers,
});
export default rootReducers;
