export const _onSuccess = action => action + '_SUCCESS';
export const _onFail = action => action + '_FAIL';
export const _onUnMount = action => action + '_UNMOUNT';
export default {
  DEVICE_NAME: 'DEVICE_NAME',
  DEVICE_TOKEN: 'DEVICE_TOKEN',
  //user
  SEND_OTP: 'SEND_OTP',
  SIGN_UP: 'SIGN_UP',
  SIGN_IN: 'SIGN_IN',
};
