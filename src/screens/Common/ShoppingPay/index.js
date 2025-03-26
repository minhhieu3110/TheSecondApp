import {icon, image} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Image,
  MethodPay,
  ModalSuccess,
  Pressable,
  Switch,
  Text,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {formatCurrency} from '@utils';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';

export default function Shopping_Pay() {
  const [usePoint, setUsePoint] = useState(0);
  const [show, setShow] = useState(0);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Xác nhận và thanh toán'} />
      <ScrollView contentContainerStyle={{paddingBottom: 179}}>
        <Block marginTop={20} marginHorizontal={12}>
          <Text fontSize={16} semiBold color={COLORS.black2}>
            Thông tin nhận hàng
          </Text>
          <Block
            marginTop={15}
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
              <Block
                width={76.83}
                height={30.33}
                radius={15}
                overflow={'hidden'}
                absolute
                top={0}
                right={0}>
                <RadialGradient
                  colors={COLORS.gradient5}
                  style={{
                    width: 76.83,
                    height: 30.33,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text fontSize={13} medium color={COLORS.white}>
                    Thay đổi
                  </Text>
                </RadialGradient>
              </Block>
            </Block>
          </Block>
          <Text marginTop={19} fontSize={16} semiBold color={COLORS.black2}>
            Sản phẩm
          </Text>
          <Block marginTop={15} gap={12}>
            {Array.from({length: 5}).map((_, index) => (
              <Block
                key={index}
                paddingBottom={14}
                radius={8}
                backgroundColor={COLORS.white}>
                <Block row marginLeft={12} marginTop={12} marginRight={17}>
                  <Image
                    source={image.image_product_1}
                    height={73}
                    width={73}
                  />
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
          <MethodPay top={20} />
          <Block marginTop={15} row alignCenter>
            <Text fontSize={14} regular color={COLORS.black2}>
              Dùng điểm tích luỹ
            </Text>
            <Block row rowGap={10} absolute right={0}>
              <Text fontSize={14} medium color={COLORS.black2}>
                3000 điểm
              </Text>
              <Block marginLeft={10}>
                <Switch value={usePoint} onValueChange={setUsePoint} />
              </Block>
            </Block>
          </Block>
          <Block marginTop={25}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Đơn hàng của bạn
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
          <Text
            center
            marginHorizontal={10}
            marginTop={15}
            fontSize={14}
            regular
            color={COLORS.black2}>
            Nhấn vào nút "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
            <Text color={COLORS.red4}> Điều khoản</Text> SAN
          </Text>
        </Block>
      </ScrollView>
      <Block
        absolute
        bottom={0}
        backgroundColor={COLORS.white}
        width={width}
        paddingBottom={12}>
        <Block marginHorizontal={12} marginTop={13}>
          <Block>
            <Block rowCenter spaceBetween>
              <Text fontSize={14} regular color={COLORS.black2}>
                Tổng thanh toán
              </Text>
              <Text fontSize={15} semiBold color={COLORS.red4}>
                {formatCurrency('127597000')}
              </Text>
            </Block>
          </Block>
        </Block>
        <Pressable
          onPress={() => setShow(!show)}
          marginTop={13}
          marginHorizontal={12}
          backgroundColor={COLORS.red4}
          radius={8}
          justifyCenter
          alignCenter
          height={48}>
          <Text fontSize={15} regular color={COLORS.white}>
            Đặt hàng
          </Text>
        </Pressable>
      </Block>
      <ModalSuccess visible={show} close={() => setShow(0)} />
    </Block>
  );
}
