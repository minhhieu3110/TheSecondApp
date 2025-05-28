import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  DateOfBirthPicker,
  Image,
  Pressable,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {formatPhone} from '@utils';
import {authRoot, bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import {getDeviceId, getDeviceName} from 'react-native-device-info';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';

export default function InputInformation({route}) {
  const [visible, setVisible] = useState(false);
  const [fullname, setFullName] = useState('');
  // const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const data = route?.params.data;

  const dispatch = useDispatch();
  const signUp = () => {
    dispatch({
      type: actions.SIGN_UP,
      body: {
        full_name: fullname,
        username: route?.params.data?.phone,
        email: email,
        password: `${data?.otpCode}00`,
        device_name: getDeviceName(),
        device_token: getDeviceId(),
        birthday: dateOfBirth,
        referral_code: referralCode,
      },
      onSuccess: () => {
        authRoot.navigate(router.LOGIN_SCREEN);
      },
      onFail: error => {
        Toast.show({
          type: 'error',
          text1: 'Các trương không được để trống',
        });
      },
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 67}}>
        <Block width={width} height={328}>
          <Image
            source={image.image_san}
            width={'100%'}
            height={'100%'}
            resizeMode="cover"
          />
        </Block>
        <Block
          paddingBottom={12}
          marginTop={-39}
          marginHorizontal={12}
          backgroundColor={COLORS.white}
          radius={8}>
          <Block marginTop={17} marginHorizontal={12}>
            <Text fontSize={18} semiBold color={COLORS.red4}>
              Điền thông tin
            </Text>
            <Block marginTop={21}>
              <Block marginBottom={17}>
                <Text fontSize={15} semiBold color={COLORS.black3}>
                  Họ tên
                </Text>
                <TextInput
                  height={41}
                  radius={5}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  paddingLeft={12}
                  color={COLORS.placeholder}
                  fontSize={14}
                  regular
                  marginTop={15}
                  placeholder={'Nhập họ tên'}
                  placeholderTextColor={COLORS.placeholder}
                  value={fullname}
                  onChangeText={setFullName}
                  multiline={false}
                />
              </Block>
              <Block marginBottom={17}>
                <Text fontSize={15} semiBold color={COLORS.black3}>
                  Email
                </Text>
                <TextInput
                  height={41}
                  radius={5}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  paddingLeft={12}
                  color={COLORS.placeholder}
                  fontSize={14}
                  regular
                  marginTop={15}
                  placeholderTextColor={COLORS.placeholder}
                  placeholder={'Nhập email'}
                  value={email}
                  onChangeText={setEmail}
                  multiline={false}
                />
              </Block>
              <Block marginBottom={17}>
                <Text fontSize={15} semiBold color={COLORS.black3}>
                  Số điện thoại
                </Text>
                <Text
                  height={41}
                  radius={5}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.gray10}
                  paddingLeft={12}
                  paddingTop={13}
                  color={COLORS.placeholder}
                  alignCenter
                  fontSize={14}
                  regular
                  marginTop={15}>
                  {formatPhone(data?.phone)}
                </Text>
              </Block>
              <Block marginBottom={17}>
                <Text fontSize={15} semiBold color={COLORS.black3}>
                  Ngày sinh
                </Text>
                <Block row height={41} marginTop={15}>
                  <TextInput
                    width={width - 48}
                    height={41}
                    radius={5}
                    borderWidth={0.5}
                    borderColor={COLORS.gray11}
                    paddingLeft={12}
                    color={COLORS.placeholder}
                    fontSize={14}
                    regular
                    value={dateOfBirth}
                    onChangeText={setDateOfBirth}
                    placeholder={'Nhập ngày sinh'}
                    multiline={false}
                  />
                  <Pressable
                    onPress={() => setVisible(true)}
                    width={18.3}
                    height={17.13}
                    absolute
                    top={11.9}
                    right={11.9}>
                    <Image
                      source={icon.icon_calendar}
                      width={18.3}
                      height={17.13}
                    />
                  </Pressable>
                </Block>
              </Block>
              <Block marginBottom={17}>
                <Text fontSize={15} semiBold color={COLORS.black3}>
                  Mã giới thiệu
                </Text>
                <TextInput
                  height={41}
                  radius={5}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  paddingLeft={12}
                  color={COLORS.placeholder}
                  fontSize={14}
                  regular
                  marginTop={15}
                  placeholder={'Nhập mã giới thiệu'}
                  value={referralCode}
                  onChangeText={setReferralCode}
                  multiline={false}
                />
              </Block>
            </Block>
            <Pressable
              onPress={signUp}
              height={48}
              backgroundColor={COLORS.red4}
              radius={8}
              justifyCenter
              alignCenter
              marginTop={30}>
              <Text fontSize={15} regular color={COLORS.white}>
                Hoàn tất
              </Text>
            </Pressable>
          </Block>
        </Block>
      </ScrollView>
      <DateOfBirthPicker
        visible={visible}
        close={() => setVisible(false)}
        onChange={day => {
          setDateOfBirth(day);
        }}
      />
    </Block>
  );
}
