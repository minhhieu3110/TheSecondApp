import {all, fork} from 'redux-saga/effects';
import watchUserSagas from './watchSagas/userSagas';
import watchServiceSagas from './watchSagas/serviceSagas';
import watchOtherSagas from './watchSagas/otherSagas';
import watchAddressSagas from './watchSagas/addressSagas';
import watchHelpSagas from './watchSagas/helpSagas';
import watchChatSagas from './watchSagas/chatSagas';
import watchOrderSagas from './watchSagas/orderSagas';
import watchProductSagas from './watchSagas/productSagas';

export default function* rootSaga() {
  yield all([
    fork(watchUserSagas),
    fork(watchServiceSagas),
    fork(watchOtherSagas),
    fork(watchAddressSagas),
    fork(watchHelpSagas),
    fork(watchChatSagas),
    fork(watchOrderSagas),
    fork(watchProductSagas),
  ]);
}
