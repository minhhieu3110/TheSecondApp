import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  DateOfBirthPicker,
  FormInput,
  HeaderTitle,
  Image,
  ImagePicker,
  Pressable,
  ScrollView,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {ConvertTimeStamp, formatPhone} from '@utils';
import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {Modal, SafeAreaView, TouchableOpacity} from 'react-native';
import {authRoot, bottomRoot} from 'navigation/navigationRef';
import {URL_API} from 'redux/sagas/common';

export default function Account() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actions.GET_USER_INFO,
    });
  }, [dispatch]);
  const [dateOfBirth, setDateOfBirth] = useState(false);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const [updateName, setUpdateName] = useState(`${userInfo?.full_name}`);
  const [updateEmail, setUpdateEmail] = useState(`${userInfo?.email}`);
  const [updateDateOfBirth, setUpdateDateOfBirth] = useState(
    `${ConvertTimeStamp(userInfo?.birthday)}`,
  );
  const update = () => {
    dispatch({
      type: actions.UPDATE_USER_INFO,
      body: {
        full_name: updateName,
        email: updateEmail,
        birthday: updateDateOfBirth,
      },
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res,
        });
        dispatch({type: actions.GET_USER_INFO});
      },
      onFail: error => {
        Toast.show({
          type: 'success',
          text1: 'Cập nhật thông tin thành công',
        });
        dispatch({type: actions.GET_USER_INFO});
        // bottomRoot.navigate(router.PROFILE_SCREEN);
      },
    });
  };
  const [show, setShow] = useState(false);
  const handleUpdateAvatar = e => {
    const formData = new FormData();
    formData.append('picture', {
      uri: Platform.OS === 'android' ? e.path.replace('file://', '') : e.path,
      name: `picture_${new Date().getTime()}.jpg`,
      type: 'image/jpeg',
    });
    dispatch({
      type: actions.UPDATE_AVATAR,
      body: formData,
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
        dispatch({type: actions.GET_USER_INFO});
      },
      onFail: e => {
        Toast.show({
          type: 'error',
          text1: 'Cập nhật ảnh đại diện thất bại',
        });
      },
    });
  };
  const [visible, setVisible] = useState(0);
  const deleteAccount = () => {
    dispatch({
      type: actions.DELETE_ACCOUNT,
      onSuccess: () => {
        authRoot.navigate(router.ONBOARDING_SCREEN);
        setVisible(!visible);
      },
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Thiết lập tài khoản'} />
      <ScrollView contentContainerStyle={{paddingBottom: 181}}>
        <Block
          width={width - 24}
          marginLeft={12}
          marginTop={15}
          paddingBottom={15}
          radius={8}
          backgroundColor={COLORS.white}
          alignCenter>
          <Block height={94} width={94} radius={50} marginTop={15}>
            <Image
              source={
                userInfo?.picture === ''
                  ? icon.icon_user_activity
                  : {uri: `${URL_API.uploads}/${userInfo?.picture}`}
              }
              width={94}
              height={94}
              radius={50}
              resizeMode="cover"
            />
            <Pressable
              onPress={() => setShow(true)}
              width={25}
              height={25}
              radius={50}
              absolute
              bottom={0}
              right={0}>
              <Image source={icon.icon_camera} width={25} height={25} />
            </Pressable>
          </Block>
          <Block width={width - 48} marginTop={33}>
            <Block marginBottom={17}>
              <Text fontSize={15} semiBold color={COLORS.black3}>
                Thông tin tài khoản
              </Text>
              <FormInput value={updateName} onChangeText={setUpdateName} />
            </Block>
            <Block marginBottom={17}>
              <Text fontSize={15} semiBold color={COLORS.black3}>
                Email
              </Text>
              <FormInput value={updateEmail} onChangeText={setUpdateEmail} />
            </Block>
            <Block marginBottom={17}>
              <Text fontSize={15} semiBold color={COLORS.black3}>
                Số điện thoại
              </Text>
              <FormInput
                value={formatPhone(userInfo?.phone)}
                backgroundColor={COLORS.gray10}
                editable={false}
              />
            </Block>
            <Block marginBottom={17}>
              <Text fontSize={15} semiBold color={COLORS.black3}>
                Ngày sinh
              </Text>
              <Block>
                <FormInput
                  width={width - 48}
                  value={updateDateOfBirth}
                  onChangeText={setUpdateDateOfBirth}
                />
                <Pressable
                  marginRight={10}
                  onPress={() => setDateOfBirth(true)}
                  width={18.3}
                  height={17.13}
                  absolute
                  right={5}
                  top={26}>
                  <Image
                    source={icon.icon_calendar}
                    width={18.3}
                    height={17.13}
                  />
                </Pressable>
              </Block>
            </Block>
          </Block>
          <Pressable
            onPress={update}
            width={width - 48}
            height={48}
            justifyCenter
            alignCenter
            backgroundColor={COLORS.red4}
            radius={8}
            marginTop={33}>
            <Text fontSize={15} regular color={COLORS.white}>
              Cập nhật
            </Text>
          </Pressable>

          <Text
            onPress={() => setVisible(!visible)}
            fontSize={15}
            regular
            color={COLORS.red4}
            marginTop={17}>
            Xoá tài khoản
          </Text>
        </Block>
      </ScrollView>
      <DateOfBirthPicker
        visible={dateOfBirth}
        close={() => setDateOfBirth(false)}
        onPress={day => {
          setUpdateDateOfBirth(day);
        }}
      />
      {show && (
        <ImagePicker
          hidePicker={e => {
            setShow(!show);
          }}
          onImagePick={e => {
            handleUpdateAvatar(e);
          }}
        />
      )}
      <Modal visible={visible} transparent={true} animationType="fade">
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.6)',
              flex: 1,
            }}>
            <Block
              width={width - 24}
              backgroundColor={COLORS.white}
              paddingHorizontal={12}
              paddingBottom={15}
              paddingTop={25}
              radius={10}
              alignCenter>
              <Text fontSize={16} bold color={COLORS.red4} center>
                Xoá tài khoản
              </Text>
              <Text
                center
                fontSize={14}
                regular
                color={COLORS.black2}
                marginTop={23}>
                Bạn có đồng ý xoá tài khoản không ?
              </Text>
              <Block marginTop={42} row gap={10}>
                <Pressable
                  onPress={() => setVisible(!visible)}
                  width={(width - 58) / 2}
                  height={45}
                  justifyCenter
                  alignCenter
                  backgroundColor={COLORS.white}
                  radius={5}
                  borderColor={COLORS.red4}
                  borderWidth={1}>
                  <Text fontSize={15} medium color={COLORS.red4}>
                    Huỷ
                  </Text>
                </Pressable>
                <Pressable
                  onPress={deleteAccount}
                  width={(width - 58) / 2}
                  height={45}
                  justifyCenter
                  alignCenter
                  backgroundColor={COLORS.red4}
                  radius={5}
                  borderColor={COLORS.red4}
                  borderWidth={1}>
                  <Text fontSize={15} medium color={COLORS.white}>
                    Xác nhận
                  </Text>
                </Pressable>
              </Block>
            </Block>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </Block>
  );
}
