import {image} from '@assets';
import {Block, HeaderTitle, Icon, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {root} from 'navigation/navigationRef';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function DetailVoucher() {
  return (
    <Block backgroundColor={COLORS.gray10} flex>
      <Block width={width} height={199.6}>
        <Pressable
          zIndex={10}
          absolute
          left={12}
          top={13}
          width={30}
          height={30}
          backgroundColor={COLORS.black}
          radius={15}
          alignCenter
          opacity={0.6}
          justifyCenter
          onPress={() => root.goBack()}>
          <Icon
            IconType={Ionicons}
            iconName={'chevron-back'}
            iconSize={30}
            iconColor={COLORS.white}
          />
        </Pressable>
        <Image
          source={image.image_header_detail_voucher}
          width={'100%'}
          height={'100%'}
          resizeMode="cover"
        />
      </Block>
      <Block
        width={width - 24}
        height={734}
        marginTop={-19.6}
        marginLeft={12}
        backgroundColor={COLORS.white}
        radius={8}>
        <Block width={width - 48} marginLeft={12}>
          <Text
            fontSize={18}
            semiBold
            color={COLORS.black1}
            uppercase
            marginTop={12}>
            Giảm 20%, tối đa 100K
          </Text>
          <Text marginTop={7} fontSize={12} regular color={COLORS.placeholder}>
            HSD: {'20/12/2025'}
          </Text>
          <Block
            height={40}
            radius={5}
            marginTop={15}
            backgroundColor={COLORS.yellow3}
            justifyCenter
            alignCenter>
            <Block height={23} row alignCenter>
              <Text
                uppercase
                fontSize={16}
                medium
                color={COLORS.red4}
                marginTop={0}>
                SAN21CVG4506
              </Text>
              <Pressable marginLeft={10}>
                <Icon
                  IconType={Ionicons}
                  iconName={'copy-outline'}
                  iconColor={COLORS.red4}
                  iconSize={21}
                />
              </Pressable>
            </Block>
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black1} marginTop={20}>
            Ưu đãi
          </Text>
          <Text
            fontSize={14}
            regular
            color={COLORS.black1}
            marginTop={15}
            lineHeight={22}>
            Đặt ngay dịch vụ trông trẻ trên app SAN Nhập mã PHUNUSAN giảm ngay
            30% khi sử dụng dịch vụ tại ứng dụng SAN
          </Text>
          <Text fontSize={15} semiBold color={COLORS.black1} marginTop={24}>
            Điều kiện áp dụng
          </Text>
          <Text
            fontSize={14}
            regular
            color={COLORS.black1}
            marginTop={15}
            lineHeight={22}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been industry's standard dummy text ever
            since the 1500s, when anm unknown printer took a galley of type and
            scrambledt it to make a type specimen book. It has survived t only
            five centuries, but also the leap into electritypesetting, remaining
            essentially unchanged. It was popularisn in the 1960s with the
            release of Letraset sheeticontaining Lorem Ipsum passages, and more
            recently wt desktop publishing software like Aldus PageMaker
            incliversions of Lorem Ipsum.
          </Text>
        </Block>
      </Block>
    </Block>
  );
}
