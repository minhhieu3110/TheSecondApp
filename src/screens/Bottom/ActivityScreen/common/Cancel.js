import {icon, image} from '@assets';
import {Block, Image, Text, Icon, Pressable} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Cancel() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 1000}}>
        <Block width={width - 24} marginTop={15} marginHorizontal={12}>
          {/* {Array.from({length: 1}).map((_, index) => ( */}
          <Pressable
            onPress={() => commonRoot.navigate(router.DETAIL_CANCEL)}
            //   key={index}
            backgroundColor={COLORS.white}
            radius={8}
            marginBottom={15}>
            <Block marginTop={18} marginLeft={12}>
              <Text fontSize={17} semiBold color={COLORS.black1}>
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
              backgroundColor={COLORS.gray11}
              justifyCenter
              alignCenter
              radius={15}
              absolute
              top={12}
              right={12}>
              <Text fontSize={13} regular color={COLORS.black1}>
                Huỷ
              </Text>
            </Block>
            <Block
              marginTop={16}
              paddingBottom={19}
              paddingVertical={12}
              borderWidth={1}
              borderColor={COLORS.gray11}>
              <Block marginLeft={23} row marginBottom={12}>
                <Image source={icon.icon_day_cancel} width={22} height={22} />
                <Text
                  marginLeft={8}
                  fontSize={14}
                  regular
                  color={COLORS.black1}>
                  Thứ 7, 25/02/2025
                </Text>
              </Block>
              <Block marginLeft={23} row marginBottom={12}>
                <Image source={icon.icon_time_cancel} width={22} height={22} />
                <Text
                  marginLeft={8}
                  fontSize={14}
                  regular
                  color={COLORS.black1}>
                  4 giờ, 12:30 đến 16:30
                </Text>
              </Block>
              <Block marginLeft={23} row marginBottom={12}>
                <Image source={icon.icon_price_cancel} width={22} height={22} />
                <Text
                  marginLeft={8}
                  fontSize={14}
                  regular
                  color={COLORS.black1}>
                  600.000 đ
                </Text>
              </Block>
              <Block marginLeft={23} row>
                <Image
                  source={icon.icon_address_cancel}
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
          </Pressable>
          {/* ))} */}
        </Block>
      </ScrollView>
    </Block>
  );
}
