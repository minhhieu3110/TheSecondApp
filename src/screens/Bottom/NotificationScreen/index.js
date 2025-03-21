import {icon, image} from '@assets';
import {Block, Image, Pressable, Text, Icon} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useState} from 'react';
import {Modal, SafeAreaView, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function NotificationScreen() {
  const [detailNotification, setDetailNotification] = useState(0);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width} height={53} backgroundColor={COLORS.white}>
        <Text
          marginLeft={12}
          marginTop={20}
          fontSize={15}
          semiBold
          color={COLORS.black1}>
          Thông báo
        </Text>
      </Block>
      <Block width={width - 24} marginLeft={12} marginTop={15}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 300}}
          showsVerticalScrollIndicator={false}>
          {Array.from({length: 5}).map((_, index) => (
            <Pressable
              onPress={() => setDetailNotification(!detailNotification)}
              key={index}
              height={108}
              radius={8}
              backgroundColor={COLORS.white}
              paddingBottom={12}
              marginBottom={12}>
              <Block
                marginLeft={12}
                marginTop={12}
                height={77}
                row
                paddingBottom={12}>
                <Block width={60} height={60}>
                  <Image
                    source={icon.icon_notification_1}
                    width={'100%'}
                    height={'100%'}
                    resizeMode="contain"
                  />
                </Block>
                <Block width={294} height={67} marginTop={10} marginLeft={12}>
                  <Text fontSize={15} semiBold color={COLORS.black2}>
                    Khuyến mãi 30% tất cả dịch vụ
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.black1}
                    marginBottom={14}
                    numberOfLines={1}>
                    Nhân dịp Giỗ tổ Hùng Vương, chúng tôi...Nhân dịp Giỗ tổ Hùng
                    Vương, chúng tôi...
                  </Text>
                  <Text fontSize={14} regular color={COLORS.placeholder}>
                    13:45, 22/02/2025
                  </Text>
                </Block>
              </Block>
            </Pressable>
          ))}
        </ScrollView>
      </Block>
      <Modal visible={detailNotification} transparent="fade">
        <SafeAreaView style={{flex: 1}}>
          <Block flex backgroundColor={COLORS.gray10}>
            <Block width={width} height={199.6}>
              <Image
                source={image.image_notification}
                width={width}
                height={199.6}
                resizeMode="cover"
              />
              <Pressable
                onPress={() => setDetailNotification(!detailNotification)}
                width={30}
                height={30}
                radius={50}
                absolute
                top={13}
                left={12}
                backgroundColor={COLORS.black}
                opacity={0.6}>
                <Icon
                  IconType={Ionicons}
                  iconName={'chevron-back-outline'}
                  iconSize={30}
                  iconColor={COLORS.white}
                />
              </Pressable>
            </Block>
            <Block
              marginTop={-19.6}
              width={width - 24}
              paddingBottom={27}
              radius={8}
              backgroundColor={COLORS.white}
              marginLeft={12}>
              <Block marginTop={12} marginHorizontal={12} width={width - 48}>
                <Text
                  fontSize={18}
                  semiBold
                  color={COLORS.black1}
                  lineHeight={22}>
                  Khuyến mãi 30% tất cả dịch vụ nhân dịp quốc tế phụ nữ 8/3
                </Text>
                <Text
                  fontSize={15}
                  semiBold
                  color={COLORS.black1}
                  marginTop={27}>
                  Ưu đãi
                </Text>
                <Text
                  marginTop={15}
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  lineHeight={22}>
                  Đặt ngay dịch vụ trông trẻ trên app SAN Nhập mã PHUNUSAN giảm
                  ngay 30% khi sử dụng dịch vụ tại ứng dụng SAN
                </Text>
                <Text
                  marginTop={24}
                  fontSize={15}
                  semiBold
                  color={COLORS.black1}>
                  Điều kiện áp dụng
                </Text>
                <Text
                  marginTop={15}
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  lineHeight={22}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been industry's standard
                  dummy text ever since the 1500s, when anm unknown printer took
                  a galley of type and scrambledt it to make a type specimen
                  book. It has survived t only five centuries, but also the leap
                  into electritypesetting, remaining essentially unchanged. It
                  was popularisn in the 1960s with the release of Letraset
                  sheeticontaining Lorem Ipsum passages, and more recently wt
                  desktop publishing software like Aldus PageMaker incliversions
                  of Lorem Ipsum.
                </Text>
              </Block>
            </Block>
          </Block>
        </SafeAreaView>
      </Modal>
    </Block>
  );
}
