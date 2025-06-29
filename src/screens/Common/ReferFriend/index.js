import actions from '@actions';
import {icon, image} from '@assets';
import {Block, Icon, Image, Pressable, StatusBar, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {root} from 'navigation/navigationRef';
import {useEffect} from 'react';
import {Linking, ScrollView} from 'react-native';
import RenderHTML from 'react-native-render-html';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import Clipboard from '@react-native-clipboard/clipboard';
export default function ReferFriend() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_HELP,
      params: {number: 12},
    });
    dispatch({
      type: actions.GET_REF,
    });
    dispatch({
      type: actions.GET_USER_INFO,
    });
  }, [dispatch]);
  const help = useSelector(state => state.getHelp?.data);
  const ref = useSelector(state => state.getRef?.data || []);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  console.log(Clipboard.getString());

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block width={width} height={199.6}>
          <Image
            source={image.image_refer}
            width={width}
            height={199.6}
            resizeMode="cover"
          />
          <Pressable
            onPress={() => root.goBack()}
            width={30}
            height={30}
            radius={50}
            absolute
            top={13}
            left={12}
            backgroundColor={COLORS.black}
            opacity={0.6}>
            <Icon
              IconType={Ionicons}
              iconName={'chevron-back-outline'}
              iconSize={30}
              iconColor={COLORS.white}
            />
          </Pressable>
        </Block>
        <Block
          marginTop={-18.6}
          width={width - 24}
          backgroundColor={COLORS.white}
          marginLeft={12}
          radius={8}
          paddingBottom={57.3}>
          <Block width={width - 48} marginTop={11} marginHorizontal={12}>
            <Text fontSize={18} semiBold color={COLORS.black1}>
              {help?.title}
            </Text>
            <Block row marginTop={34} alignCenter spaceBetween>
              <Block row width={width - 78} spaceBetween>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Mã giới thiệu
                </Text>
                <Text fontSize={14} regular color={COLORS.red4}>
                  {userInfo?.user_code}
                </Text>
              </Block>
              <Pressable
                onPress={() => Clipboard.setString(userInfo?.user_code)}
                width={21}
                height={21}>
                <Icon
                  IconType={Ionicons}
                  iconName={'copy-outline'}
                  iconSize={21}
                  iconColor={COLORS.red4}
                />
              </Pressable>
            </Block>
            <Block
              height={69}
              radius={8}
              backgroundColor={COLORS.pinkWhite2}
              marginTop={24}
              row
              alignCenter>
              <Block width={45} height={45} marginLeft={12}>
                <Image
                  source={icon.icon_logo_san}
                  width={45}
                  height={45}
                  radius={50}
                  resizeMode="cover"
                />
              </Block>
              <Text fontSize={15} medium color={COLORS.black1} marginLeft={12}>
                Ứng dụng San
              </Text>
              <Block height={45} row marginLeft={95} absolute right={12}>
                <Pressable
                  onPress={() =>
                    Linking.openURL(ref?.qrcode_customer_referral_link)
                  }>
                  <Image width={45} height={45} source={icon.icon_qr_refer} />
                </Pressable>
                <Pressable
                  onPress={() => Linking.openURL(ref?.customer_referral_link)}>
                  <Image
                    width={45}
                    height={45}
                    source={icon.icon_share_refer}
                    marginLeft={12}
                  />
                </Pressable>
              </Block>
            </Block>
            <Block
              height={69}
              radius={8}
              backgroundColor={COLORS.pinkWhite2}
              marginTop={12}
              row
              alignCenter>
              <Block width={45} height={45} marginLeft={12}>
                <Image
                  source={icon.icon_logo_san}
                  width={45}
                  height={45}
                  radius={50}
                  resizeMode="cover"
                />
              </Block>
              <Text fontSize={15} medium color={COLORS.black1} marginLeft={12}>
                Ứng dụng CTV San
              </Text>
              <Block height={45} row marginLeft={95} absolute right={12}>
                <Pressable
                  onPress={() =>
                    Linking.openURL(ref?.qrcode_employee_referral_link)
                  }>
                  <Image width={45} height={45} source={icon.icon_qr_refer} />
                </Pressable>
                <Pressable
                  onPress={() => Linking.openURL(ref?.employee_referral_link)}>
                  <Image
                    width={45}
                    height={45}
                    source={icon.icon_share_refer}
                    marginLeft={12}
                  />
                </Pressable>
              </Block>
            </Block>
          </Block>
          <Block marginTop={17} width={width - 48} marginHorizontal={12}>
            <RenderHTML
              contentWidth={width - 48}
              source={{html: help?.content}}
              tagsStyles={{
                strong: {
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: COLORS.black1,
                  lineHeight: 18,
                },
                p: {
                  fontSize: 14,
                  fontWeight: 'regular',
                  color: COLORS.black5,
                  lineHeight: 18,
                },
              }}
            />
          </Block>
          <Block marginLeft={12} marginTop={22.7}>
            <Text fontSize={14} medium color={COLORS.red4}>
              Điều kiện và điều khoản sử dụng
            </Text>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
