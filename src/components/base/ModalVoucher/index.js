import {Modal, TouchableOpacity} from 'react-native';
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
const ModalVoucher = ({visible, close, data = [], onPress}) => {
  const [promotionSelected, setPromotionSelected] = useState();
  const selectVoucher = promotion_id => {
    setPromotionSelected(promotion_id);
    onPress(promotion_id);
  };
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
          backgroundColor={COLORS.gray10}
          paddingBottom={15.3}
          justifyCenter>
          <Text
            fontSize={15}
            semiBold
            color={COLORS.black2}
            marginTop={12}
            center>
            Chọn Voucher
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
            borderWidth={1}
            marginTop={23}
            borderColor={COLORS.grayBreak}
          />
          <Block marginTop={20} marginHorizontal={18}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Mã voucher
            </Text>
            <Block
              marginTop={13}
              height={45}
              radius={5}
              borderWidth={1}
              borderColor={COLORS.grayBreak}
              backgroundColor={COLORS.white}>
              <TextInput placeholder={'Nhập mã voucher'} paddingLeft={12} />
              <Block
                width={104}
                height={37}
                radius={5}
                backgroundColor={COLORS.placeholder}
                absolute
                zIndex={10}
                top={4}
                right={4}
                alignCenter
                justifyCenter>
                <Text fontSize={15} medium color={COLORS.white}>
                  Sử dụng
                </Text>
              </Block>
            </Block>
          </Block>
          <Text
            marginLeft={18}
            fontSize={15}
            medium
            color={COLORS.black2}
            marginTop={20}>
            Tất cả ưu đãi
          </Text>
          <Block marginTop={13} marginHorizontal={18} height={500}>
            <ScrollView
              contentContainerStyle={{paddingBottom: 20}}
              showsVerticalScrollIndicator={true}>
              {data?.map(item => (
                <Pressable
                  onPress={() => selectVoucher(item.promotion_id)}
                  key={item.promotion_id}
                  radius={15}
                  backgroundColor={COLORS.white}
                  height={136.77}
                  alignCenter
                  row
                  overflow={'hidden'}
                  marginBottom={10}>
                  <Block
                    width={83.94}
                    height={107.68}
                    radius={11}
                    justifyCenter
                    alignCenter
                    overflow={'hidden'}
                    marginLeft={12.6}>
                    <Image
                      source={{uri: `${URL_API.uploads}/${item.picture}`}}
                      resizeMode
                      width={83.94}
                      height={107.68}
                    />
                  </Block>
                  <Block marginLeft={7}>
                    <TicketVoucherShape />
                  </Block>
                  <Block
                    width={width - 197}
                    height={107}
                    marginLeft={7}
                    marginTop={18.2}>
                    <Text fontSize={12} regular color={COLORS.placeholder}>
                      HSD: {ConvertTimeStamp(item?.date_end)}
                    </Text>
                    <Text
                      fontSize={16}
                      semiBold
                      color={COLORS.black1}
                      uppercase
                      marginTop={11.9}>
                      {item?.title_detail}
                    </Text>
                    <Text
                      fontSize={12}
                      regular
                      color={COLORS.black1}
                      marginTop={9.3}>
                      {item?.apply_for}
                    </Text>
                    <Text fontSize={12} regular color={COLORS.red4}>
                      Xem chi tiết
                    </Text>
                  </Block>
                  <Block
                    width={23}
                    height={23}
                    borderWidth={1}
                    borderColor={COLORS.lightGray1}
                    radius={50}
                    absolute
                    top={12.3}
                    right={12.9}
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
        </Block>
      </TouchableOpacity>
    </Modal>
  );
};
export default ModalVoucher;
