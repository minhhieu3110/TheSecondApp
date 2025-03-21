import {Modal, TouchableOpacity} from 'react-native';
import {Block, Text, Pressable, Icon, Image} from '@components';
import {COLORS} from '@theme';
import {icon} from '@assets';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {width} from '@responsive';
const ModalMethodPay = ({visible, close}) => {
  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="fade"
      onRequestClose={close}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}>
        <Block
          width={width - 24}
          marginHorizontal={12}
          radius={8}
          backgroundColor={COLORS.white}
          paddingBottom={15.3}
          justifyCenter>
          <Text
            fontSize={15}
            semiBold
            color={COLORS.black2}
            marginTop={12}
            center>
            Phương thức thanh toán
          </Text>
          <Pressable
            onPress={close}
            absolute
            top={5}
            right={6}
            width={30}
            height={30}
            radius={50}
            backgroundColor={COLORS.grayWhite}
            justifyCenter
            alignCenter>
            <Icon
              IconType={FontAwesome5}
              iconName={'times'}
              iconColor={COLORS.black1}
              iconSize={14.6}
            />
          </Pressable>
          <Block
            marginTop={23}
            borderTopWidth={1}
            borderColor={COLORS.grayBreak}>
            <Block marginTop={15} marginLeft={24} marginRight={21.2}>
              <Block alignCenter row>
                <Image source={icon.icon_cash} width={24.92} height={24.99} />
                <Text
                  fontSize={16}
                  semiBold
                  color={COLORS.black6}
                  marginLeft={15.1}>
                  Tiền mặt
                </Text>
                <Block
                  width={23}
                  height={23}
                  borderWidth={1}
                  borderColor={COLORS.lightGray1}
                  radius={50}
                  absolute
                  right={0}
                  justifyCenter
                  alignCenter
                  backgroundColor={COLORS.red4}>
                  <Block
                    width={11}
                    height={11}
                    backgroundColor={COLORS.white}
                    radius={50}
                  />
                </Block>
              </Block>
              <Block
                marginTop={15}
                borderWidth={1}
                borderColor={COLORS.grayBreak}
              />
              <Block marginTop={15}>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_logo_san}
                    width={26}
                    height={25.57}
                    radius={5}
                  />
                  <Text
                    fontSize={16}
                    semiBold
                    color={COLORS.black6}
                    marginLeft={15.1}>
                    Tài khoản SAN
                  </Text>
                  <Block
                    width={23}
                    height={23}
                    borderWidth={1}
                    borderColor={COLORS.lightGray1}
                    radius={50}
                    absolute
                    right={0}
                    justifyCenter
                    alignCenter></Block>
                </Block>
                <Text
                  marginLeft={40}
                  marginTop={8.3}
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}>
                  30.000.000 đ
                </Text>
              </Block>
              <Block
                marginTop={15}
                borderWidth={1}
                borderColor={COLORS.grayBreak}
              />
              <Block alignCenter row marginTop={15}>
                <Image
                  source={icon.icon_vnpay}
                  width={26}
                  height={25.57}
                  radius={5}
                />
                <Text
                  fontSize={16}
                  semiBold
                  color={COLORS.black6}
                  marginLeft={15.1}>
                  VN Pay
                </Text>
                <Block
                  width={23}
                  height={23}
                  borderWidth={1}
                  borderColor={COLORS.lightGray1}
                  radius={50}
                  absolute
                  right={0}
                  justifyCenter
                  alignCenter></Block>
              </Block>
              <Block
                marginTop={15}
                borderWidth={1}
                borderColor={COLORS.grayBreak}
              />
              <Block alignCenter row marginTop={15}>
                <Image
                  source={icon.icon_momo}
                  width={26}
                  height={25.57}
                  radius={5}
                />
                <Text
                  fontSize={16}
                  semiBold
                  color={COLORS.black6}
                  marginLeft={15.1}>
                  Ví Momo
                </Text>
                <Block
                  width={23}
                  height={23}
                  borderWidth={1}
                  borderColor={COLORS.lightGray1}
                  radius={50}
                  absolute
                  right={0}
                  justifyCenter
                  alignCenter></Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </TouchableOpacity>
    </Modal>
  );
};
export default ModalMethodPay;
