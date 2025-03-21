import {icon, image} from '@assets';
import {Block, HeaderTitle, Image, MethodPay, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function PhysicalTherapy_ConfirmAndPay() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Xác nhận và thanh toán'} canGoBack />
      <ScrollView contentContainerStyle={{paddingBottom: 120}}>
        <Block marginTop={20} marginHorizontal={12}>
          <Text fontSize={15} semiBold color={COLORS.black2}>
            Vị trí làm việc
          </Text>
          <Block
            radius={8}
            backgroundColor={COLORS.white}
            marginTop={15}
            paddingBottom={15}>
            <Block marginTop={13} marginHorizontal={12}>
              <Block>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_position_address}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={15}
                    medium
                    color={COLORS.black1}
                    marginLeft={8}>
                    Công ty
                  </Text>
                </Block>
                <Text
                  marginTop={11}
                  marginLeft={30}
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}>
                  107 đường Cộng Hòa, Phường 12, quận Tân Bình, Tp.HCM
                </Text>
              </Block>
              <Block marginTop={15}>
                <Block
                  absolute
                  right={0}
                  width={width - 76}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
              </Block>
              <Block marginTop={12}>
                <Block row alignCenter>
                  <Image source={icon.icon_name_user} width={22} height={22} />
                  <Text
                    fontSize={15}
                    medium
                    color={COLORS.black1}
                    marginLeft={8}>
                    Lâm Minh Hoàng
                  </Text>
                </Block>
                <Text
                  marginTop={11}
                  marginLeft={30}
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}>
                  0909 123 456
                </Text>
                <Block
                  absolute
                  right={0}
                  top={0}
                  width={76.83}
                  height={30.33}
                  radius={15}
                  overflow={'hidden'}>
                  <RadialGradient
                    colors={COLORS.gradient5}
                    style={{
                      width: 76.83,
                      height: 30.33,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    center={[10, 10]}
                    radius={100}>
                    <Text fontSize={13} medium color={COLORS.white}>
                      Thay đổi
                    </Text>
                  </RadialGradient>
                </Block>
              </Block>
            </Block>
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Thông tin công việc
          </Text>
          <Block
            radius={8}
            backgroundColor={COLORS.white}
            marginTop={15}
            paddingBottom={16}>
            <Block marginTop={13} marginHorizontal={12}>
              <Block row alignCenter>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_calendar_day}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={8}>
                    Ngày làm việc
                  </Text>
                </Block>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    Thứ 7, 25/01/2025
                  </Text>
                </Block>
              </Block>
              <Block marginTop={13}>
                <Block
                  absolute
                  right={0}
                  width={width - 76}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
              </Block>
              <Block row marginTop={12} alignCenter>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_time_activity}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={8}>
                    Thời gian làm việc
                  </Text>
                </Block>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    4 giờ, 17:30 đến 21:30
                  </Text>
                </Block>
              </Block>
              <Block marginTop={13}>
                <Block
                  absolute
                  right={0}
                  width={width - 76}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
              </Block>
              <Block row marginTop={12} alignCenter>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_calendar_days}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={8}>
                    Lặp lại hàng tuần
                  </Text>
                </Block>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    T4-T5
                  </Text>
                </Block>
              </Block>
              <Block marginTop={13}>
                <Block
                  absolute
                  right={0}
                  width={width - 76}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
              </Block>
              <Block marginTop={12}>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_detail_activity}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={8}>
                    Chi tiết công việc
                  </Text>
                </Block>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.black2}
                  marginLeft={30}
                  marginTop={9}>
                  Chăm sóc người già tại nhà
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  marginLeft={30}
                  marginTop={11}>
                  Ghi chú: Ưu tiên nữ lớn tuổi, có nhiều kinh nghiệm
                </Text>
              </Block>
            </Block>
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Chi tiết thanh toán
          </Text>
          <Block
            radius={8}
            backgroundColor={COLORS.white}
            marginTop={15}
            paddingBottom={16}>
            <Block marginTop={13} marginHorizontal={12}>
              <Block row alignCenter>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Giá dịch vụ
                </Text>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    450.000 đ
                  </Text>
                </Block>
              </Block>
              <Block marginTop={15}>
                <Block
                  absolute
                  right={0}
                  width={width - 76}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
              </Block>
              <Block row alignCenter marginTop={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Tổng thanh toán
                </Text>
                <Block absolute right={0}>
                  <Text fontSize={15} medium color={COLORS.red4}>
                    450.000 đ
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
          <MethodPay top={20} />
        </Block>
      </ScrollView>
      <Block
        height={103}
        width={width}
        absolute
        bottom={0}
        backgroundColor={COLORS.white}>
        <Block marginTop={13} marginHorizontal={12} alignCenter row>
          <Text fontSize={14} regular color={COLORS.black2}>
            Tổng thanh toán
          </Text>
          <Block absolute right={0}>
            <Text fontSize={15} semiBold color={COLORS.red4}>
              450.000 đ
            </Text>
          </Block>
        </Block>
        <Block
          marginTop={13}
          marginHorizontal={12}
          height={43}
          radius={8}
          backgroundColor={COLORS.red4}
          justifyCenter
          alignCenter>
          <Text fontSize={15} regular color={COLORS.white}>
            Đăng việc
          </Text>
        </Block>
      </Block>
    </Block>
  );
}
