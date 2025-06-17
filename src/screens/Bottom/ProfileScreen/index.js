import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  Icon,
  Image,
  ImagePicker,
  Pressable,
  Text,
  ScrollView,
  UpdateAvatar,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {formatPhone} from '@utils';
import {authRoot, bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
import {dataAccount, dataUtilities} from 'utils/dataLocal';
import {formatCurrency} from 'utils/helper';
export default function ProfileScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_USER_INFO,
    });
    dispatch({
      type: actions.GET_STATISTICAL,
    });
  }, [dispatch]);

  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const statistical = useSelector(state => state.getStatistical?.data || []);
  const logout = () => {
    dispatch({
      type: actions.LOGOUT,
      onSuccess: () => {
        authRoot.navigate(router.ONBOARDING_SCREEN);
      },
    });
  };
  const [show, setShow] = useState(false);
  const handleUpdateAvatar = e => {
    const formData = new FormData();
    formData.append('picture', {
      uri: e.path,
      name: 'profile.jpg',
      type: 'image/jpeg',
    });
    dispatch({
      type: actions.UPDATE_AVATAR,
      body: formData,
      onSuccess: res => {
        dispatch({type: actions.GET_USER_INFO});
      },
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}>
        <Block width={width} height={294} backgroundColor={'#EAEAEA'}>
          <LinearGradient
            style={{
              width: width,
              height: 123,
              borderBottomLeftRadius: 45,
              flexDirection: 'row',
            }}
            colors={COLORS.gradient5}>
            <Block
              width={94}
              height={88}
              marginTop={20}
              marginLeft={12}
              overflow={'hidden'}
              borderTopRadius={40}
              borderBottomLeftRadius={40}>
              <Image
                source={
                  userInfo?.picture === ''
                    ? icon.icon_user_activity
                    : {uri: `${URL_API.uploads}/${userInfo?.picture}`}
                }
                width={94}
                height={88}
                resizeMode="cover"
              />
              <Pressable
                onPress={() => setShow(!show)}
                width={25}
                height={25}
                radius={50}
                absolute
                top={57}
                right={3}>
                <Image source={icon.icon_camera} width={25} height={25} />
              </Pressable>
            </Block>
            <Block
              width={'70%'}
              paddingLeft={12}
              marginTop={26}
              paddingBottom={5}>
              <Text
                fontSize={17}
                medium
                color={COLORS.white}
                capitalize
                numberOfLines={1}>
                {userInfo?.full_name}
              </Text>
              <Text fontSize={14} regular color={COLORS.white}>
                {formatPhone(userInfo?.phone)}
              </Text>
              <Pressable
                onPress={() => commonRoot.navigate(router.MENBERSHIP_RANK)}
                width={`${userInfo?.rankinfo?.title?.length * 1.5 + 40}%`}
                height={29}
                marginTop={9}
                radius={15}
                backgroundColor={COLORS.gradient5}
                row
                alignCenter
                overflow={'hidden'}>
                <RadialGradient
                  colors={COLORS.gradient5}
                  center={[1000, 1000]}
                  style={{
                    borderRadius: 15,
                    width: '100%',
                    height: 29,
                    justifyContent: 'center',
                  }}>
                  <Block width={'87%'} rowCenter marginLeft={8} gap={10}>
                    <Block rowCenter gap={8.5}>
                      <Image
                        source={{
                          uri: `${URL_API.uploads}/${userInfo?.rankinfo?.picture}`,
                        }}
                        height={19}
                        width={19}
                        resizeMode="contain"
                      />
                      <Block
                        borderWidth={1}
                        height={15}
                        borderColor={COLORS.white}
                      />
                      <Text medium fontSize={13} color={COLORS.yellow3}>
                        {userInfo?.rankinfo?.title}
                      </Text>
                    </Block>
                    <Icon
                      IconType={MaterialIcons}
                      iconName={'keyboard-arrow-right'}
                      iconColor={COLORS.yellow3}
                    />
                  </Block>
                </RadialGradient>
              </Pressable>
            </Block>
            <Pressable
              onPress={() => commonRoot.navigate(router.ACCOUNT)}
              width={27.53}
              height={27.53}
              absolute
              top={20}
              right={11.9}>
              <Image
                source={icon.icon_edit_profile}
                width={27.53}
                height={27.53}
              />
            </Pressable>
          </LinearGradient>
          <Block marginTop={15} marginHorizontal={12} row gap={10} wrap>
            <Pressable
              onPress={() => commonRoot.navigate(router.BALANCE)}
              width={'48.5%'}
              row
              radius={8}
              backgroundColor={COLORS.yellowWhite2}
              alignCenter
              paddingBottom={12}
              paddingTop={16}>
              <Image
                source={icon.icon_balance_profile}
                width={43}
                height={43}
                marginLeft={12}
              />
              <Block height={39} marginLeft={12}>
                <Text fontSize={16} semiBold color={COLORS.red4}>
                  {formatCurrency(userInfo?.wcoin)}
                </Text>
                <Text fontSize={13} regular color={COLORS.black1}>
                  Số dư khả dụng
                </Text>
              </Block>
            </Pressable>
            <Pressable
              onPress={() => commonRoot.navigate(router.ACCUMULATED_POINT)}
              width={'48.5%'}
              row
              radius={8}
              backgroundColor={COLORS.yellowWhite2}
              alignCenter
              paddingBottom={12}
              paddingTop={16}>
              <Image
                source={icon.icon_point_accumulated_profile}
                width={43}
                height={43}
                marginLeft={12}
              />
              <Block height={39} marginLeft={12}>
                <Text fontSize={16} semiBold color={COLORS.red4}>
                  {userInfo?.point} điểm
                </Text>
                <Text fontSize={13} regular color={COLORS.black1}>
                  Điểm tích luỹ
                </Text>
              </Block>
            </Pressable>
          </Block>
          <Block
            marginTop={15}
            paddingBottom={19}
            backgroundColor={COLORS.white}
            radius={8}
            width={width - 24}
            marginHorizontal={12}>
            <Block rowCenter spaceBetween marginHorizontal={13} marginTop={17}>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Đơn hàng của bạn
              </Text>
              <Text fontSize={14} regular color={COLORS.red4}>
                Lịch sử
              </Text>
            </Block>
            <Block marginHorizontal={13} marginTop={23} rowCenter spaceBetween>
              {statistical?.map(sta => (
                <Pressable
                  onPress={() =>
                    bottomRoot.navigate(router.ACTIVITY_SCREEN, {
                      title: sta.title,
                    })
                  }
                  key={sta.title}
                  width={'23.5%'}
                  height={74}
                  alignCenter>
                  <Image
                    source={{uri: `${URL_API.uploads}/${sta?.picture}`}}
                    width={42.17}
                    height={43.55}
                  />
                  <Text
                    marginTop={11.4}
                    fontSize={13}
                    regular
                    color={COLORS.black2}>
                    {sta.title}
                  </Text>
                  {sta?.count !== 0 && (
                    <Block
                      absolute
                      top={-9}
                      right={-9}
                      width={18}
                      height={18}
                      radius={18}
                      backgroundColor={COLORS.yellow3}
                      justifyCenter
                      alignCenter>
                      <Text fontSize={12} regular color={COLORS.white}>
                        {sta.count}
                      </Text>
                    </Block>
                  )}
                </Pressable>
              ))}
            </Block>
          </Block>
        </Block>
        <Block
          width={width - 24}
          radius={8}
          marginHorizontal={12}
          marginTop={104}
          backgroundColor={COLORS.white}
          paddingBottom={12}>
          <Block width={width - 48} marginTop={17} marginHorizontal={12}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Tài khoản
            </Text>
            <Block marginTop={15} gap={7}>
              {dataAccount.map(item => (
                <Block alignEnd gap={7} key={item.id}>
                  <Pressable
                    onPress={item.onPress}
                    width={'100%'}
                    height={50}
                    rowCenter>
                    <Image source={item.icon} width={50} height={50} />
                    <Block
                      paddingLeft={15}
                      rowCenter
                      spaceBetween
                      width={'87.5%'}>
                      <Text fontSize={15} regular color={COLORS.black5}>
                        {item.title}
                      </Text>
                      <Icon iconName={item.iconName} IconType={MaterialIcons} />
                    </Block>
                  </Pressable>
                  {item.id === 5 ? (
                    ''
                  ) : (
                    <Block
                      width={'82%'}
                      borderColor={COLORS.gray11}
                      borderWidth={1}
                    />
                  )}
                </Block>
              ))}
            </Block>
          </Block>
        </Block>
        <Block
          width={width - 24}
          radius={8}
          marginHorizontal={12}
          marginTop={15}
          backgroundColor={COLORS.white}
          paddingBottom={12}>
          <Block width={width - 48} marginTop={17} marginHorizontal={12}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Tiện ích
            </Text>
            <Block marginTop={15} gap={7}>
              {dataUtilities.map(item => (
                <Block alignEnd gap={7} key={item.id}>
                  <Pressable
                    onPress={item.onPress}
                    width={'100%'}
                    height={50}
                    rowCenter>
                    <Image source={item.icon} width={50} height={50} />
                    <Block
                      paddingLeft={15}
                      rowCenter
                      spaceBetween
                      width={'87.5%'}>
                      <Text fontSize={15} regular color={COLORS.black5}>
                        {item.title}
                      </Text>
                      <Icon iconName={item.iconName} IconType={MaterialIcons} />
                    </Block>
                  </Pressable>
                  {item.id === 4 ? (
                    ''
                  ) : (
                    <Block
                      width={'82%'}
                      borderColor={COLORS.gray11}
                      borderWidth={1}
                    />
                  )}
                </Block>
              ))}
            </Block>
          </Block>
        </Block>
        <Block marginTop={12}>
          <Pressable onPress={logout} absolute right={12} row alignCenter>
            <Image source={icon.icon_logout} width={30} height={30} />
            <Text fontSize={15} regular color={COLORS.red4} marginLeft={10}>
              Đăng xuất
            </Text>
          </Pressable>
        </Block>
      </ScrollView>
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
    </Block>
  );
}
