import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  Icon,
  Image,
  Pressable,
  StatusBar,
  Text,
  TextInput,
} from '@components';
import {height, width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import axios from 'axios';
import {authRoot, commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

export default function LoginScreen() {
  const {bottom} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');

  const sendOTP = () => {
    dispatch({
      type: actions.SEND_OTP,
      body: {phone: phone, type: 'signup'},
      onSuccess: () => {
        setPhone('');
        authRoot.navigate(router.INPUT_OTP, {phone: phone});
      },
      onFail: e => {
        console.log(e);
        Toast.show({
          type: 'error',
          text1: e,
        });
      },
    });
  };
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
        radius={15}
        backgroundColor={COLORS.white}
        paddingBottom={30}>
        <Block marginTop={18} marginHorizontal={12}>
          <Block>
            <Text fontSize={18} semiBold color={COLORS.red4}>
              Xin chào!
            </Text>
            <Text fontSize={15} regular color={COLORS.black2} marginTop={11}>
              Vui lòng nhập số điện thoại để tiếp tục
            </Text>
          </Block>
          <TextInput
            maxLength={10}
            marginTop={26}
            borderWidth={0.5}
            borderColor={COLORS.gray11}
            radius={5}
            placeholder={'Nhập số điện thoại'}
            paddingLeft={14}
            fontSize={14}
            regular
            color={COLORS.black2}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            multiline={false}
          />
          <Block row height={48} marginTop={40}>
            <Pressable
              onPress={sendOTP}
              // width={width - 108}
              // marginHorizontal={12}
              width={width - 48}
              backgroundColor={COLORS.red4}
              radius={8}
              justifyCenter
              alignCenter>
              <Text fontSize={15} regular color={COLORS.white}>
                Tiếp tục
              </Text>
            </Pressable>
          </Block>
        </Block>
      </Block>
      <Block
        alignCenter
        marginHorizontal={48}
        flex={1}
        justifyEnd
        paddingBottom={bottom + 17.5}>
        <Text fontSize={14} regular color={COLORS.placeholder} center>
          Bằng việc nhấn vào nút{' '}
          <Text semiBold color={COLORS.placeholder}>
            Tiếp tục
          </Text>{' '}
          bạn đã đồng ý với{' '}
          <Text
            color={COLORS.red4}
            onPress={() =>
              commonRoot.navigate(router.PRIVACY_SECURITY_ONBOARDING)
            }>
            Chính sách
          </Text>{' '}
          và{' '}
          <Text
            color={COLORS.red4}
            onPress={() => commonRoot.navigate(router.TERMS_OF_USE_ONBOARDING)}>
            Điều khoản
          </Text>{' '}
          của chúng tôi
        </Text>
      </Block>
    </Block>
  );
}
