import api from 'utils/api';
import {URL_API} from '../common';
import {put, takeLatest} from 'redux-saga/effects';
import actions, {_onFail, _onSuccess} from '@actions';
function* getListStatus(action) {
  try {
    const res = yield api.get(URL_API.order.list_status);
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
function* addCart(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.order.cart, body);
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
function* getCart(action) {
  try {
    const res = yield api.get(URL_API.order.cart);
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

function* deleteCart(action) {
  const {id} = yield action.params;
  try {
    const res = yield api.delete(`${URL_API.order.cart}/${id}`);
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
function* updateCart(action) {
  const {id} = yield action.params;
  const body = yield action.body;
  try {
    const res = yield api.put(`${URL_API.order.cart}/${id}`, body);
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
function* calculationPriceProduct(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.order.cart, params);
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
function* checkout(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.order.checkout, body);
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
function* listOrder(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.order.list, params);
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
function* newOrder(action) {
  try {
    const res = yield api.get(URL_API.order.list, {is_status: 19});
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
function* confirmOrder(action) {
  try {
    const res = yield api.get(URL_API.order.list, {is_status: 41});
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
function* shippingOrder(action) {
  try {
    const res = yield api.get(URL_API.order.list, {is_status: 23});
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
function* completeShipOrder(action) {
  try {
    const res = yield api.get(URL_API.order.list, {is_status: 25});
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
function* cancelOrderPro(action) {
  try {
    const res = yield api.get(URL_API.order.list, {is_status: 17});
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
function* detailOrder(action) {
  const {id} = yield action.params;
  try {
    const res = yield api.get(`${URL_API.order.list}/${id}`);
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
function* cancelOrder(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.order.cancel_order, body);
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
function* rating(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.order.rating, body);
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
export default function* watchOrderSagas() {
  yield takeLatest(actions.LIST_STATUS, getListStatus);
  yield takeLatest(actions.ADD_CART, addCart);
  yield takeLatest(actions.GET_CART, getCart);
  yield takeLatest(actions.DELETE_CART, deleteCart);
  yield takeLatest(actions.UPDATE_CART, updateCart);
  yield takeLatest(actions.CALCULATION_PRICE_PRODUCT, calculationPriceProduct);
  yield takeLatest(actions.CHECKOUT, checkout);
  yield takeLatest(actions.LIST_ORDER, listOrder);
  yield takeLatest(actions.NEW_ORDER, newOrder);
  yield takeLatest(actions.CONFIRM_ORDER, confirmOrder);
  yield takeLatest(actions.SHIPPING_ORDER, shippingOrder);
  yield takeLatest(actions.COMPLETE_SHIP_ORDER, completeShipOrder);
  yield takeLatest(actions.CANCEL_ORDER_PRO, cancelOrderPro);
  yield takeLatest(actions.DETAIL_ORDER, detailOrder);
  yield takeLatest(actions.CANCEL_ORDER, cancelOrder);
  yield takeLatest(actions.EVALUATE_ORDER, rating);
}
