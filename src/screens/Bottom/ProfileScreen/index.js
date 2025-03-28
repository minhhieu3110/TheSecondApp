import {icon, image} from '@assets';
import {Block, Icon, Image, Pressable, Text} from '@components';
import {height, width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {
  authRoot,
  bottomRoot,
  commonRoot,
  topRoot,
} from 'navigation/navigationRef';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function ProfileScreen() {
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
                source={image.image_user}
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
              <Text fontSize={17} medium color={COLORS.white}>
                Lâm Minh Hoàng
              </Text>
              <Text fontSize={14} regular color={COLORS.white}>
                0909 123 456
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
                  {/* <Block row radius={15} alignCenter justifyCenter> */}
                  <Block width={19} height={19}>
                    <Image
                      source={icon.icon_bronze_rank}
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
                    Hạng vàng
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
            <Block width={27.53} height={27.53} absolute top={20} right={11.9}>
              <Image
                source={icon.icon_edit_profile}
                width={27.53}
                height={27.53}
              />
            </Block>
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
                  30.000.000 đ
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
                  3600 điểm
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
              <Pressable
                onPress={() =>
                  bottomRoot.navigate(router.ACTIVITY_SCREEN, {activity: 'new'})
                }
                width={width - 352}
                height={74}
                alignCenter>
                <Image
                  source={icon.union_new_activity}
                  width={40.85}
                  height={37.98}
                />
                <Text
                  marginTop={13.1}
                  fontSize={13}
                  regular
                  color={COLORS.black4}>
                  Mới
                </Text>
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
                    1
                  </Text>
                </Block>
              </Pressable>
              <Block width={width - 352} height={74} alignCenter>
                <Image
                  source={icon.union_reception}
                  width={40.85}
                  height={37.98}
                />
                <Text
                  marginTop={13.1}
                  fontSize={13}
                  regular
                  color={COLORS.black4}>
                  Tiếp nhận
                </Text>
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
                    1
                  </Text>
                </Block>
              </Block>
              <Block width={width - 352} height={74} alignCenter>
                <Image source={icon.union_doing} width={40.85} height={37.98} />
                <Text
                  marginTop={13.1}
                  fontSize={13}
                  regular
                  color={COLORS.black4}>
                  Đang làm
                </Text>
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
                    1
                  </Text>
                </Block>
              </Block>
              <Block width={width - 352} height={74} alignCenter>
                <Image
                  source={icon.union_complete}
                  width={40.85}
                  height={37.98}
                />
                <Text
                  marginTop={13.1}
                  fontSize={13}
                  regular
                  color={COLORS.black4}>
                  Hoàn thành
                </Text>
              </Block>
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
          <Pressable
            onPress={() => authRoot.navigate(router.ONBOARDING_SCREEN)}
            absolute
            right={12}
            row
            alignCenter>
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
