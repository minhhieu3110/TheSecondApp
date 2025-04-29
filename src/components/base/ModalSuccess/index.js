import {Modal, TouchableOpacity} from 'react-native';
import {Block, Text, Pressable, Icon} from '@components';
import {COLORS} from '@theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LottiesView from 'lottie-react-native';
import {width} from '@responsive';
import {lotties} from '@assets';
import {bottomRoot} from 'navigation/navigationRef';
import router from '@router';
export default function ModalSuccess({visible, close, onPress}) {
  return (
    <Modal
      visible={visible}
      onRequestClose={close}
      transparent={true}
      animationType="fade">
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
          paddingBottom={12}
          marginHorizontal={12}
          backgroundColor={COLORS.white}
          radius={15}
          alignCenter>
          <Text
            fontSize={15}
            semiBold
            color={COLORS.black2}
            marginTop={12}
            center>
            Đặt dịch vụ thành công
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
          <LottiesView
            source={lotties.success}
            style={{width: width - 160, height: 172, marginTop: 41}}
            autoPlay
            loop
          />
          <Pressable
            onPress={onPress}
            width={width - 48}
            height={48}
            marginTop={43}
            radius={8}
            backgroundColor={COLORS.red4}
            justifyCenter
            alignCenter>
            <Text fontSize={15} regular color={COLORS.white}>
              Quay về trang chủ
            </Text>
          </Pressable>
        </Block>
      </TouchableOpacity>
    </Modal>
  );
}
