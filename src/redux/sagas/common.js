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
  uploads: 'https:san.thietkewebsite.info.vn/uploads',
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
    get_bankcard: 'user/get-bankcard',
    add_bankcard: 'user/add-bankcard',
    delete_bankcard: 'user/delete-bankcard',
    update_avatar: 'user/update-avatar',
    delete: 'user/delete',
    delete_address: 'user/delete-addressbook',
    update_address: 'user/update-addressbook',
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
    recharge_method: 'service/recharge-method',
  },
  promo: {
    list: 'promo/list',
    detail: 'promo/detail',
  },
  news: {
    list: 'news/list',
    detail: 'news/detail',
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
  chat: {
    history: 'chat/history',
    room: 'chat/room',
    send: 'chat/send',
  },
  order: {
    list_status: 'order/list-status',
    cart: 'order/cart',
    checkout: 'order/checkout',
    list: 'order/list',
    cancel_order: 'order/cancel-order',
    rating: 'order/rating',
  },
  product: {
    list_category: 'product/list-category',
    list: 'product/list',
    detail: 'product/detail',
    list_rating: 'product/list-rating',
    report: 'product/report',
  },
};
