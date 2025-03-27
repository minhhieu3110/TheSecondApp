import {image} from '@assets';
import {Block, Image, Pressable, Text} from '@components';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {formatCurrency} from '@utils';
import {ScrollView} from 'react-native';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
export default function Shipping() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block marginTop={15} gap={12} marginHorizontal={12}>
        <ScrollView contentContainerStyle={{paddingBottom: 500}}>
          <Pressable
            onPress={() => commonRoot.navigate(router.DETAIL_SHIPPING)}
            paddingBottom={15}
            backgroundColor={COLORS.white}
            radius={8}>
            <Block marginTop={18} marginLeft={12}>
              <Text fontSize={17} semiBold color={COLORS.black2}>
                #1269087AC
              </Text>
              <Text
                marginTop={15}
                fontSize={15}
                regular
                color={COLORS.placeholder}>
                13:47, ngày 21/02/2025
              </Text>
            </Block>
            <Block
              absolute
              top={16}
              right={12}
              backgroundColor={COLORS.pinkWhite2}
              radius={15}
              paddingHorizontal={20}
              paddingVertical={5}>
              <Text fontSize={13} regular color={COLORS.darkRed1}>
                Đang giao
              </Text>
            </Block>
            <Block
              borderWidth={1}
              borderColor={COLORS.borderColor1}
              marginTop={16}
            />
            <Block marginTop={13} marginLeft={12} marginRight={17} row>
              <Image source={image.image_product_1} width={73} height={73} />
              <Block marginTop={3} marginLeft={8} width={width - 134}>
                <Text
                  marginLeft={4}
                  fontSize={15}
                  medium
                  color={COLORS.black2}
                  numberOfLines={1}>
                  Xe đạp tập thể dục OKACHI JP-599A
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.black2}
                  marginTop={14}>
                  x1
                </Text>
                <Block marginTop={12} row columnGap={20} alignCenter>
                  <Text fontSize={14} regular color={COLORS.red4}>
                    {formatCurrency(40200000)}
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.lightGray1}
                    lineThrough>
                    {formatCurrency(40990000)}
                  </Text>
                </Block>
              </Block>
            </Block>
            <Block
              borderWidth={1}
              borderColor={COLORS.borderColor1}
              marginTop={15}
            />
            <Block marginLeft={12} marginTop={16}>
              <Text fontSize={14} regular color={COLORS.red4}>
                Đơn hàng đang trên đường giao đến bạn
              </Text>
              <Text
                fontSize={15}
                regular
                color={COLORS.placeholder}
                marginTop={11}>
                Quý khách hàng sẽ sớm nhận được sản phẩm
              </Text>
            </Block>
          </Pressable>
        </ScrollView>
      </Block>
    </Block>
  );
}
