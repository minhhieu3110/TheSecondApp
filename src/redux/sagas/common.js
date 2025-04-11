import {put, select} from 'redux-saga/effects';
export const URL_API = {
  user: {
    send_otp: 'user/send-otp',
    verify_otp: 'user/verify-otp',
    check_phone: 'user/check-phone',
    signup: 'user/signup',
    login: 'user/login',
  },
  service: {
    list: 'service/list',
  },
  promo: {
    list: 'promo/list',
  },
};
