export const _onSuccess = action => action + '_SUCCESS';
export const _onFail = action => action + '_FAIL';
export const _onUnMount = action => action + '_UNMOUNT';
export default {
  DEVICE_NAME: 'DEVICE_NAME',
  DEVICE_TOKEN: 'DEVICE_TOKEN',
  //user
  SEND_OTP: 'SEND_OTP',
  VERIFY_OTP: 'VERIFY_OTP',
  CHECK_PHONE: 'CHECK_PHONE',
  SIGN_UP: 'SIGN_UP',
  SIGN_IN: 'SIGN_IN',
  //service
  GET_LIST_SERVICE: 'GET_LIST_SERVICE',

  //promo
  GET_LIST_PROMO: 'GET_LIST_PROMO',
};
