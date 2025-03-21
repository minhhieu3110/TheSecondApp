import {Block, Text, Pressable, Icon} from '@components';
import {COLORS} from '@theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Modal, TouchableOpacity, SafeAreaView} from 'react-native';
import {width} from '@responsive';
import {useState} from 'react';
const ModalSANStaffDo = ({visible, close}) => {
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
              Nhân viên của SAN sẽ thực hiện những công việc gì?
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
              <Block row alignCenter>
                <Icon
                  IconType={FontAwesome}
                  iconName={'check-circle'}
                  iconSize={10}
                  iconColor={COLORS.green6}
                />
                <Text
                  marginLeft={10}
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  lineHeight={22}>
                  Trông nom, chăm sóc người bệnh để người bệnh không có cảm giác
                  cô đơn.
                </Text>
              </Block>
              <Block row alignCenter>
                <Icon
                  IconType={FontAwesome}
                  iconName={'check-circle'}
                  iconSize={10}
                  iconColor={COLORS.green6}
                />
                <Text
                  marginLeft={10}
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  lineHeight={22}>
                  Cho người bệnh ăn uống, nghỉ ngơi.
                </Text>
              </Block>
              <Block row alignCenter>
                <Icon
                  IconType={FontAwesome}
                  iconName={'check-circle'}
                  iconSize={10}
                  iconColor={COLORS.green6}
                />
                <Text
                  marginLeft={10}
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  lineHeight={22}>
                  Vệ sinh cho người bệnh.
                </Text>
              </Block>
              <Block row alignCenter>
                <Icon
                  IconType={FontAwesome}
                  iconName={'check-circle'}
                  iconSize={10}
                  iconColor={COLORS.green6}
                />
                <Text
                  marginLeft={10}
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  lineHeight={22}>
                  Nâng trở người bệnh khi không di chuyển hoặc hoạt động được.
                </Text>
              </Block>
              <Block row alignCenter>
                <Icon
                  IconType={FontAwesome}
                  iconName={'check-circle'}
                  iconSize={10}
                  iconColor={COLORS.green6}
                />
                <Text
                  marginLeft={10}
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  lineHeight={22}>
                  Đổ bô, chất thải của người bệnh khi không tự đi vệ sinh được.
                </Text>
              </Block>
              <Block row alignCenter>
                <Icon
                  IconType={FontAwesome}
                  iconName={'check-circle'}
                  iconSize={10}
                  iconColor={COLORS.green6}
                />
                <Text
                  marginLeft={10}
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  lineHeight={22}>
                  Theo dõi nhiệt độ, huyết áp, mạch.
                </Text>
              </Block>
              <Block row alignCenter>
                <Icon
                  IconType={FontAwesome}
                  iconName={'check-circle'}
                  iconSize={10}
                  iconColor={COLORS.green6}
                />
                <Text
                  marginLeft={10}
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  lineHeight={22}>
                  Hỗ trợ, giám sát người bệnh uống thuốc theo đơn.
                </Text>
              </Block>
              <Block row alignCenter>
                <Icon
                  IconType={FontAwesome}
                  iconName={'check-circle'}
                  iconSize={10}
                  iconColor={COLORS.green6}
                />
                <Text
                  marginLeft={10}
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  lineHeight={22}>
                  Thông báo tình trạng bệnh lý cho người thân, bác sĩ, điều
                  dưỡng và gọi hỗ trợ khám bệnh khi cần thiết.{' '}
                </Text>
              </Block>
            </Block>
          </Block>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};
export default ModalSANStaffDo;
