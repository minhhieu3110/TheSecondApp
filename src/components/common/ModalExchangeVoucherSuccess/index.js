import {image} from '@assets';
import {Block, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {Modal, TouchableOpacity} from 'react-native';

export default function ModalExchangeVoucherSuccess({
  visible,
  close,
  date,
  onPress1,
  onPress2,
}) {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={close}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}>
        <Block
          marginHorizontal={12}
          paddingBottom={15}
          width={width - 24}
          backgroundColor={COLORS.white}
          radius={10}>
          <Block marginHorizontal={12} marginTop={25} alignCenter>
            <Text fontSize={16} bold color={COLORS.red4}>
              Đổi ưu đãi thành công
            </Text>
            <Image
              source={image.image_exchange_voucher_success}
              width={'60%'}
              height={201}
              marginTop={23}
            />
            <Block marginTop={20} alignCenter>
              <Text fontSize={14} regular color={COLORS.black2}>
                Sử dụng ưu đãi đến
              </Text>
              <Text fontSize={14} regular color={COLORS.black2}>
                {date}
              </Text>
            </Block>
            <Block row spaceBetween width={'100%'} marginTop={42}>
              <Pressable
                onPress={onPress1}
                width={'48.5%'}
                height={45}
                radius={5}
                backgroundColor={COLORS.white}
                borderWidth={1}
                borderColor={COLORS.red4}
                justifyCenter
                alignCenter>
                <Text fontSize={15} medium color={COLORS.red4}>
                  Xem ưu đãi
                </Text>
              </Pressable>
              <Pressable
                onPress={onPress2}
                width={'48.5%'}
                height={45}
                radius={5}
                backgroundColor={COLORS.red4}
                justifyCenter
                alignCenter>
                <Text fontSize={15} medium color={COLORS.white}>
                  Quay lại
                </Text>
              </Pressable>
            </Block>
          </Block>
        </Block>
      </TouchableOpacity>
    </Modal>
  );
}
