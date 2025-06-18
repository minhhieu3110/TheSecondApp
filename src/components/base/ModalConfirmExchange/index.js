import {Modal, TouchableOpacity} from 'react-native';
import {Block, Pressable, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';

const ModalConfirmExchange = ({visible, close, point, onPress}) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={close}
      transparent={true}
      animationType="fade">
      <TouchableOpacity
        activeOpacity={1}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
          flex: 1,
        }}>
        <Block
          width={width - 24}
          backgroundColor={COLORS.white}
          paddingHorizontal={12}
          paddingBottom={15}
          paddingTop={25}
          radius={10}
          alignCenter>
          <Text fontSize={16} bold color={COLORS.red4} center>
            Đổi điểm
          </Text>
          <Text
            center
            width={width - 185}
            fontSize={14}
            regular
            color={COLORS.black2}
            marginTop={23}>
            Bạn có đồng ý đổi Voucher này với {point} điểm ?
          </Text>
          <Block marginTop={42} row gap={10}>
            <Pressable
              onPress={close}
              width={(width - 58) / 2}
              height={45}
              justifyCenter
              alignCenter
              backgroundColor={COLORS.white}
              radius={5}
              borderColor={COLORS.red4}
              borderWidth={1}>
              <Text fontSize={15} medium color={COLORS.red4}>
                Huỷ
              </Text>
            </Pressable>
            <Pressable
              onPress={onPress}
              width={(width - 58) / 2}
              height={45}
              justifyCenter
              alignCenter
              backgroundColor={COLORS.red4}
              radius={5}
              borderColor={COLORS.red4}
              borderWidth={1}>
              <Text fontSize={15} medium color={COLORS.white}>
                Xác nhận
              </Text>
            </Pressable>
          </Block>
        </Block>
      </TouchableOpacity>
    </Modal>
  );
};
export default ModalConfirmExchange;
