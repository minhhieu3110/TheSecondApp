import {icon} from '@assets';
import {Block, HeaderTitle, Image, Text} from '@components';
import {COLORS} from '@theme';
import {image} from '@assets';
import {width} from '@responsive';
import {formatCurrency} from '@utils';
import {ScrollView} from 'react-native';
export default function Detail_Confirm_Order() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Chi tiết đơn hàng'} />
      <ScrollView contentContainerStyle={{paddingBottom: 279}}>
        <Block marginTop={16} marginHorizontal={12}>
          <Block
            backgroundColor={COLORS.pinkWhite2}
            radius={8}
            paddingVertical={12}
            paddingLeft={12}
            paddingRight={18}>
            <Block rowCenter>
              <Image
                source={icon.icon_shopping_confirm}
                width={53}
                height={53}
              />
              <Block marginLeft={15}>
                <Text fontSize={14} medium color={COLORS.red4}>
                  Xác nhận
                </Text>
                <Text
                  marginTop={11}
                  fontSize={14}
                  regular
                  color={COLORS.black2}>
                  Đơn hàng sẽ được giao đến bạn
                </Text>
              </Block>
            </Block>
          </Block>
          <Text marginTop={20} fontSize={15} semiBold color={COLORS.black2}>
            Thông tin nhận hàng
          </Text>
          <Block
            marginTop={16}
            radius={8}
            backgroundColor={COLORS.white}
            paddingBottom={19}>
            <Block marginHorizontal={12} marginTop={12}>
              <Block row alignCenter>
                <Image source={icon.icon_name_user} width={22} height={22} />
                <Text fontSize={15} medium color={COLORS.black2} marginLeft={8}>
                  Lâm Minh Hoàng
                </Text>
              </Block>
              <Text
                marginTop={13}
                marginLeft={30}
                fontSize={14}
                regular
                color={COLORS.red4}>
                0909 123 456
              </Text>
              <Text
                marginTop={11}
                marginLeft={30}
                fontSize={14}
                regular
                color={COLORS.black2}
                numberOfLines={2}>
                107 đường Cộng Hòa, Phường 12, quận Tân Bình, Tp.HCM
              </Text>
            </Block>
          </Block>
          <Text marginTop={19} fontSize={16} semiBold color={COLORS.black2}>
            Sản phẩm
          </Text>
          <Block marginTop={15} gap={12}>
            {Array.from({length: 3}).map((_, index) => (
              <Block
                key={index}
                paddingBottom={14}
                radius={8}
                backgroundColor={COLORS.white}>
                <Block
                  rowCenter
                  marginLeft={12}
                  marginTop={12}
                  marginRight={17}>
                  <Block width={73} height={73} radius={5} overflow={'hidden'}>
                    <Image
                      source={image.image_san}
                      height={'100%'}
                      width={'100%'}
                      resizeMode="cover"
                    />
                  </Block>

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
              </Block>
            ))}
          </Block>
          <Block marginTop={20}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Chi tiết thanh toán
            </Text>
            <Block
              radius={8}
              backgroundColor={COLORS.white}
              marginTop={15}
              paddingBottom={15}>
              <Block marginHorizontal={12} marginTop={16}>
                <Block>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.placeholder}>
                      Tổng tiền
                    </Text>
                    <Text fontSize={15} medium color={COLORS.black2}>
                      {formatCurrency('120600000')}
                    </Text>
                  </Block>
                  <Block
                    borderWidth={1}
                    borderColor={COLORS.borderColor1}
                    marginTop={15}
                  />
                </Block>
              </Block>
              <Block marginHorizontal={12} marginTop={16}>
                <Block>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.placeholder}>
                      Voucher
                    </Text>
                    <Text fontSize={15} medium color={COLORS.red4}>
                      -{formatCurrency('3000000')}
                    </Text>
                  </Block>
                  <Block
                    borderWidth={1}
                    borderColor={COLORS.borderColor1}
                    marginTop={15}
                  />
                </Block>
              </Block>
              <Block marginHorizontal={12} marginTop={16}>
                <Block>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.placeholder}>
                      Điểm tích luỹ
                    </Text>
                    <Text fontSize={15} medium color={COLORS.black2}>
                      -{formatCurrency('3000')}
                    </Text>
                  </Block>
                  <Block
                    borderWidth={1}
                    borderColor={COLORS.borderColor1}
                    marginTop={15}
                  />
                </Block>
              </Block>
              <Block marginHorizontal={12} marginTop={16}>
                <Block>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.placeholder}>
                      Tổng thanh toán
                    </Text>
                    <Text fontSize={15} medium color={COLORS.red4}>
                      {formatCurrency('127597000')}
                    </Text>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block marginTop={28} row gap={12}>
            <Block
              width={(width - 36) / 2}
              height={48}
              radius={8}
              borderColor={COLORS.red4}
              borderWidth={1}
              justifyCenter
              alignCenter>
              <Text fontSize={15} regular color={COLORS.red4}>
                Huỷ đơn
              </Text>
            </Block>
            <Block
              width={(width - 36) / 2}
              height={48}
              radius={8}
              backgroundColor={COLORS.red4}
              justifyCenter
              alignCenter>
              <Text fontSize={15} regular color={COLORS.white}>
                Hỗ trợ
              </Text>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
