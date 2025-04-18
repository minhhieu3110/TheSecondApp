import {Modal, TouchableOpacity} from 'react-native';
import {Block, Text, Pressable, Icon, Image} from '@components';
import {COLORS} from '@theme';
import {icon} from '@assets';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {width} from '@responsive';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import actions from '@actions';
import {URL_API} from 'redux/sagas/common';
const ModalMethodPay = ({visible, close}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_PAYMENT_METHOD,
    });
  }, [dispatch]);
  const paymentMethod = useSelector(
    state => state.getPaymentMethod?.data || [],
  );
  const [methodSelected, setMethodSelected] = useState(1);

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
            <Block marginTop={15} marginLeft={24} marginRight={21.2} gap={15}>
              {paymentMethod.map(item => (
                <Block key={item.method_id}>
                  <Pressable
                    onPress={() => setMethodSelected(item.method_id)}
                    alignCenter
                    row>
                    <Image
                      source={{uri: `${URL_API.uploads}/${item.picture}`}}
                      width={24.92}
                      height={24.99}
                    />
                    <Text
                      fontSize={16}
                      semiBold
                      color={COLORS.black6}
                      marginLeft={15.1}>
                      {item.title}
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
                      backgroundColor={
                        methodSelected === item.method_id && COLORS.red4
                      }>
                      {methodSelected === item.method_id && (
                        <Block
                          width={15}
                          height={15}
                          radius={50}
                          backgroundColor={COLORS.white}
                        />
                      )}
                    </Block>
                  </Pressable>
                  <Block
                    marginTop={15}
                    borderWidth={1}
                    borderColor={COLORS.grayBreak}
                  />
                </Block>
              ))}
            </Block>
          </Block>
        </Block>
      </TouchableOpacity>
    </Modal>
  );
};
export default ModalMethodPay;
