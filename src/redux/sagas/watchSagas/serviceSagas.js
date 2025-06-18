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
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getListOrder(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.service.list_order, params);
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
function* getListReception(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.service.list_order, params);
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
function* getListOrderDoing(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.service.list_order, params);
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
function* getListOrderComplete(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.service.list_order, params);
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
function* getListOrderCancel(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.service.list_order, params);
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
function* reOrder(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.service.reorder, body);
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
function* getDetailOrder(action) {
  const {orderId} = yield action.params;
  try {
    const res = yield api.get(`${URL_API.service.detail_oder}/${orderId}`);
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
function* getListReason(action) {
  try {
    const res = yield api.get(URL_API.service.list_reason);

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
function* cancelOrder(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.service.cancel_order, body);

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
function* getStatistical(action) {
  try {
    const res = yield api.get(URL_API.service.statistical);

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
function* cancelRepeat(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.service.cancel_repeat, body);

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
function* rechargeMethod(action) {
  try {
    const res = yield api.get(URL_API.service.recharge_method);

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
function* ratingService(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.service.rating_service, body);

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
export default function* watchServiceSagas() {
  yield takeLatest(actions.GET_LIST_SERVICE, getServices);
  yield takeLatest(actions.GET_SERVICE_SUB, getServiceSub);
  yield takeLatest(actions.GET_DETAIL_SERVICE_SUB, getDetailServiceSub);
  yield takeLatest(actions.GET_PAYMENT_METHOD, getPaymentMethod);
  yield takeLatest(actions.PRICE_CALCULATION, priceCalculation);
  yield takeLatest(actions.ORDER_SERVICE, orderService);
  yield takeLatest(actions.GET_LIST_ORDER, getListOrder);
  yield takeLatest(actions.GET_LIST__RECEPTION, getListReception);
  yield takeLatest(actions.GET_LIST_ORDER_DOING, getListOrderDoing);
  yield takeLatest(actions.GET_LIST_ORDER_COMPLETE, getListOrderComplete);
  yield takeLatest(actions.GET_LIST_ORDER_CANCEL, getListOrderCancel);
  yield takeLatest(actions.RE_ORDER, reOrder);
  yield takeLatest(actions.GET_DETAIL_ORDER, getDetailOrder);
  yield takeLatest(actions.GET_LIST_REASON, getListReason);
  yield takeLatest(actions.CANCEL_ORDER, cancelOrder);
  yield takeLatest(actions.GET_STATISTICAL, getStatistical);
  yield takeLatest(actions.CANCEL_REPEAT, cancelRepeat);
  yield takeLatest(actions.RECHARGE_METHOD, rechargeMethod);
  yield takeLatest(actions.RATING_SERVICE, ratingService);
}
