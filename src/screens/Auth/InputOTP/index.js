import actions from '@actions';
import {image} from '@assets';
import {Block, Image, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useDispatch} from 'react-redux';
import {OtpInput} from 'react-native-otp-entry';
import {useRef} from 'react';
export default function InputOTP({route}) {
  let ele = useRef();
  const dispatch = useDispatch();
  const {phone, type} = route?.params;
  const resend = () => {
    dispatch({
      type: actions.SEND_OTP,
      body: {phone: phone, type: type},
    });
    ele.clear();
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width} height={328}>
        <Image
          source={image.image_san}
          width={'100%'}
          height={'100%'}
          resizeMode="cover"
        />
      </Block>
      <Block
        marginTop={-39}
        marginHorizontal={12}
        paddingBottom={148}
        backgroundColor={COLORS.white}
        radius={8}>
        <Block marginTop={18} marginLeft={12}>
          <Text fontSize={18} semiBold color={COLORS.red4}>
            Xác nhận mã OTP
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
          <Block marginTop={18} row gap={16}>
            {/* {Array.from({length: 6}).map((_, index) => ( */}
            <Block
              // key={index}
              width={(width - 128) / 6}
              height={50}
              radius={5}
              backgroundColor={COLORS.blueGray}>
              <OtpInput
                onFilled={text => console.log(`OTP is ${text}`)}
                ref={n => (ele = n)}
                theme={{
                  containerStyle: {gap: 16},
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
            {/* ))} */}
          </Block>
          <Text
            marginTop={14.9}
            fontSize={16}
            regular
            color={COLORS.black2}
            center>
            Bạn không nhận được mã?{' '}
            <Text onPress={resend} color={COLORS.red4} underlineLineThrough>
              Gửi lại
            </Text>{' '}
            (175s)
          </Text>
        </Block>
      </Block>
    </Block>
  );
}
