import {handleFormData} from 'utils/helper';
import api from 'utils/api';
import {URL_API} from '../common';
import actions, {_onFail, _onSuccess} from '@actions';
import {takeLatest, put} from 'redux-saga/effects';
function* sendOTP(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.user.send_otp, body);
    console.log(res.data.otp_code);

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
      data: res,
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
function* getUserInfo(action) {
  try {
    const res = yield api.get(URL_API.user.info);
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
      type: actions.SAVE_USER_INFO,
      token: res.data.access_token,
    });
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
function* updateUserInfo(action) {
  try {
    const body = action.body;
    const res = yield api.patch(URL_API.user.update, body);
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
function* sendFeedback(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.user.feedback, body);
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
function* getInfoRank(action) {
  try {
    const res = yield api.get(URL_API.user.info_rank);
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
function* getListRank(action) {
  try {
    const res = yield api.get(URL_API.user.list_rank);
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
  yield takeLatest(actions.GET_USER_INFO, getUserInfo);
  yield takeLatest(actions.SIGN_IN, login);
  yield takeLatest(actions.UPDATE_USER_INFO, updateUserInfo);
  yield takeLatest(actions.FEEDBACK, sendFeedback);
  yield takeLatest(actions.INFO_RANK, getInfoRank);
  yield takeLatest(actions.LIST_RANK, getListRank);
}
