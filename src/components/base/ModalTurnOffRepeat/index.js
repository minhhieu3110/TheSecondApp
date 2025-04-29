import {Modal, SafeAreaView, TouchableOpacity} from 'react-native';
import {Block, Icon, Pressable, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ModalTurnOffRepeat = ({visible, close, point, onPress}) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={close}
      transparent={false}
      animationType="fade">
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
            flex: 1,
          }}>
          <Block
            marginHorizontal={12}
            paddingBottom={12}
            radius={15}
            backgroundColor={COLORS.white}>
            <Block>
              <Text fontSize={15} semiBold color={COLORS.black2} center>
                Xác nhận
              </Text>
              <Pressable onPress={close} absolute top={0} right={0}>
                <Icon
                  IconType={Ionicons}
                  iconColor={COLORS.black2}
                  iconSize={30}
                  iconName={'close'}
                />
              </Pressable>
            </Block>
            <Text
              marginTop={19.6}
              fontSize={14}
              regular
              color={COLORS.black2}
              center>
              Tính năng công việc lặp lại giúp bạn tiết kiệm thời gian và chi
              phí. Bạn có chắc chắn muốn tắt tính năng này?
            </Text>
            <Block
              marginTop={37}
              row
              gap={12}
              width={width - 48}
              marginHorizontal={12}>
              <Pressable
                onPress={onPress}
                width={(width - 60) / 2}
                height={48}
                borderWidth={1}
                borderColor={COLORS.red4}
                radius={8}
                backgroundColor={COLORS.white}
                justifyCenter
                alignCenter>
                <Text fontSize={15} regular color={COLORS.red4}>
                  Đồng ý
                </Text>
              </Pressable>
              <Pressable
                onPress={close}
                width={(width - 60) / 2}
                height={48}
                borderWidth={1}
                borderColor={COLORS.red4}
                radius={8}
                backgroundColor={COLORS.red4}
                justifyCenter
                alignCenter>
                <Text fontSize={15} regular color={COLORS.white}>
                  Bỏ qua
                </Text>
              </Pressable>
            </Block>
          </Block>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};
export default ModalTurnOffRepeat;
