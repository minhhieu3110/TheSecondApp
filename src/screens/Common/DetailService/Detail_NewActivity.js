import {icon} from '@assets';
import {
  Block,
  HeaderTitle,
  Icon,
  Image,
  Pressable,
  Text,
  PolicyCancelPackageService,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {root} from 'navigation/navigationRef';
import {useState} from 'react';
import {ScrollView, Modal, SafeAreaView, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Detail_NewActivity() {
  const [show, setShow] = useState(0);
  const [showNotification, setShowNotification] = useState(0);
  const handleConfirmCancel = () => {
    setShow(!show);
    setShowNotification(!showNotification);
  };

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
            backgroundColor={COLORS.pinkWhite2}
            row
            alignCenter>
            <Image
              source={icon.icon_user_activity}
              width={42}
              height={42}
              marginLeft={11.7}
            />
            <Block marginLeft={13.3}>
              <Text fontSize={14} medium color={COLORS.red4}>
                Đang chờ người nhận việc
              </Text>
              <Text fontSize={14} regular color={COLORS.black2}>
                Quý khách hàng vui lòng chờ trong vài phút
              </Text>
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
            <Pressable
              onPress={() => setShow(!show)}
              width={(width - 24) / 2 - 6}
              justifyCenter
              alignCenter
              borderWidth={1}
              borderColor={COLORS.red4}
              radius={8}>
              <Text fontSize={15} regular color={COLORS.red4}>
                Huỷ dịch vụ
              </Text>
            </Pressable>
            <Block
              width={(width - 24) / 2 - 6}
              justifyCenter
              alignCenter
              borderWidth={1}
              borderColor={COLORS.red4}
              radius={8}
              backgroundColor={COLORS.red4}
              marginLeft={12}>
              <Text fontSize={15} regular color={COLORS.white}>
                Hỗ trợ
              </Text>
            </Block>
          </Block>
        </Block>
      </ScrollView>
      <Modal visible={show} transparent={false} animationType="fade">
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Block
              width={width - 24}
              paddingBottom={12}
              backgroundColor={COLORS.gray10}
              radius={15}>
              <Block height={42.43} alignCenter justifyCenter>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Lý do huỷ việc
                </Text>
                <Pressable absolute right={0} onPress={() => setShow(!show)}>
                  <Icon
                    IconType={Ionicons}
                    iconName={'close'}
                    iconSize={30}
                    iconColor={COLORS.black2}
                  />
                </Pressable>
              </Block>
              <Block marginTop={19.6} width={width - 48} marginHorizontal={12}>
                <Block
                  justifyCenter
                  height={45}
                  radius={8}
                  backgroundColor={COLORS.white}>
                  <Text
                    marginLeft={12}
                    fontSize={14}
                    color={COLORS.placeholder}>
                    Bận việc đột xuất
                  </Text>
                </Block>
                <Block
                  marginTop={12}
                  justifyCenter
                  height={45}
                  radius={8}
                  backgroundColor={COLORS.white}>
                  <Text
                    marginLeft={12}
                    fontSize={14}
                    color={COLORS.placeholder}>
                    Nhầm ngày
                  </Text>
                </Block>
                <Block
                  justifyCenter
                  height={45}
                  radius={8}
                  backgroundColor={COLORS.white}
                  marginTop={12}>
                  <Text
                    marginLeft={12}
                    fontSize={14}
                    color={COLORS.placeholder}>
                    Không cần dịch vụ này nữa
                  </Text>
                </Block>
                <Block
                  justifyCenter
                  height={45}
                  radius={8}
                  backgroundColor={COLORS.white}
                  marginTop={12}>
                  <Text
                    marginLeft={12}
                    fontSize={14}
                    color={COLORS.placeholder}>
                    Chưa có nguời nhận
                  </Text>
                </Block>
                <Block
                  justifyCenter
                  height={45}
                  radius={8}
                  backgroundColor={COLORS.white}
                  marginTop={12}>
                  <Text
                    marginLeft={12}
                    fontSize={14}
                    color={COLORS.placeholder}>
                    Lý do khác
                  </Text>
                </Block>
              </Block>
              <Pressable
                onPress={handleConfirmCancel}
                backgroundColor={COLORS.red4}
                height={48}
                width={width - 48}
                marginTop={30}
                alignCenter
                justifyCenter
                radius={8}
                marginHorizontal={12}>
                <Text fontSize={15} regular color={COLORS.white}>
                  Đồng ý
                </Text>
              </Pressable>
            </Block>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
      <Modal
        visible={showNotification}
        transparent={false}
        animationType="fade">
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.6)',
            }}>
            <Block
              width={width - 24}
              paddingBottom={12}
              backgroundColor={COLORS.gray10}
              radius={15}>
              <Block height={42.43} alignCenter justifyCenter>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Thông báo
                </Text>
                <Pressable absolute right={0} onPress={handleConfirmCancel}>
                  <Icon
                    IconType={Ionicons}
                    iconName={'close'}
                    iconSize={30}
                    iconColor={COLORS.black2}
                  />
                </Pressable>
              </Block>
              <Block marginTop={23.6} marginHorizontal={12} width={width - 48}>
                <Block
                  height={44}
                  backgroundColor={COLORS.pinkWhite2}
                  alignCenter>
                  <Block
                    width={width - 72}
                    height={44}
                    justifyCenter
                    alignCenter>
                    <Text fontSize={14} regular color={COLORS.red4}>
                      Bạn đã huỷ công việc trong 7 ngày
                    </Text>
                  </Block>
                </Block>
                <Text
                  fontSize={14}
                  semiBold
                  color={COLORS.black2}
                  marginTop={15}>
                  Bạn được hủy miễn phí trong 3 trường hợp sau:
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.black2}
                  marginTop={20}
                  lineHeight={22}>
                  1 - Hủy trong 10 phút sau khi đăng việc {'\n'} 2 - Hủy khi
                  chưa có ai nhận việc {'\n'} 3 - Hủy trước giờ làm việc ít nhất
                  6 tiếng
                </Text>
                <Text
                  fontSize={14}
                  semiBold
                  color={COLORS.black2}
                  marginTop={19}>
                  Ngoài 3 trường hợp trên chúng tôi sẽ tính phí:
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.black2}
                  marginTop={20}
                  lineHeight={22}>
                  1 - 20.000đ nếu hủy trước công việc bắt đầu 1 tiếng{'\n'}2 -
                  30% giá trị coongg việc nếu hủy từ sau 1 tiếng bắt đầu công
                  việc
                </Text>
                <Text
                  fontSize={18}
                  semiBold
                  color={COLORS.red4}
                  center
                  marginTop={19}>
                  Phí huỷ: 0đ
                </Text>
                <Text
                  marginTop={22}
                  lineHeight={22}
                  fontSize={14}
                  italic
                  color={COLORS.red4}>
                  Độ tin cậy của bạn sẽ giảm đáng kể nếu bạn hủy nhiều lần. Bạn
                  chắc chân hủy công việc này?
                </Text>
                <Block marginTop={37} row height={48}>
                  <Block
                    width={(width - 48) / 2 - 6}
                    justifyCenter
                    alignCenter
                    borderWidth={1}
                    borderColor={COLORS.red4}
                    radius={8}>
                    <Text fontSize={15} regular color={COLORS.red4}>
                      Đồng ý
                    </Text>
                  </Block>
                  <Pressable
                    onPress={() => root.goBack()}
                    marginLeft={12}
                    width={(width - 48) / 2 - 6}
                    justifyCenter
                    alignCenter
                    backgroundColor={COLORS.red4}
                    radius={8}>
                    <Text fontSize={15} regular color={COLORS.white}>
                      Bỏ qua
                    </Text>
                  </Pressable>
                </Block>
              </Block>
            </Block>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </Block>
  );
}
