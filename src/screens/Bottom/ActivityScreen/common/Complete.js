import {icon, image} from '@assets';
import {Block, Image, Text, Icon, Pressable} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Complete() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 1000}}>
        <Block width={width - 24} marginTop={15} marginHorizontal={12}>
          <Pressable
            onPress={() => commonRoot.navigate(router.DETAIL_COMPLETE)}
            paddingBottom={13.9}
            backgroundColor={COLORS.white}
            radius={8}
            marginBottom={15}>
            <Block marginTop={18} marginLeft={12}>
              <Text fontSize={17} semiBold color={COLORS.darkRed1}>
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
              width={95}
              height={29}
              backgroundColor={COLORS.pinkWhite2}
              justifyCenter
              alignCenter
              radius={15}
              absolute
              top={12}
              right={12}>
              <Text fontSize={13} regular color={COLORS.darkRed1}>
                Hoàn thành
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
              height={42}
              alignCenter>
              <Block width={42} height={42} radius={50}>
                <Image
                  width={42}
                  height={42}
                  source={image.image_staff}
                  resizeMode="contain"
                  radius={50}
                />
              </Block>
              <Block marginLeft={13.3} height={40}>
                <Text fontSize={14} regular color={COLORS.red4}>
                  Lê Thu Huyền
                </Text>
                <Block row>
                  <Text fontSize={14} regular color={COLORS.placeholder}>
                    4.8
                  </Text>
                  <Icon
                    marginLeft={5}
                    IconType={FontAwesome}
                    iconName={'star'}
                    iconSize={18}
                    iconColor={COLORS.yellow3}
                  />
                </Block>
              </Block>
              <Pressable
                onPress={() => commonRoot.navigate(router.EVALUATE_SERVICE)}
                width={152}
                height={42}
                justifyCenter
                alignCenter
                radius={8}
                absolute
                right={10}
                zIndex={10}
                backgroundColor={COLORS.red4}>
                <Text fontSize={15} regular color={COLORS.white}>
                  Đánh giá
                </Text>
              </Pressable>
            </Block>
          </Pressable>
        </Block>
      </ScrollView>
    </Block>
  );
}
