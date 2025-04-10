import {all, fork} from 'redux-saga/effects';
import watchUserSagas from './watchSagas/userSagas';

export default function* rootSage() {
  yield all([fork(watchUserSagas)]);
}
