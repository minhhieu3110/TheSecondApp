import api from 'utils/api';
import {URL_API} from '../common';
import {put, takeLatest} from 'redux-saga/effects';
import actions, {_onFail, _onSuccess} from '@actions';
function* getListCategory(action) {
  const params = action.params;
  try {
    const res = yield api.get(URL_API.product.list_category, params);
    yield put({type: _onSuccess(action.type), data: res.data});
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* getListProduct(action) {
  const params = action.params;
  try {
    const res = yield api.get(URL_API.product.list, params);
    yield put({type: _onSuccess(action.type), data: res.data.data});
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
export default function* watchProductSagas() {
  yield takeLatest(actions.LIST_CATEGORY, getListCategory);
  yield takeLatest(actions.LIST_PRODUCT, getListProduct);
}
