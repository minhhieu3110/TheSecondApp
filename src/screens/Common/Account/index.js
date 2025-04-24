import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Pressable,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {ConvertTimeStamp, formatPhone} from '@utils';
import {bottomRoot, root} from 'navigation/navigationRef';
import {use, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {user} from 'redux/reducers/combineReducers/userReducers';

export default function Account() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actions.GET_USER_INFO,
    });
  }, [dispatch]);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const [updateName, setUpdateName] = useState(`${userInfo?.full_name}`);
  const [updateEmail, setUpdateEmail] = useState(`${userInfo?.email}`);
  const [updateDateOfBirth, setUpdateDateOfBirth] = useState();
  const update = () => {
    dispatch({
      type: actions.UPDATE_USER_INFO,
      body: {
        full_name: updateName,
        email: updateEmail,
        birthday: updateDateOfBirth,
      },
      onSuccess: res => {
        console.log(res?.message);

        // root.goBack();
      },
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Thiết lập tài khoản'} />
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
            source={image.image_user}
            width={94}
            height={94}
            radius={50}
            resizeMode="cover"
          />
          <Block
            width={25}
            height={25}
            radius={50}
            absolute
            bottom={0}
            right={0}>
            <Image source={icon.icon_camera} width={25} height={25} />
          </Block>
        </Block>
        <Block width={width - 48} marginTop={33}>
          <Block marginBottom={17}>
            <Text fontSize={15} semiBold color={COLORS.black3}>
              Thông tin tài khoản
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
              value={updateName}
              numberOfLines={1}
              onChangeText={setUpdateName}
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
              value={updateEmail}
              onChangeText={setUpdateEmail}
            />
          </Block>
          <Block marginBottom={17}>
            <Text fontSize={15} semiBold color={COLORS.black3}>
              Số điện thoại
            </Text>
            <TextInput
              height={41}
              radius={5}
              borderWidth={0.5}
              borderColor={COLORS.gray11}
              backgroundColor={COLORS.gray10}
              paddingLeft={12}
              color={COLORS.placeholder}
              fontSize={14}
              regular
              marginTop={15}
              value={formatPhone(userInfo?.phone)}
            />
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
                value={updateDateOfBirth}
                onChangeText={setUpdateDateOfBirth}
              />
              <Block
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
              </Block>
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
        <Block>
          <Text fontSize={15} regular color={COLORS.red4} marginTop={17}>
            Xoá tài khoản
          </Text>
        </Block>
      </Block>
    </Block>
  );
}
