import api from 'utils/api';
import {URL_API} from '../common';
import {put, takeLatest} from 'redux-saga/effects';
import actions, {_onFail, _onSuccess} from '@actions';
function* getBanner(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.banner, params);

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
function* getVoucher(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.promotion.list, params);
    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getPromo(action) {
  try {
    const res = yield api.get(URL_API.promo.list);

    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getNews(action) {
  try {
    const res = yield api.get(URL_API.news.list);
    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
    });
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getSocial(action) {
  try {
    const res = yield api.get(URL_API.social);
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
function* getAbout(action) {
  try {
    const res = yield api.get(URL_API.about);
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
export default function* watchOtherSagas() {
  yield takeLatest(actions.GET_BANNER, getBanner);
  yield takeLatest(actions.GET_VOUCHER, getVoucher);
  yield takeLatest(actions.GET_LIST_PROMO, getPromo);
  yield takeLatest(actions.GET_NEWS, getNews);
  yield takeLatest(actions.SOCIAL, getSocial);
  yield takeLatest(actions.ABOUT, getAbout);
}
