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
function* getDetailVoucher(action) {
  const {id} = yield action.params;
  try {
    const res = yield api.get(`${URL_API.promotion.detail}/${id}`);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action?.onSuccess?.(res);
  } catch (error) {
    yield put({
      type: _onFail(action.type),
    });
    action?.onFail?.(error);
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
function* detailPromo(action) {
  const {item_id} = yield action.params;
  try {
    const res = yield api.get(`${URL_API.promo.detail}/${item_id}`);

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
function* detailNew(action) {
  const {item_id} = yield action.params;
  try {
    const res = yield api.get(`${URL_API.news.detail}/${item_id}`);

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
function* sysoptions(action) {
  try {
    const res = yield api.get(URL_API.sysoptions);
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
function* getListExchange(action) {
  try {
    const res = yield api.get(URL_API.promotion.exchange);
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
function* getDetailExchange(action) {
  const {id} = yield action.params;
  try {
    const res = yield api.get(`${URL_API.promotion.detail_exchange}/${id}`);
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
function* redeemVoucher(action) {
  const body = action.body;
  try {
    const res = yield api.post(URL_API.promotion.redeem_voucher, body);
    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({
      type: _onFail(action.type),
    });
    action.onFail?.('Số điểm của bạn không đủ');
  }
}

export default function* watchOtherSagas() {
  yield takeLatest(actions.GET_BANNER, getBanner);
  yield takeLatest(actions.GET_VOUCHER, getVoucher);
  yield takeLatest(actions.GET_LIST_PROMO, getPromo);
  yield takeLatest(actions.DETAIL_PROMO, detailPromo);
  yield takeLatest(actions.GET_NEWS, getNews);
  yield takeLatest(actions.DETAIL_NEW, detailNew);
  yield takeLatest(actions.SOCIAL, getSocial);
  yield takeLatest(actions.ABOUT, getAbout);
  yield takeLatest(actions.SYSOPTIONS, sysoptions);
  yield takeLatest(actions.DETAIL_VOUCHER, getDetailVoucher);
  yield takeLatest(actions.EXCHANGE_POINT, getListExchange);
  yield takeLatest(actions.DETAIL_EXCHANGE_POINT, getDetailExchange);
  yield takeLatest(actions.REDEEM_VOUCHER, redeemVoucher);
}
