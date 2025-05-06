import {handleFormData} from 'utils/helper';
import api from 'utils/api';
import {URL_API} from '../common';
import actions, {_onFail, _onSuccess} from '@actions';
import {takeLatest, put, select} from 'redux-saga/effects';
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
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
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
function* logoutUser(action) {
  const token = yield select(state => state.user.token);
  try {
    const res = yield api.post(URL_API.user.logout, {token: token});
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    yield put({type: actions.UNMOUNT_USER});
    action.onSuccess?.(res);
  } catch (error) {
    action.onFail?.(error.data.message);
    yield put({type: _onFail(actions.type)});
  }
}
function* deleteAccount(action) {
  const token = yield select(state => state.user.token);
  try {
    const res = yield api.post(URL_API.user.logout, {token: token});
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    yield put({type: actions.UNMOUNT_USER});
    action.onSuccess?.(res);
  } catch (error) {
    action.onFail?.(error.data.message);
    yield put({type: _onFail(actions.type)});
  }
}
function* updateUserInfo(action) {
  const body = yield action.body;
  try {
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
function* updateAvatar(action) {
  const body = yield action.body;
  try {
    const res = yield api.postFormData(URL_API.user.update_avatar, body);
    console.log(res.data);

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
function* getNotification(action) {
  try {
    const res = yield api.get(URL_API.user.list_notification);
    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* getDetailNotification(action) {
  const {item_id} = yield action.params;
  try {
    const res = yield api.get(`${URL_API.user.detail_notification}/${item_id}`);
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
function* getListEmployee(action) {
  try {
    const res = yield api.get(URL_API.user.list_employee);
    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* getDetailEmployee(action) {
  const {id} = yield action.params;
  try {
    const res = yield api.get(`${URL_API.user.list_employee}/${id}`);
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
function* favoriteEmployee(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.user.favorite_employee, body);
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
function* getFavoriteEmployee(action) {
  try {
    const res = yield api.get(URL_API.user.favorite_employee);
    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* blockEmployee(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.user.block_employee, body);
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
function* getBlockedEmployee(action) {
  try {
    const res = yield api.get(URL_API.user.block_employee);
    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* getRef(action) {
  try {
    const res = yield api.get(URL_API.user.ref);
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
function* recharge(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.user.recharge, body);
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
function* getListBank(action) {
  try {
    const res = yield api.get(URL_API.user.list_bank);
    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
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
  yield takeLatest(actions.LOGOUT, logoutUser);
  yield takeLatest(actions.UPDATE_USER_INFO, updateUserInfo);
  yield takeLatest(actions.FEEDBACK, sendFeedback);
  yield takeLatest(actions.INFO_RANK, getInfoRank);
  yield takeLatest(actions.LIST_RANK, getListRank);
  yield takeLatest(actions.GET_NOTIFICATION, getNotification);
  yield takeLatest(actions.GET_DETAIL_NOTIFICATION, getDetailNotification);
  yield takeLatest(actions.GET_LIST_EMPLOYEE, getListEmployee);
  yield takeLatest(actions.GET_DETAIL_EMPLOYEE, getDetailEmployee);
  yield takeLatest(actions.FAVORITE_EMPLOYEE, favoriteEmployee);
  yield takeLatest(actions.GET_FAVORITE_EMPLOYEE, getFavoriteEmployee);
  yield takeLatest(actions.BLOCK_EMPLOYEE, blockEmployee);
  yield takeLatest(actions.GET_BLOCK_EMPLOYEE, getBlockedEmployee);
  yield takeLatest(actions.GET_REF, getRef);
  yield takeLatest(actions.RECHARGE, recharge);
  yield takeLatest(actions.GET_LIST_BANK, getListBank);
  yield takeLatest(actions.UPDATE_AVATAR, updateAvatar);
  yield takeLatest(actions.DELETE_ACCOUNT, deleteAccount);
}
