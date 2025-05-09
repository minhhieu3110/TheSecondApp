import {put, select, takeLatest} from 'redux-saga/effects';
import api from 'utils/api';
import {URL_API} from '../common';
import actions, {_onFail, _onSuccess} from '@actions';
function* getAddressSave(action) {
  const token = yield select(state => state.user.token);
  try {
    const res = yield api.get(URL_API.user.address_book);

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
function* getProvince(action) {
  try {
    const res = yield api.get(URL_API.get_province);
    yield put({
      type: _onSuccess(action.type),
      data: res?.data.map(item => ({
        code: item.code,
        value: item.title,
      })),
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* getDistrict(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.get_district, params);
    yield put({
      type: _onSuccess(action.type),
      data: res?.data.map(item => ({
        code: item.code,
        value: item.title,
      })),
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* getWard(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.get_ward, params);
    yield put({
      type: _onSuccess(action.type),
      data: res?.data.map(item => ({
        code: item.code,
        value: item.title,
      })),
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* addAddressBook(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.user.add_address_book, body);
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
function* deleteAddress(action) {
  const params = yield action.params;

  try {
    const res = yield api.delete(URL_API.user.delete_address, params);

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
function* updateAddress(action) {
  const body = yield action.body;
  try {
    const res = yield api.patch(URL_API.user.update_address, body);
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
export default function* watchAddressSagas() {
  yield takeLatest(actions.GET_ADDRESS_SAVE, getAddressSave);
  yield takeLatest(actions.GET_PROVINCE, getProvince);
  yield takeLatest(actions.GET_DISTRICT, getDistrict);
  yield takeLatest(actions.GET_WARD, getWard);
  yield takeLatest(actions.ADD_ADDRESS_BOOK, addAddressBook);
  yield takeLatest(actions.DELETE_ADDRESS, deleteAddress);
  yield takeLatest(actions.UPDATE_ADDRESS, updateAddress);
}
