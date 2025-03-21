import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Icon,
  Image,
  Text,
  PolicyCancelPackageService,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
export default function Detail_Doing() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Chi tiết dịch vụ'} canGoBack />
      <ScrollView
        contentContainerStyle={{paddingBottom: 153}}
        showsVerticalScrollIndicator={false}>
        <Block marginTop={12} marginHorizontal={12}>
          <Block
            width={width - 24}
            height={72}
            radius={8}
            backgroundColor={COLORS.greenWhite}
            row
            alignCenter>
            <Image
              source={image.image_staff}
              width={42}
              height={42}
              radius={50}
              marginLeft={11.7}
            />
            <Block marginLeft={13.3} width={width - 101}>
              <Text fontSize={14} medium color={COLORS.black1}>
                Lê Thu Huyền
              </Text>
              <Block row alignCenter>
                <Text fontSize={14} regular color={COLORS.black2}>
                  4.8
                </Text>
                <Icon
                  marginLeft={5}
                  IconType={Ionicons}
                  iconName={'star'}
                  iconSize={18}
                  iconColor={COLORS.yellow3}
                />
              </Block>
              <Block absolute top={0} right={0} row alignCenter>
                <Text fontSize={14} regular color={COLORS.black2}>
                  Hồ sơ
                </Text>
                <Icon
                  IconType={MaterialIcon}
                  iconName={'keyboard-arrow-right'}
                  iconColor={COLORS.black2}
                  iconSize={18}
                />
              </Block>
            </Block>
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Vị trí làm việc
          </Text>
          <Block
            paddingBottom={15}
            radius={8}
            backgroundColor={COLORS.white}
            marginTop={15}>
            <Block width={width - 48} marginHorizontal={12} marginTop={14}>
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
                    color={COLORS.black2}
                    marginLeft={8}>
                    Công ty
                  </Text>
                </Block>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  marginLeft={30}
                  marginTop={11}
                  numberOfLines={2}>
                  107 đường Cộng Hòa, Phường 12, quận Tân Bình, Tp.HCM
                </Text>
              </Block>
              <Block
                absolute
                top={85}
                right={0}
                width={width - 76}
                borderWidth={1}
                borderColor={COLORS.borderColor1}
              />
              <Block marginTop={28}>
                <Block row alignCenter>
                  <Image source={icon.icon_name_user} width={22} height={22} />
                  <Text
                    fontSize={15}
                    medium
                    color={COLORS.black2}
                    marginLeft={8}>
                    Lâm Minh Hoàng
                  </Text>
                </Block>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  marginLeft={30}
                  marginTop={11}
                  numberOfLines={2}>
                  0909 123 456
                </Text>
              </Block>
            </Block>
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Thông tin công việc
          </Text>
          <Block
            paddingBottom={15}
            radius={8}
            backgroundColor={COLORS.white}
            marginTop={15}>
            <Block width={width - 48} marginHorizontal={12} marginTop={14}>
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
              <Block
                marginTop={13}
                marginLeft={28}
                width={width - 76}
                borderWidth={1}
                borderColor={COLORS.borderColor1}
                marginBottom={12}
              />
              <Block row alignCenter>
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
              <Block
                marginTop={13}
                marginLeft={28}
                width={width - 76}
                borderWidth={1}
                borderColor={COLORS.borderColor1}
                marginBottom={12}
              />

              <Block>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_detail_activity}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={15}
                    medium
                    color={COLORS.black2}
                    marginLeft={8}>
                    Chi tiết công việc
                  </Text>
                </Block>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  marginLeft={30}
                  marginTop={9}>
                  Chăm sóc người già tại nhà
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.black2}
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
            paddingBottom={15}
            radius={8}
            backgroundColor={COLORS.white}
            marginTop={19}>
            <Block width={width - 48} marginHorizontal={12} marginTop={16}>
              <Block row alignCenter>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Giá gói
                </Text>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.placeholder}>
                    2.050.000 đ
                  </Text>
                </Block>
              </Block>
              <Block
                marginTop={15}
                marginLeft={28}
                width={width - 48}
                borderWidth={1}
                borderColor={COLORS.borderColor1}
                marginBottom={16}
              />
              <Block row alignCenter>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Khuyến mãi
                </Text>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    -50.000 đ
                  </Text>
                </Block>
              </Block>
              <Block
                marginTop={15}
                marginLeft={28}
                width={width - 48}
                borderWidth={1}
                borderColor={COLORS.borderColor1}
                marginBottom={16}
              />
              <Block row alignCenter>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Phương thức thanh toán
                </Text>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.placeholder}>
                    Tiền mặt
                  </Text>
                </Block>
              </Block>
              <Block
                marginTop={15}
                marginLeft={28}
                width={width - 48}
                borderWidth={1}
                borderColor={COLORS.borderColor1}
                marginBottom={16}
              />
              <Block row alignCenter>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Tổng thanh toán
                </Text>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.red4}>
                    2.000.000 đ
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
          <PolicyCancelPackageService top={23} title={'Quy định huỷ dịch vụ'} />

          <Block marginTop={23} row height={48}>
            <Block
              width={width - 24}
              justifyCenter
              alignCenter
              borderWidth={1}
              borderColor={COLORS.red4}
              radius={8}
              backgroundColor={COLORS.red4}>
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
