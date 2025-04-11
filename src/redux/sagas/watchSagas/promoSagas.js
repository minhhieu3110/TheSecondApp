import api from 'utils/api';
import {URL_API} from '../common';
import {put, takeLatest} from 'redux-saga/effects';
import actions, {_onFail, _onSuccess} from '@actions';
function* getPromo(action) {
  try {
    const res = yield api.get(URL_API.promo.list);
    console.log(res.data);

    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
export default function* watchPromoSagas() {
  yield takeLatest(actions.GET_LIST_PROMO, getPromo);
}
