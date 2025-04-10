import {handleFormData} from 'utils/helper';
import api from 'utils/api';
import {URL_API} from '../common';
import actions, {_onFail, _onSuccess} from '@actions';
import {takeLatest, put} from 'redux-saga/effects';
function* sendOTP(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.user.send_otp, body);

    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}

export default function* watchUserSagas() {
  yield takeLatest(actions.SEND_OTP, sendOTP);
}
