import {handleFormData} from 'utils/helper';
import api from 'utils/api';
import {URL_API} from '../common';
import actions, {_onFail, _onSuccess} from '@actions';
import {takeLatest, put} from 'redux-saga/effects';
function* getServices(action) {
  try {
    const res = yield api.get(URL_API.service.list, {is_paginate: 0});
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
export default function* watchServiceSagas() {
  yield takeLatest(actions.GET_LIST_SERVICE, getServices);
}
