import {put, select} from 'redux-saga/effects';
import {_onFail, _onSuccess} from '@redux/actions';
import api from 'utils/api';
export function* generalGet(config, action) {
  try {
    const defaultParams = config.defaultParams || {};
    if (config.isNeedUser) {
      const token = yield select(state => state.user.token);
      defaultParams.user = token;
    }
    const res = yield api.get(config.url, {
      ...defaultParams,
      ...(action.params || {}),
    });
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res.data);
  } catch (error) {
    action.onFail?.(error.data);
    yield put({type: _onFail(action.type)});
  }
}

export function* generalGetPaging(config, action) {
  try {
    const defaultParams = config.defaultParams || {};
    if (config.isNeedUser) {
      const token = yield select(state => state.user.token);
      defaultParams.user = token;
    }
    const res = yield api.get(config.url, {
      ...defaultParams,
      ...(action.params || {}),
    });
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
      page: res.page,
      totalPage: res.total_page,
      numshow: res?.numshow,
      total: res?.total,
    });
    action.onSuccess?.(res.data);
  } catch (error) {
    action.onFail?.(error.data);
    yield put({type: _onFail(action.type)});
  }
}

export const URL_API = {
  uploads: 'http://san.baoan.app24h.net:81/uploads',
  user: {
    send_otp: 'user/send-otp',
    verify_otp: 'user/verify-otp',
    check_phone: 'user/check-phone',
    signup: 'user/signup',
    info: 'user/info',
    login: 'user/login',
    address_book: 'user/get-addressbook',
    add_address_book: 'user/add-addressbook',
    update: 'user/update',
    feedback: 'user/feedback',
    info_rank: 'user/info-rank',
    list_rank: 'user/list-ranks',
  },
  promotion: {
    list: 'promotion/list',
  },
  banner: 'banner',
  service: {
    list: 'service/list',
    sub: 'service/sub',
    payment_method: 'service/payment-method',
    price_calculation: 'service/price-calculation',
    order: 'service/order',
  },
  promo: {
    list: 'promo/list',
  },
  news: {
    list: 'news/list',
  },
  get_province: 'get-province',
  get_district: 'get-district',
  get_ward: 'get-ward',
  page: {
    help: 'page/detail',
  },
  faq: {
    list: 'faq/list',
  },
};
