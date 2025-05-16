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
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.product.list, params);
    yield put({type: _onSuccess(action.type), data: res.data.data});
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* getListProductDiscount(action) {
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
function* getListProductSuggestion(action) {
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
function* getDetailProduct(action) {
  const {item_id} = yield action.params;
  try {
    const res = yield api.get(
      `${URL_API.product.detail}/${item_id}?is_related=1`,
    );
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
function* listRating(action) {
  const {item_id} = yield action.params;
  try {
    const res = yield api.get(`${URL_API.product.list_rating}/${item_id}`);
    console.log('stats', res.data.star_stats);

    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
      total: res.data.total,
      star_stats: res.data.star_stats,
      average: res.data.average,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* reportProduct(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.product.report, body);
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
export default function* watchProductSagas() {
  yield takeLatest(actions.LIST_CATEGORY, getListCategory);
  yield takeLatest(actions.LIST_PRODUCT, getListProduct);
  yield takeLatest(actions.LIST_PRODUCT_DISCOUNT, getListProductDiscount);
  yield takeLatest(actions.LIST_PRODUCT_SUGGESTION, getListProductSuggestion);
  yield takeLatest(actions.DETAIL_PRODUCT, getDetailProduct);
  yield takeLatest(actions.RATING, listRating);
  yield takeLatest(actions.REPORT_PRODUCT, reportProduct);
}
