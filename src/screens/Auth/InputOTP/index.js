import actions from '@actions';
import {image} from '@assets';
import {Block, Image, StatusBar, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useDispatch, useSelector} from 'react-redux';
import {OtpInput} from 'react-native-otp-entry';
import {useEffect, useRef, useState} from 'react';
import Toast from 'react-native-toast-message';
import {getDeviceId, getDeviceName} from 'react-native-device-info';
import {authRoot, bottomRoot} from 'navigation/navigationRef';
import router from '@router';
export default function InputOTP({route}) {
  let clearOTP = useRef();
  const dispatch = useDispatch();
  const {phone, type} = route?.params;
  const [timer, setTimer] = useState(0);
  const [disableResend, setDisableResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      setDisableResend(false);
    }
  }, [timer]);
  const resend = () => {
    setTimer(30);
    setDisableResend(true);
    dispatch({
      type: actions.SEND_OTP,
      body: {phone: phone, type: type},
    });
    clearOTP.clear();
  };
  const verifyOTP = otpCode => {
    dispatch({
      type: actions.VERIFY_OTP,
      body: {phone: phone, otp_code: otpCode},
      onSuccess: () => {
        dispatch({
          type: actions.CHECK_PHONE,
          body: {phone: phone},
          onSuccess: () => {
            dispatch({
              type: actions.SIGN_IN,
              body: {
                username: phone,
                password: otpCode,
                device_name: getDeviceName(),
                device_token: getDeviceId(),
              },
              onSuccess: () => {
                bottomRoot.navigate(router.HOME_SCREEN);
              },
            });
          },
          onFail: () => {
            authRoot.navigate(router.INPUT_INFORMATION, {
              data: {otpCode, phone},
            });
          },
        });
      },
      onFail(e) {
        Toast.show({
          type: 'error',
          text1: 'Mã OTP không tồn tại!',
          text2: 'Vui lòng kiểm tra lại',
        });
      },
    });
  };
  const otp = useSelector(state => state.sendOTP?.data?.otp_code || '');
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <Image
        source={image.image_san}
        width={width}
        height={328}
        resizeMode="cover"
      />
      <Block
        marginTop={-39}
        marginHorizontal={12}
        backgroundColor={COLORS.white}
        radius={8}
        paddingBottom={30}>
        <Block marginTop={18} marginHorizontal={12}>
          <Text fontSize={18} semiBold color={COLORS.red4}>
            Xác nhận mã OTP {otp}
          </Text>
          <Text
            marginTop={10}
            fontSize={15}
            regular
            color={COLORS.black2}
            numberOfLines={2}>
            Một mã xác thực gồm 6 số đã được gửi đến số điện thoại {phone}
          </Text>
          <Text fontSize={16} light color={COLORS.black2} marginTop={54} center>
            Nhập mã để tiếp tục
          </Text>
          <Block marginTop={18}>
            <OtpInput
              onFilled={otp => verifyOTP(otp)}
              ref={ref => (clearOTP = ref)}
              placeholder="*"
              theme={{
                pinCodeContainerStyle: {
                  width: (width - 128) / 6,
                  height: 50,
                  borderRadius: 5,
                  backgroundColor: COLORS.blueGray,
                  borderWidth: 0,
                },
              }}
            />
          </Block>
          <Text
            marginTop={14.9}
            fontSize={16}
            regular
            color={COLORS.black2}
            center>
            Bạn không nhận được mã?{' '}
            <Text onPress={resend} color={COLORS.red4} underline>
              Gửi lại
            </Text>{' '}
            {disableResend && `(${timer}s)`}
          </Text>
        </Block>
      </Block>
    </Block>
  );
}
