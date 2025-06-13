import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Pressable,
  Text,
  ModalSuccess,
  PolicyCancelPackageService,
  MethodPay,
} from '@components';

import {Modal, TouchableOpacity} from 'react-native';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {formatPhone} from '@utils';
import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {formatCurrency} from 'utils/helper';
import {bottomRoot} from 'navigation/navigationRef';
import router from '@router';
import Toast from 'react-native-toast-message';

export default function ConfirmAndSignupPackage({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_USER_INFO});
    dispatch({type: actions.GET_ADDRESS_SAVE});
    dispatch({
      type: actions.GET_PAYMENT_METHOD,
    });
    dispatch({
      type: actions.GET_VOUCHER,
      params: {apply_for: 'service'},
    });
  }, [dispatch]);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const addressInfo = useSelector(state => state.getAddressSave?.data || []);
  const paymentMethod = useSelector(
    state => state.getPaymentMethod?.data || [],
  );
  const vouchers = useSelector(state => state.getVoucher?.data || []);
  const address = addressInfo?.find(
    item => item.item_id === route?.params?.data?.address_id,
  );
  const [methodSelected, setMethodSelected] = useState();
  const [promotionSelected, setPromotionSelected] = useState();
  const [voucherCode, setVoucherCode] = useState('');
  const method = paymentMethod.find(item => item.method_id === methodSelected);
  const [show, setShow] = useState(0);
  // const useVoucherCode = () => {
  //   if (vouchers.filter(item => item.promotion_id === voucherCode)) {
  //     setPromotionSelected(voucherCode);
  //   }
  // };
  const infoService = useSelector(state => state.priceCalculation?.data || []);
  const orderService = () => {
    dispatch({
      type: actions.ORDER_SERVICE,
      body: {
        service_id: route?.params?.data?.service_id,
        service_sub_id: route?.params?.data?.service_sub_id,
        duration_id: route?.params?.data?.duration_id,
        repeat_weekly: route?.params?.data?.repeat_weekly,
        list_day: route?.params?.data?.list_day,
        start_time: route?.params?.data?.start_time,
        note: route?.params?.data?.note,
        promotion_id: promotionSelected,
        method_id: methodSelected,
        address_id: route?.params?.data?.address_id,
        extra_services: route?.params?.data?.extra_services,
      },
      onSuccess: () => {
        setShow(!show);
      },
      onFail(e) {
        Toast.show({
          type: 'success',
          text1: e,
        });
      },
    });
  };
  const backHome = () => {
    bottomRoot.navigate(router.HOME_SCREEN);
    setShow(false);
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Xác nhận và thanh toán'} canGoBack />
      <ScrollView contentContainerStyle={{paddingBottom: 120}}>
        <Block marginTop={20} marginHorizontal={12}>
          <Text fontSize={15} semiBold color={COLORS.black2}>
            Vị trí làm việc
          </Text>
          <Block
            radius={8}
            backgroundColor={COLORS.white}
            marginTop={15}
            paddingBottom={15}>
            <Block marginTop={13} marginHorizontal={12}>
              <Block>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_position_address}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={15}
                    medium
                    color={COLORS.black1}
                    marginLeft={8}>
                    {address?.title}
                  </Text>
                </Block>
                <Text
                  marginTop={11}
                  marginLeft={30}
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}>
                  {address?.address_full}
                </Text>
              </Block>
              <Block marginTop={15}>
                <Block
                  absolute
                  right={0}
                  width={width - 76}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
              </Block>
              <Block marginTop={12}>
                <Block row alignCenter>
                  <Image source={icon.icon_name_user} width={22} height={22} />
                  <Text
                    fontSize={15}
                    medium
                    color={COLORS.black1}
                    marginLeft={8}>
                    {userInfo?.full_name}
                  </Text>
                </Block>
                <Text
                  marginTop={11}
                  marginLeft={30}
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}>
                  {formatPhone(userInfo?.phone)}
                </Text>
              </Block>
            </Block>
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Thông tin công việc
          </Text>
          <Block
            radius={8}
            backgroundColor={COLORS.white}
            marginTop={15}
            paddingBottom={16}>
            <Block marginTop={13} marginHorizontal={12}>
              <Block row alignCenter>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_calendar_day}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={8}>
                    Ngày bắt đầu
                  </Text>
                </Block>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    {infoService?.start_date}
                  </Text>
                </Block>
              </Block>
              <Block marginTop={13}>
                <Block
                  absolute
                  right={0}
                  width={width - 76}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
              </Block>
              <Block row marginTop={12} alignCenter>
                <Block row alignCenter>
                  <Image source={icon.icon_day_end} width={22} height={22} />
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={8}>
                    Ngày kết thúc
                  </Text>
                </Block>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    {infoService?.end_date}
                  </Text>
                </Block>
              </Block>
              <Block marginTop={13}>
                <Block
                  absolute
                  right={0}
                  width={width - 76}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
              </Block>
              <Block row marginTop={12} alignCenter>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_time_activity}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={8}>
                    Thời gian làm việc
                  </Text>
                </Block>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    {infoService?.time?.hours} giờ,{' '}
                    {infoService?.time?.start_time} đến{' '}
                    {infoService?.time?.end_time}
                  </Text>
                </Block>
              </Block>
              <Block marginTop={13}>
                <Block
                  absolute
                  right={0}
                  width={width - 76}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
              </Block>
              <Block row marginTop={12} alignCenter>
                <Block row alignCenter>
                  <Image source={icon.icon_day_again} width={22} height={22} />
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={8}>
                    Số buổi
                  </Text>
                </Block>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    {infoService?.work_shifts} buổi
                  </Text>
                </Block>
              </Block>
              <Block marginTop={13}>
                <Block
                  absolute
                  right={0}
                  width={width - 76}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
              </Block>
              <Block marginTop={12}>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_detail_activity}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={8}>
                    Chi tiết công việc
                  </Text>
                </Block>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.black2}
                  marginLeft={30}
                  marginTop={9}>
                  Chăm sóc người già tại nhà
                </Text>
                {infoService?.note === '' ? (
                  ''
                ) : (
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={30}
                    marginTop={11}>
                    Ghi chú: {infoService?.note}
                  </Text>
                )}
              </Block>
            </Block>
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Chi tiết thanh toán
          </Text>
          <Block
            radius={8}
            backgroundColor={COLORS.white}
            marginTop={15}
            paddingBottom={16}>
            <Block marginTop={13} marginHorizontal={12}>
              <Block row alignCenter>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Giá dịch vụ
                </Text>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    {formatCurrency(infoService?.amount_estimated)}
                  </Text>
                </Block>
              </Block>
              <Block marginTop={15}>
                <Block
                  absolute
                  right={0}
                  width={width - 76}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
              </Block>
              <Block row alignCenter marginTop={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Tổng thanh toán
                </Text>
                <Block absolute right={0}>
                  <Text fontSize={15} medium color={COLORS.red4}>
                    {formatCurrency(infoService?.amount_final)}
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
          <MethodPay
            payData={paymentMethod}
            onPressPay={method_id => setMethodSelected(method_id)}
            titlePay={method?.title}
            voucherData={vouchers}
            onPressVoucher={promotion_id => setPromotionSelected(promotion_id)}
            promotionCode={promotionSelected}
          />
          <PolicyCancelPackageService top={20} title={'Quy định huỷ gói'} />
        </Block>
      </ScrollView>
      <Block
        height={103}
        width={width}
        absolute
        bottom={0}
        backgroundColor={COLORS.white}>
        <Block marginTop={13} marginHorizontal={12} alignCenter row>
          <Text fontSize={14} regular color={COLORS.black2}>
            Tổng thanh toán
          </Text>
          <Block absolute right={0}>
            <Text fontSize={15} semiBold color={COLORS.red4}>
              {formatCurrency(infoService?.amount_final)}
            </Text>
          </Block>
        </Block>
        <Pressable
          onPress={orderService}
          marginTop={13}
          marginHorizontal={12}
          height={43}
          radius={8}
          backgroundColor={COLORS.red4}
          justifyCenter
          alignCenter>
          <Text fontSize={15} regular color={COLORS.white}>
            Đăng ký gói
          </Text>
        </Pressable>
      </Block>
      <ModalSuccess
        visible={show}
        close={() => setShow(false)}
        onPress={backHome}
      />
    </Block>
  );
}
