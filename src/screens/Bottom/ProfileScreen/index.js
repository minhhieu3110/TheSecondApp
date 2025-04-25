import actions from '@actions';
import {icon, image} from '@assets';
import {Block, Icon, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {formatPhone} from '@utils';
import {authRoot, bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useEffect} from 'react';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
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
              width={width - 334}
              height={88}
              borderTopRadius={40}
              borderBottomLeftRadius={40}
              marginTop={20}
              marginLeft={12}>
              <Image
                source={
                  userInfo?.picture === ''
                    ? icon.icon_user_activity
                    : {uri: `${URL_API.uploads}/${userInfo?.picture}`}
                }
                width={90}
                height={90}
                resizeMode="center"
                borderTopRadius={40}
                borderBottomLeftRadius={40}
              />
              <Pressable
                width={25}
                height={25}
                radius={50}
                absolute
                top={57}
                left={60}>
                <Image source={icon.icon_camera} width={25} height={25} />
              </Pressable>
            </Block>
            <Block height={82} marginLeft={12} marginTop={26}>
              <Text fontSize={17} medium color={COLORS.white} capitalize>
                {userInfo?.full_name}
              </Text>
              <Text fontSize={14} regular color={COLORS.white}>
                {formatPhone(userInfo?.phone)}
              </Text>
              <Pressable
                onPress={() => commonRoot.navigate(router.MENBERSHIP_RANK)}
                width={width - 284.28}
                height={29}
                marginTop={9}
                radius={15}
                backgroundColor={COLORS.gradient5}
                row
                alignCenter
                marginLeft={8}
                overflow={'hidden'}>
                <RadialGradient
                  colors={COLORS.gradient5}
                  center={[1000, 1000]}
                  style={{
                    borderRadius: 15,
                    width: width - 284.28,
                    height: 29,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Block width={19} height={19}>
                    <Image
                      source={{
                        uri: `${URL_API.uploads}/${userInfo?.rankinfo?.picture}`,
                      }}
                      height={19}
                      width={19}
                    />
                  </Block>
                  <Block
                    borderWidth={1}
                    height={15}
                    marginLeft={8.5}
                    borderColor={COLORS.white}
                  />
                  <Text
                    medium
                    fontSize={13}
                    color={COLORS.yellow3}
                    marginLeft={8.5}>
                    {userInfo?.rankinfo?.title}
                  </Text>
                  <Icon
                    IconType={MaterialIcons}
                    iconName={'keyboard-arrow-right'}
                    iconColor={COLORS.yellow3}
                    marginLeft={17}
                  />
                  {/* </Block> */}
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
          <Block
            width={width - 24}
            height={67}
            marginTop={15}
            marginLeft={12}
            row>
            <Pressable
              onPress={() => commonRoot.navigate(router.BALANCE)}
              width={(width - 24) / 2 - 5}
              row
              radius={8}
              backgroundColor={COLORS.yellowWhite2}
              alignCenter>
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
              width={(width - 24) / 2 - 5}
              row
              radius={8}
              backgroundColor={COLORS.yellowWhite2}
              alignCenter
              marginLeft={10}>
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
            height={148}
            width={width - 24}
            marginLeft={12}
            marginTop={15}
            backgroundColor={COLORS.white}
            radius={8}
            paddingBottom={19}>
            <Block
              width={width - 50}
              marginLeft={13}
              marginTop={17}
              row
              alignCenter
              spaceBetween>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Đơn hàng của bạn
              </Text>
              <Text fontSize={14} regular color={COLORS.red4}>
                Lịch sử
              </Text>
            </Block>
            <Block
              marginLeft={13}
              marginTop={23}
              width={width - 50}
              height={74}
              row
              spaceBetween>
              {statistical.map(item => (
                <Pressable
                  key={item.value}
                  onPress={() =>
                    bottomRoot.navigate(router.ACTIVITY_SCREEN, {
                      title: item.title,
                    })
                  }
                  width={width - 352}
                  height={74}
                  alignCenter>
                  <Image
                    source={{uri: `${URL_API.uploads}/${item?.picture}`}}
                    width={40.85}
                    height={37.98}
                  />
                  <Text
                    marginTop={13.1}
                    fontSize={13}
                    regular
                    color={COLORS.black4}>
                    {item?.title}
                  </Text>
                  {item?.count !== 0 && (
                    <Block
                      width={18}
                      height={18}
                      radius={50}
                      backgroundColor={COLORS.yellow3}
                      alignCenter
                      justifyCenter
                      absolute
                      top={0}
                      right={0}>
                      <Text fontSize={12} regular color={COLORS.white}>
                        {item?.count}
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
          marginLeft={12}
          marginTop={89}
          backgroundColor={COLORS.white}
          paddingBottom={12}>
          <Block
            width={width - 48}
            height={336}
            marginTop={17}
            marginHorizontal={12}
            marginBottom={12}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Tài khoản
            </Text>
            <Block marginTop={15}>
              <Pressable
                onPress={() => commonRoot.navigate(router.ACCOUNT)}
                height={50}
                width={width - 48}
                alignCenter
                row>
                <Image
                  source={icon.icon_config_account}
                  width={50}
                  height={50}
                />
                <Text
                  regular
                  fontSize={15}
                  color={COLORS.black5}
                  marginLeft={15}>
                  Thiết lập tài khoản
                </Text>
                <Block absolute right={0}>
                  <Icon
                    iconName={'keyboard-arrow-right'}
                    IconType={MaterialIcons}
                  />
                </Block>
              </Pressable>
              <Block
                width={width - 117}
                borderWidth={1}
                borderColor={COLORS.gray11}
                marginVertical={7}
                marginLeft={69}
              />
              <Pressable
                onPress={() => commonRoot.navigate(router.FAVORITE_STAFF)}
                height={50}
                width={width - 48}
                alignCenter
                row>
                <Image
                  source={icon.icon_staff_favorite}
                  width={50}
                  height={50}
                />
                <Text
                  regular
                  fontSize={15}
                  color={COLORS.black5}
                  marginLeft={15}>
                  Nhân viên yêu thích
                </Text>
                <Block absolute right={0}>
                  <Icon
                    iconName={'keyboard-arrow-right'}
                    IconType={MaterialIcons}
                  />
                </Block>
              </Pressable>
              <Block
                width={width - 117}
                borderWidth={1}
                borderColor={COLORS.gray11}
                marginVertical={7}
                marginLeft={69}
              />
              <Pressable
                onPress={() => commonRoot.navigate(router.VOUCHER)}
                height={50}
                width={width - 48}
                alignCenter
                row>
                <Image
                  source={icon.icon_voucher_profile}
                  width={50}
                  height={50}
                />
                <Text
                  regular
                  fontSize={15}
                  color={COLORS.black5}
                  marginLeft={15}>
                  Kho voucher
                </Text>
                <Block absolute right={0}>
                  <Icon
                    iconName={'keyboard-arrow-right'}
                    IconType={MaterialIcons}
                  />
                </Block>
              </Pressable>
              <Block
                width={width - 117}
                borderWidth={1}
                borderColor={COLORS.gray11}
                marginVertical={7}
                marginLeft={69}
              />
              <Pressable
                onPress={() => commonRoot.navigate(router.REFER_FRIEND)}
                height={50}
                width={width - 48}
                alignCenter
                row>
                <Image source={icon.icon_link_friend} width={50} height={50} />
                <Text
                  regular
                  fontSize={15}
                  color={COLORS.black5}
                  marginLeft={15}>
                  Giới thiệu bạn bè
                </Text>
                <Block absolute right={0}>
                  <Icon
                    iconName={'keyboard-arrow-right'}
                    IconType={MaterialIcons}
                  />
                </Block>
              </Pressable>
              <Block
                width={width - 117}
                borderWidth={1}
                borderColor={COLORS.gray11}
                marginVertical={7}
                marginLeft={69}
              />
              <Pressable
                onPress={() => commonRoot.navigate(router.BLOCK_STAFF)}
                height={50}
                width={width - 48}
                alignCenter
                row>
                <Image source={icon.icon_list_block} width={50} height={50} />
                <Text
                  regular
                  fontSize={15}
                  color={COLORS.black5}
                  marginLeft={15}>
                  Danh sách chặn
                </Text>
                <Block absolute right={0}>
                  <Icon
                    iconName={'keyboard-arrow-right'}
                    IconType={MaterialIcons}
                  />
                </Block>
              </Pressable>
            </Block>
          </Block>
        </Block>
        <Block
          width={width - 24}
          radius={8}
          marginLeft={12}
          marginTop={15}
          backgroundColor={COLORS.white}
          paddingBottom={12}>
          <Block width={width - 48} marginTop={17} marginHorizontal={12}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Tiện ích
            </Text>
            <Block marginTop={15}>
              <Pressable
                onPress={() => commonRoot.navigate(router.HELP)}
                height={50}
                width={width - 48}
                alignCenter
                row>
                <Image source={icon.icon_help} width={50} height={50} />
                <Text
                  regular
                  fontSize={15}
                  color={COLORS.black5}
                  marginLeft={15}>
                  Hỗ trợ
                </Text>
                <Block absolute right={0}>
                  <Icon
                    iconName={'keyboard-arrow-right'}
                    IconType={MaterialIcons}
                  />
                </Block>
              </Pressable>
              <Block
                width={width - 117}
                borderWidth={1}
                borderColor={COLORS.gray11}
                marginVertical={7}
                marginLeft={69}
              />
              <Pressable
                onPress={() => commonRoot.navigate(router.SETTING)}
                height={50}
                width={width - 48}
                alignCenter
                row>
                <Image source={icon.icon_setting} width={50} height={50} />
                <Text
                  regular
                  fontSize={15}
                  color={COLORS.black5}
                  marginLeft={15}>
                  Cài đặt
                </Text>
                <Block absolute right={0}>
                  <Icon
                    iconName={'keyboard-arrow-right'}
                    IconType={MaterialIcons}
                  />
                </Block>
              </Pressable>
              <Block
                width={width - 117}
                borderWidth={1}
                borderColor={COLORS.gray11}
                marginVertical={7}
                marginLeft={69}
              />
              <Pressable
                onPress={() => commonRoot.navigate(router.FEEDBACK)}
                height={50}
                width={width - 48}
                alignCenter
                row>
                <Image source={icon.icon_feedback} width={50} height={50} />
                <Text
                  regular
                  fontSize={15}
                  color={COLORS.black5}
                  marginLeft={15}>
                  Phản hồi
                </Text>
                <Block absolute right={0}>
                  <Icon
                    iconName={'keyboard-arrow-right'}
                    IconType={MaterialIcons}
                  />
                </Block>
              </Pressable>
              <Block
                width={width - 117}
                borderWidth={1}
                borderColor={COLORS.gray11}
                marginVertical={7}
                marginLeft={69}
              />
              <Pressable
                onPress={() => commonRoot.navigate(router.ABOUT)}
                height={50}
                width={width - 48}
                alignCenter
                row>
                <Image source={icon.icon_about} width={50} height={50} />
                <Text
                  regular
                  fontSize={15}
                  color={COLORS.black5}
                  marginLeft={15}>
                  Về chúng tôi
                </Text>
                <Block absolute right={0}>
                  <Icon
                    iconName={'keyboard-arrow-right'}
                    IconType={MaterialIcons}
                  />
                </Block>
              </Pressable>
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
    </Block>
  );
}
