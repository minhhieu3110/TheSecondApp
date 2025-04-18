import actions from '@actions';
import {icon, image} from '@assets';
import {Block, Icon, Image, Pressable, Text, TextInput} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import axios from 'axios';
import {authRoot, commonRoot} from 'navigation/navigationRef';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

export default function LoginScreen() {
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
          text1: 'e?.message',
        });
      },
    });
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
            marginTop={26}
            borderWidth={0.5}
            borderColor={COLORS.gray11}
            radius={5}
            placeholder={'Nhập số điện thoại'}
            paddingLeft={14}
            fontSize={14}
            regular
            keyboardType={'phone-pad'}
            color={COLORS.black2}
            value={phone}
            onChangeText={setPhone}
          />
          <Block row gap={10} height={48} marginTop={40}>
            <Pressable
              onPress={sendOTP}
              width={width - 108}
              backgroundColor={COLORS.red4}
              radius={8}
              justifyCenter
              alignCenter>
              <Text fontSize={15} regular color={COLORS.white}>
                Tiếp tục
              </Text>
            </Pressable>
            <Block
              width={48}
              height={48}
              radius={8}
              backgroundColor={COLORS.red4}
              justifyCenter
              alignCenter>
              <Image source={icon.icon_fingerprint} width={30} height={30} />
            </Block>
          </Block>
          <Block marginTop={71} alignCenter>
            <Text fontSize={16} regular color={COLORS.gray6} center>
              HOẶC
            </Text>
            <Block row marginTop={15} gap={18}>
              <Icon
                IconType={MaterialIcons}
                iconName={'facebook'}
                iconSize={40}
                iconColor={COLORS.blueFacebook}
              />
              <Block
                width={40}
                height={40}
                backgroundColor={COLORS.whiteGray}
                radius={50}
                justifyCenter
                alignCenter>
                <Image source={icon.icon_email} width={36} height={21} />
              </Block>
              <Pressable
                onPress={() => commonRoot.navigate(router.HOME_SCREEN)}
                width={40}
                height={40}
                backgroundColor={COLORS.whiteGray}
                radius={50}
                justifyCenter
                alignCenter>
                <Icon
                  IconType={MaterialIcons}
                  iconName={'apple'}
                  iconSize={28}
                />
              </Pressable>
            </Block>
          </Block>
        </Block>
      </Block>
      <Block absolute bottom={35} alignCenter paddingHorizontal={48}>
        <Text fontSize={14} regular color={COLORS.placeholder} center>
          Bằng việc nhấn vào nút{' '}
          <Text semiBold color={COLORS.placeholder}>
            Tiếp tục
          </Text>
          , bạn đã đồng ý với <Text color={COLORS.red4}>Quy chế</Text> và{' '}
          <Text color={COLORS.red4}>Điều khoản</Text> của chúng tôi
        </Text>
      </Block>
    </Block>
  );
}
