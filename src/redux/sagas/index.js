import {all, fork} from 'redux-saga/effects';
import watchUserSagas from './watchSagas/userSagas';
import watchServiceSagas from './watchSagas/serviceSagas';
import watchPromoSagas from './watchSagas/promoSagas';

export default function* rootSaga() {
  yield all([
    fork(watchUserSagas),
    fork(watchServiceSagas),
    fork(watchPromoSagas),
  ]);
}
