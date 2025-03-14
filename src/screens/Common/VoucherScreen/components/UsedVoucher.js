import {image} from '@assets';
import {Block, Image, Pressable, Text, TicketVoucherShape} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';

export default function UsedVoucher() {
  return (
    <Block backgroundColor={COLORS.gray10} flex>
      <Block marginTop={15}>
        <Pressable disabled>
          <Block
            width={width - 24}
            marginLeft={12}
            // marginTop={15}
            marginBottom={12}>
            <Block height={150} backgroundColor={COLORS.white} radius={15} row>
              <Block
                opacity={0.62}
                width={width - 335.94}
                height={117.98}
                marginTop={16}
                marginLeft={13.8}
                radius={11}>
                <Image
                  source={image.image_voucher_san}
                  resizeMode="contain"
                  width={'100%'}
                  height={'100%'}
                />
              </Block>
              <TicketVoucherShape />
              <Block
                width={width - 197}
                height={107}
                marginLeft={15.5}
                marginTop={20}>
                <Text fontSize={12} regular color={COLORS.placeholder}>
                  HSD: {'20/12/2025'}
                </Text>
                <Text
                  fontSize={16}
                  semiBold
                  color={COLORS.black1}
                  uppercase
                  marginTop={14}>
                  Giảm 20%, tối đa 100K
                </Text>
                <Text fontSize={12} regular color={COLORS.black1}>
                  Áp dụng cho tất cả dịch vụ tại SAN
                </Text>
                <Text fontSize={12} regular color={COLORS.red4} marginTop={28}>
                  Xem chi tiết
                </Text>
              </Block>
            </Block>
          </Block>
        </Pressable>
        <Pressable disabled>
          <Block
            width={width - 24}
            marginLeft={12}
            // marginTop={15}
            marginBottom={12}>
            <Block height={150} backgroundColor={COLORS.white} radius={15} row>
              <Block
                opacity={0.62}
                width={width - 335.94}
                height={117.98}
                marginTop={16}
                marginLeft={13.8}
                radius={11}>
                <Image
                  source={image.image_voucher_san}
                  resizeMode="contain"
                  width={'100%'}
                  height={'100%'}
                />
              </Block>
              <TicketVoucherShape />
              <Block
                width={width - 197}
                height={107}
                marginLeft={15.5}
                marginTop={20}>
                <Text fontSize={12} regular color={COLORS.placeholder}>
                  HSD: {'20/12/2025'}
                </Text>
                <Text
                  fontSize={16}
                  semiBold
                  color={COLORS.black1}
                  uppercase
                  marginTop={14}>
                  Giảm 20%, tối đa 100K
                </Text>
                <Text fontSize={12} regular color={COLORS.black1}>
                  Áp dụng cho tất cả dịch vụ tại SAN
                </Text>
                <Text fontSize={12} regular color={COLORS.red4} marginTop={28}>
                  Xem chi tiết
                </Text>
              </Block>
            </Block>
          </Block>
        </Pressable>
      </Block>
    </Block>
  );
}
