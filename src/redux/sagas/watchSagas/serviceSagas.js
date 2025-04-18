import {handleFormData} from 'utils/helper';
import api from 'utils/api';
import {URL_API} from '../common';
import actions, {_onFail, _onSuccess} from '@actions';
import {takeLatest, put, take} from 'redux-saga/effects';
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
function* getServiceSub(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.service.sub, params);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({
      type: _onFail(action.type),
    });
    action.onFail?.(error);
  }
}
function* getDetailServiceSub(action) {
  const {item_id} = action.params;
  try {
    const res = yield api.get(`${URL_API.service.sub}/${item_id}`);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({
      type: _onFail(action.type),
    });
    action.onFail?.(error);
  }
}
function* getPaymentMethod(action) {
  try {
    const res = yield api.get(URL_API.service.payment_method);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({
      type: _onFail(action.type),
    });
    action.onFail?.(error);
  }
}
function* priceCalculation(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.service.price_calculation, body);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({
      type: _onFail(action.type),
    });
    action.onFail?.(error);
  }
}
function* orderService(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.service.order, body);
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

export default function* watchServiceSagas() {
  yield takeLatest(actions.GET_LIST_SERVICE, getServices);
  yield takeLatest(actions.GET_SERVICE_SUB, getServiceSub);
  yield takeLatest(actions.GET_DETAIL_SERVICE_SUB, getDetailServiceSub);
  yield takeLatest(actions.GET_PAYMENT_METHOD, getPaymentMethod);
  yield takeLatest(actions.PRICE_CALCULATION, priceCalculation);
  yield takeLatest(actions.ORDER_SERVICE, orderService);
}
