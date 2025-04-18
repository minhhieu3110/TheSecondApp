import {Block, Text, Pressable, Icon} from '@components';
import {COLORS} from '@theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Modal, TouchableOpacity, SafeAreaView} from 'react-native';
import {width} from '@responsive';
import {useState} from 'react';
const ModalSANStaffNotPerform = ({visible, close, data = []}) => {
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
            backgroundColor={COLORS.white}
            paddingBottom={41}
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
              Nhân viên của SAN sẽ không thực hiện những công việc gì?
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
            <Block marginTop={20} marginHorizontal={12}>
              {data?.map(item => (
                <Block row marginBottom={5} key={item.title}>
                  <Icon
                    IconType={FontAwesome}
                    iconName={'times-circle'}
                    iconSize={10}
                    iconColor={COLORS.red4}
                  />
                  <Text
                    marginTop={-5}
                    marginLeft={10}
                    fontSize={14}
                    regular
                    color={COLORS.black1}
                    lineHeight={22}>
                    {item.title}
                  </Text>
                </Block>
              ))}
            </Block>
          </Block>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};
export default ModalSANStaffNotPerform;
