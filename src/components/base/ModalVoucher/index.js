import {Modal, TouchableOpacity, Alert} from 'react-native';
import {
  Block,
  Text,
  Pressable,
  Icon,
  Image,
  TextInput,
  TicketVoucherShape,
  ScrollView,
} from '@components';
import {COLORS} from '@theme';
import {image} from '@assets';
import {width} from '@responsive';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {URL_API} from 'redux/sagas/common';
import {ConvertTimeStamp} from '@utils';
import {useState} from 'react';
import Toast from 'react-native-toast-message';

const ModalVoucher = ({visible, close, data = [], onPress}) => {
  const [promotionSelected, setPromotionSelected] = useState();
  const [voucherCode, setVoucherCode] = useState('');
  const [voucherError, setVoucherError] = useState('');
  const selectVoucher = promotion_id => {
    setPromotionSelected(promotion_id);
    onPress(promotion_id);
    close();
  };

  const handleVoucherApply = () => {
    const matchedVoucher = data.find(item => item.promotion_id === voucherCode);
    if (matchedVoucher) {
      setPromotionSelected(matchedVoucher.promotion_id);
      onPress(matchedVoucher.promotion_id);
      close();
    } else {
      setVoucherError('Voucher không tồn tại! Vui lòng thử lại');
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
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
          height={'80%'}
          marginHorizontal={12}
          radius={8}
          backgroundColor={COLORS.gray10}
          paddingBottom={16}
          paddingHorizontal={16}>
          <Text
            fontSize={16}
            semiBold
            color={COLORS.black2}
            marginTop={12}
            center>
            Chọn Voucher
          </Text>
          <Pressable
            onPress={close}
            absolute
            top={10}
            right={10}
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
              iconSize={14}
            />
          </Pressable>
          <Block
            borderWidth={1}
            marginTop={20}
            borderColor={COLORS.grayBreak}
          />
          <Block marginTop={20}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Mã voucher
            </Text>
            <Block
              marginTop={12}
              height={45}
              radius={5}
              borderWidth={1}
              borderColor={COLORS.grayBreak}
              backgroundColor={COLORS.white}
              row
              alignCenter>
              <TextInput
                placeholder={'Nhập mã voucher'}
                style={{flex: 1, paddingLeft: 12}}
                value={voucherCode}
                onChangeText={e => {
                  setVoucherCode(e);
                  setVoucherError('');
                }}
              />
              <Pressable
                marginRight={4}
                width={104}
                height={37}
                radius={5}
                backgroundColor={voucherCode ? COLORS.red4 : COLORS.placeholder}
                justifyCenter
                alignCenter
                onPress={voucherCode ? handleVoucherApply : null}>
                <Text fontSize={15} medium color={COLORS.white}>
                  Sử dụng
                </Text>
              </Pressable>
            </Block>
          </Block>
          {voucherError.length !== 0 && (
            <Text fontSize={12} semiBold color={COLORS.red4} marginTop={5}>
              {voucherError}
            </Text>
          )}
          <Text
            marginLeft={0}
            fontSize={15}
            medium
            color={COLORS.black2}
            marginTop={20}>
            Tất cả ưu đãi
          </Text>
          <ScrollView
            contentContainerStyle={{paddingBottom: 20}}
            showsVerticalScrollIndicator={true}
            style={{marginTop: 12}}>
            {data?.map(item => (
              <Pressable
                onPress={() => selectVoucher(item.promotion_id)}
                key={item.promotion_id}
                radius={15}
                backgroundColor={COLORS.white}
                height={140}
                row
                overflow={'hidden'}
                marginBottom={10}>
                <Image
                  source={{uri: `${URL_API.uploads}/${item.picture}`}}
                  resizeMode="cover"
                  width={84}
                  height={108}
                  marginTop={14.6}
                  marginLeft={12.6}
                  radius={11}
                />
                <Block marginLeft={7}>
                  <TicketVoucherShape />
                </Block>
                <Block flex={1} marginLeft={7} marginTop={18}>
                  <Text fontSize={12} regular color={COLORS.placeholder}>
                    HSD: {ConvertTimeStamp(item?.date_end)}
                  </Text>
                  <Text
                    fontSize={16}
                    semiBold
                    color={COLORS.black1}
                    uppercase
                    marginTop={12}>
                    {item?.title_detail}
                  </Text>
                  <Text
                    fontSize={12}
                    regular
                    color={COLORS.black1}
                    marginTop={9}>
                    {item?.apply_for}
                  </Text>
                  <Text fontSize={12} regular color={COLORS.red4}>
                    Xem chi tiết
                  </Text>
                </Block>
                <Block
                  width={23}
                  height={23}
                  borderWidth={promotionSelected === item.promotion_id ? 0 : 1}
                  borderColor={COLORS.lightGray1}
                  radius={50}
                  absolute
                  top={12}
                  right={12}
                  justifyCenter
                  alignCenter
                  backgroundColor={
                    promotionSelected === item.promotion_id
                      ? COLORS.red4
                      : COLORS.white
                  }>
                  <Block
                    width={11}
                    height={11}
                    backgroundColor={COLORS.white}
                    radius={50}
                  />
                </Block>
              </Pressable>
            ))}
          </ScrollView>
        </Block>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalVoucher;
