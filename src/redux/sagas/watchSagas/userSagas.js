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
function* verifyOTP(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.user.verify_otp, body);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* checkPhone(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.user.check_phone, body);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* signUp(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.user.signup, body);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* login(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.user.login, body);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
export default function* watchUserSagas() {
  yield takeLatest(actions.SEND_OTP, sendOTP);
  yield takeLatest(actions.VERIFY_OTP, verifyOTP);
  yield takeLatest(actions.CHECK_PHONE, checkPhone);
  yield takeLatest(actions.SIGN_UP, signUp);
  yield takeLatest(actions.SIGN_IN, login);
}
