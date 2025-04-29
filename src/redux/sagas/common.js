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
    logout: 'user/logout',
    address_book: 'user/get-addressbook',
    add_address_book: 'user/add-addressbook',
    update: 'user/update',
    feedback: 'user/feedback',
    info_rank: 'user/info-rank',
    list_rank: 'user/list-ranks',
    list_notification: 'user/list-notification',
    detail_notification: 'user/detail-notification',
    list_employee: 'user/list-employee',
    favorite_employee: 'user/favorite-employee',
    block_employee: 'user/blocked-employee',
    ref: 'user/link-ref',
    recharge: 'user/recharge',
    list_bank: 'user/list-bank',
    update_avatar: 'user/update-avatar',
  },
  promotion: {
    list: 'promotion/list',
    detail: 'promotion/detail',
    exchange: 'promotion/list-exchange',
    detail_exchange: 'promotion/detail-exchange',
    redeem_voucher: 'promotion/redeem-voucher',
  },
  banner: 'banner',
  service: {
    list: 'service/list',
    sub: 'service/sub',
    payment_method: 'service/payment-method',
    price_calculation: 'service/price-calculation',
    order: 'service/order',
    list_order: 'service/list-order',
    reorder: 'service/reorder',
    detail_oder: 'service/detail-order',
    list_reason: 'service/list-reason',
    cancel_order: 'service/cancel-order',
    statistical: 'service/statistical',
    cancel_repeat: 'service/cancel-repeat',
  },
  promo: {
    list: 'promo/list',
  },
  news: {
    list: 'news/list',
  },
  social: 'socical',
  about: 'about',
  get_province: 'get-province',
  get_district: 'get-district',
  get_ward: 'get-ward',
  sysoptions: 'sysoptions',
  page: {
    help: 'page/detail',
  },
  faq: {
    list: 'faq/list',
  },
};
