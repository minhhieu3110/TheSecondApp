import {Block, Text, Pressable, Icon} from '@components';
import {Modal, TouchableOpacity} from 'react-native';
import {COLORS} from '@theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Calendar from '@components';
import {width} from '@responsive';
const ModalCalendar = ({visible, close}) => {
  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="fade"
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
          backgroundColor={COLORS.gray10}
          paddingBottom={15}
          width={width - 24}
          radius={15}
          justifyCenter>
          <Text
            fontSize={15}
            semiBold
            color={COLORS.black2}
            marginTop={12}
            marginHorizontal={68}
            center>
            Chọn lịch
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
          <Block marginTop={15}></Block>
        </Block>
      </TouchableOpacity>
    </Modal>
  );
};
export default ModalCalendar;
