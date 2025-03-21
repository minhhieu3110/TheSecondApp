import {icon, image} from '@assets';
import {Block, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {ScrollView} from 'react-native';

export default function NewActivity() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 1000}}>
        <Block width={width - 24} marginTop={15} marginHorizontal={12}>
          {/* {Array.from({length: 5}).map((_, index) => ( */}
          <Pressable
            onPress={() => commonRoot.navigate(router.DETAIL_NEW_ACTIVITY)}
            // key={index}
            paddingBottom={13.9}
            backgroundColor={COLORS.white}
            radius={8}
            marginBottom={15}>
            <Block marginTop={18} marginLeft={12}>
              <Text fontSize={17} semiBold color={COLORS.red4}>
                Dịch vụ chăm sóc người già
              </Text>
              <Text
                marginTop={16}
                fontSize={14}
                regular
                color={COLORS.placeholder}>
                13:47, ngày 21/02/2025
              </Text>
            </Block>
            <Block
              width={width - 327}
              height={29}
              backgroundColor={COLORS.pinkWhite2}
              justifyCenter
              alignCenter
              radius={15}
              absolute
              top={12}
              right={12}>
              <Text fontSize={13} regular color={COLORS.red4}>
                Mới đăng
              </Text>
            </Block>
            <Block
              marginTop={16}
              paddingBottom={19}
              paddingVertical={12}
              borderWidth={1}
              borderColor={COLORS.gray11}>
              <Block marginLeft={23} row marginBottom={12}>
                <Image source={icon.icon_calendar_day} width={22} height={22} />
                <Text
                  marginLeft={8}
                  fontSize={14}
                  regular
                  color={COLORS.black1}>
                  Thứ 7, 25/02/2025
                </Text>
              </Block>
              <Block marginLeft={23} row marginBottom={12}>
                <Image
                  source={icon.icon_time_activity}
                  width={22}
                  height={22}
                />
                <Text
                  marginLeft={8}
                  fontSize={14}
                  regular
                  color={COLORS.black1}>
                  4 giờ, 12:30 đến 16:30
                </Text>
              </Block>
              <Block marginLeft={23} row marginBottom={12}>
                <Image
                  source={icon.icon_price_service}
                  width={22}
                  height={22}
                />
                <Text marginLeft={8} fontSize={14} regular color={COLORS.red4}>
                  600.000 đ
                </Text>
              </Block>
              <Block marginLeft={23} row>
                <Image
                  source={icon.icon_position_address}
                  width={22}
                  height={22}
                />
                <Text
                  marginLeft={8}
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  numberOfLines={2}>
                  107 đường Cộng Hòa, Phường 12, quận Tân Bình, Tp.HCM
                </Text>
              </Block>
            </Block>
            <Block
              marginLeft={11.7}
              marginTop={14.1}
              row
              width={width - 101.74}
              height={42}
              alignCenter>
              <Block width={42} height={42} radius={50}>
                <Image
                  width={42}
                  height={42}
                  source={icon.icon_user_activity}
                  resizeMode="contain"
                  radius={50}
                />
              </Block>
              <Block marginLeft={13.3} height={40}>
                <Text fontSize={14} regular color={COLORS.red4}>
                  Đang chờ người nhận việc
                </Text>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Quý khách hàng vui lòng chờ trong vài phút
                </Text>
              </Block>
            </Block>
          </Pressable>
          {/* ))} */}
        </Block>
      </ScrollView>
    </Block>
  );
}
