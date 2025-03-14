import {icon, image} from '@assets';
import {Block, Icon, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {root} from 'navigation/navigationRef';
import {ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function ReferFriend() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
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
              Giới thiệu ứng dụng và nhận ngay thu nhập hấp dẫn
            </Text>
            <Block row marginTop={34} alignCenter spaceBetween>
              <Block row width={width - 78} spaceBetween>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Mã giới thiệu
                </Text>
                <Text fontSize={14} regular color={COLORS.red4}>
                  SAN01234
                </Text>
              </Block>
              <Block width={21} height={21}>
                <Icon
                  IconType={Ionicons}
                  iconName={'copy-outline'}
                  iconSize={21}
                  iconColor={COLORS.red4}
                />
              </Block>
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
                <Image width={45} height={45} source={icon.icon_qr_refer} />
                <Image
                  width={45}
                  height={45}
                  source={icon.icon_share_refer}
                  marginLeft={12}
                />
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
                <Image width={45} height={45} source={icon.icon_qr_refer} />
                <Image
                  width={45}
                  height={45}
                  source={icon.icon_share_refer}
                  marginLeft={12}
                />
              </Block>
            </Block>
          </Block>
          <Block marginTop={17} width={width - 48} marginHorizontal={12}>
            <Block>
              <Text fontSize={14} semiBold color={COLORS.black1}>
                Đối với người giới thiệu
              </Text>
              <Text fontSize={14} semiBold color={COLORS.black5} marginTop={13}>
                Bước 1:{' '}
                <Text fontSize={14} regular color={COLORS.black5}>
                  Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
                  eiusmod tempor
                </Text>
              </Text>
              <Text fontSize={14} semiBold color={COLORS.black5} marginTop={16}>
                Bước 2:{' '}
                <Text fontSize={14} regular color={COLORS.black5}>
                  Lorem psum dolor sit amet, consec adipiscing elit, sed do
                  eiusmod tempor incididunt ut labor dolore magna aliqua. Ut
                  enim ad minim veniam, t nostrudmt exercitation ullamco laboris
                  nisi ut aliquip e commodo consequat
                </Text>
              </Text>
            </Block>

            <Block marginTop={39}>
              <Text fontSize={14} semiBold color={COLORS.black1}>
                Đối với người giới thiệu
              </Text>
              <Text fontSize={14} semiBold color={COLORS.black5} marginTop={13}>
                Bước 1:{' '}
                <Text fontSize={14} regular color={COLORS.black5}>
                  Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
                  eiusmod tempor
                </Text>
              </Text>
              <Text fontSize={14} semiBold color={COLORS.black5} marginTop={16}>
                Bước 2:{' '}
                <Text fontSize={14} regular color={COLORS.black5}>
                  Lorem psum dolor sit amet, consec adipiscing elit, sed do
                  eiusmod tempor incididunt ut labor dolore magna aliqua. Ut
                  enim ad minim veniam, t nostrudmt exercitation ullamco laboris
                  nisi ut aliquip e commodo consequat
                </Text>
              </Text>
            </Block>
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
