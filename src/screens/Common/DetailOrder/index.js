import {icon} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Text,
  ScrollView,
  Pressable,
  TextInput,
} from '@components';
import {COLORS} from '@theme';
import {image} from '@assets';
import {width} from '@responsive';
import {formatCurrency, formatPhone} from '@utils';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import actions from '@actions';
import {Modal, SafeAreaView, TouchableOpacity} from 'react-native';
import Toast from 'react-native-toast-message';
import {commonRoot, root} from 'navigation/navigationRef';
import {URL_API} from 'redux/sagas/common';
import router from '@router';
export default function DetailOrder({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.DETAIL_ORDER,
      params: {id: route?.params?.id},
    });
  }, [dispatch, route?.params?.id]);
  const detailOrder = useSelector(state => state.detailOrder?.data || []);
  const [showCancel, setShowCancel] = useState(false);
  const [reason, setReason] = useState('');
  const handleCancel = () => {
    dispatch({
      type: actions.CANCEL_ORDER,
      body: {
        order_id: route?.params?.id,
        reason: reason,
      },
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
        root.goBack();
      },
    });
  };
  const handleLeft = status => {
    (status === 19 || status === 41) && setShowCancel(!showCancel);
    (status === 25 || status === 17) && commonRoot.navigate(router.HELP);
  };
  const handleRight = status => {
    (status === 19 || status === 41) && commonRoot.navigate(router.HELP);
    status === 25 &&
      commonRoot.navigate(router.EVALUATE_ORDER, {id: detailOrder?.id});
    status === 17 && console.log('Again');
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Chi tiết đơn hàng'} />
      <ScrollView contentContainerStyle={{paddingBottom: 110}}>
        <Block marginTop={16} marginHorizontal={12}>
          <Block
            backgroundColor={detailOrder?.status?.color_bg}
            radius={8}
            paddingVertical={12}
            paddingLeft={12}
            paddingRight={18}>
            <Block rowCenter>
              <Image
                source={{
                  uri: detailOrder?.status?.picture,
                }}
                width={53}
                height={53}
              />
              <Block marginLeft={15}>
                <Text
                  fontSize={14}
                  medium
                  color={detailOrder?.status?.color_title}>
                  {detailOrder?.status?.title}
                </Text>
                <Text
                  marginTop={11}
                  fontSize={14}
                  regular
                  color={COLORS.black2}>
                  {detailOrder?.status?.title_small}
                </Text>
              </Block>
            </Block>
          </Block>
          <Text marginTop={20} fontSize={15} semiBold color={COLORS.black2}>
            Thông tin nhận hàng
          </Text>
          <Block
            marginTop={16}
            radius={8}
            backgroundColor={COLORS.white}
            paddingBottom={19}>
            <Block marginHorizontal={12} marginTop={12}>
              <Block row alignCenter>
                <Image source={icon.icon_name_user} width={22} height={22} />
                <Text fontSize={15} medium color={COLORS.black2} marginLeft={8}>
                  {detailOrder?.full_name}
                </Text>
              </Block>
              <Text
                marginTop={13}
                marginLeft={30}
                fontSize={14}
                regular
                color={COLORS.red4}>
                {formatPhone(detailOrder?.phone)}
              </Text>
              <Text
                marginTop={11}
                marginLeft={30}
                fontSize={14}
                regular
                color={COLORS.black2}
                numberOfLines={2}>
                {detailOrder?.address_full}
              </Text>
            </Block>
          </Block>
          <Text marginTop={19} fontSize={16} semiBold color={COLORS.black2}>
            Sản phẩm
          </Text>
          <Block marginTop={15} gap={12}>
            {detailOrder?.details?.map(item => (
              <Block
                key={item.product_item_id}
                paddingBottom={14}
                radius={8}
                backgroundColor={COLORS.white}>
                <Block
                  rowCenter
                  marginLeft={12}
                  marginTop={12}
                  marginRight={17}>
                  <Block width={73} height={73} radius={5} overflow={'hidden'}>
                    <Image
                      source={{uri: item?.product?.picture}}
                      height={'100%'}
                      width={'100%'}
                      resizeMode="cover"
                    />
                  </Block>

                  <Block marginTop={3} marginLeft={8} width={width - 134}>
                    <Text
                      marginLeft={4}
                      fontSize={15}
                      medium
                      color={COLORS.black2}
                      numberOfLines={1}>
                      {item?.product?.title}
                    </Text>
                    <Text
                      fontSize={14}
                      regular
                      color={COLORS.black2}
                      marginTop={14}>
                      x{item?.quantity}
                    </Text>
                    <Block marginTop={12} row columnGap={20} alignCenter>
                      <Text fontSize={14} regular color={COLORS.red4}>
                        {formatCurrency(item?.price_sale)}
                      </Text>
                      <Text
                        fontSize={14}
                        regular
                        color={COLORS.lightGray1}
                        lineThrough>
                        {formatCurrency(item?.price)}
                      </Text>
                    </Block>
                  </Block>
                </Block>
              </Block>
            ))}
          </Block>
          <Block marginTop={20}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Chi tiết thanh toán
            </Text>
            <Block
              radius={8}
              backgroundColor={COLORS.white}
              marginTop={15}
              paddingBottom={15}>
              <Block marginHorizontal={12} marginTop={16}>
                <Block>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.placeholder}>
                      Tổng tiền
                    </Text>
                    <Text fontSize={15} medium color={COLORS.black2}>
                      {formatCurrency(detailOrder?.total_order)}
                    </Text>
                  </Block>
                  <Block
                    borderWidth={1}
                    borderColor={COLORS.borderColor1}
                    marginTop={15}
                  />
                </Block>
              </Block>
              <Block marginHorizontal={12} marginTop={16}>
                <Block>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.placeholder}>
                      Voucher
                    </Text>
                    <Text fontSize={15} medium color={COLORS.red4}>
                      -{formatCurrency(detailOrder?.promotion_price)}
                    </Text>
                  </Block>
                  <Block
                    borderWidth={1}
                    borderColor={COLORS.borderColor1}
                    marginTop={15}
                  />
                </Block>
              </Block>
              <Block marginHorizontal={12} marginTop={16}>
                <Block>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.placeholder}>
                      Điểm tích luỹ
                    </Text>
                    <Text fontSize={15} medium color={COLORS.black2}>
                      -{formatCurrency(detailOrder?.use_point_price)}
                    </Text>
                  </Block>
                  <Block
                    borderWidth={1}
                    borderColor={COLORS.borderColor1}
                    marginTop={15}
                  />
                </Block>
              </Block>
              <Block marginHorizontal={12} marginTop={16}>
                <Block>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.placeholder}>
                      Tổng thanh toán
                    </Text>
                    <Text fontSize={15} medium color={COLORS.red4}>
                      {formatCurrency(detailOrder?.total_payment)}
                    </Text>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block marginTop={28} row gap={12}>
            {detailOrder?.is_status === 23 ? (
              <Pressable
                onPress={() => commonRoot.navigate(router.HELP)}
                marginHorizontal={12}
                width={width - 48}
                height={48}
                radius={8}
                backgroundColor={COLORS.red4}
                justifyCenter
                alignCenter>
                <Text fontSize={15} regular color={COLORS.white}>
                  Hỗ trợ
                </Text>
              </Pressable>
            ) : (
              <>
                <Pressable
                  onPress={() => handleLeft(detailOrder?.is_status)}
                  width={(width - 36) / 2}
                  height={48}
                  radius={8}
                  borderColor={COLORS.red4}
                  borderWidth={1}
                  justifyCenter
                  alignCenter>
                  <Text fontSize={15} regular color={COLORS.red4}>
                    {(detailOrder?.is_status === 19 ||
                      detailOrder?.is_status === 41) &&
                      'Huỷ'}
                    {(detailOrder?.is_status === 25 ||
                      detailOrder?.is_status === 17) &&
                      'Hỗ trợ'}
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => handleRight(detailOrder?.is_status)}
                  width={(width - 36) / 2}
                  height={48}
                  radius={8}
                  backgroundColor={COLORS.red4}
                  justifyCenter
                  alignCenter>
                  <Text fontSize={15} regular color={COLORS.white}>
                    {(detailOrder?.is_status === 19 ||
                      detailOrder?.is_status === 41) &&
                      'Hỗ trợ'}
                    {detailOrder?.is_status === 25 && 'Đánh giá'}
                    {detailOrder?.is_status === 17 && 'Đặt lại'}
                  </Text>
                </Pressable>
              </>
            )}
          </Block>
        </Block>
      </ScrollView>
      <Modal transparent={true} animationType="fade" visible={showCancel}>
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              backgroundColor: COLORS.transparentColor4,
            }}>
            <Block
              width={width - 24}
              backgroundColor={COLORS.white}
              radius={8}
              paddingBottom={15}>
              <Block marginTop={10}>
                <Text fontSize={15} semiBold color={COLORS.red4} center>
                  Huỷ đơn hàng
                </Text>
              </Block>
              <Block marginTop={15} gap={10} marginHorizontal={12}>
                <Text fontSize={13} regular color={COLORS.black2}>
                  Lý do huỷ <Text color={COLORS.red4}>*</Text>
                </Text>
                <TextInput
                  paddingLeft={16}
                  placeholder={'Nhập lý do huỷ '}
                  borderWidth={0.5}
                  borderColor={COLORS.lightGray1}
                  height={41}
                  radius={8}
                  fontSize={13}
                  regular
                  color={COLORS.black2}
                  value={reason}
                  onChangeText={setReason}
                />
              </Block>
              <Block marginTop={20} marginHorizontal={12} row gap={10}>
                <Pressable
                  onPress={handleCancel}
                  width={(width - 58) / 2}
                  height={41}
                  borderWidth={1}
                  borderColor={COLORS.red4}
                  radius={8}
                  justifyCenter
                  alignCenter>
                  <Text fontSize={15} regular color={COLORS.red4}>
                    Đồng ý
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setShowCancel(!showCancel)}
                  width={(width - 58) / 2}
                  height={41}
                  backgroundColor={COLORS.red4}
                  radius={8}
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
    </Block>
  );
}
