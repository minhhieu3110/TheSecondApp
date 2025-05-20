import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Pressable,
  Text,
  ModalSuccess,
  MethodPay,
} from '@components';
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

export default function ConfirmAndPayService({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_USER_INFO});
    dispatch({
      type: actions.GET_PAYMENT_METHOD,
    });
    dispatch({
      type: actions.GET_VOUCHER,
      params: {apply_for: 'service'},
    });
    dispatch({
      type: actions.GET_ADDRESS_SAVE,
    });
  }, [dispatch]);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const addressInfo = useSelector(state => state.getAddressSave?.data || []);
  const address = addressInfo?.find(
    item => item.item_id === route?.params?.data?.address_id,
  );
  const infoService = useSelector(state => state.priceCalculation?.data || []);

  const paymentMethod = useSelector(
    state => state.getPaymentMethod?.data || [],
  );
  const vouchers = useSelector(state => state.getVoucher?.data || []);
  const [methodSelected, setMethodSelected] = useState();
  const [promotionSelected, setPromotionSelected] = useState();
  const [voucherCode, setVoucherCode] = useState('');
  const method = paymentMethod.find(item => item.method_id === methodSelected);

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
        console.log(e?.data?.message);
      },
    });
  };
  const [show, setShow] = useState(0);
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
                <Block
                  absolute
                  right={0}
                  top={0}
                  width={76.83}
                  height={30.33}
                  radius={15}
                  overflow={'hidden'}>
                  <RadialGradient
                    colors={COLORS.gradient5}
                    style={{
                      width: 76.83,
                      height: 30.33,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    center={[10, 10]}
                    radius={100}>
                    <Text fontSize={13} medium color={COLORS.white}>
                      Thay đổi
                    </Text>
                  </RadialGradient>
                </Block>
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
                    Ngày làm việc
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
                  <Image
                    source={icon.icon_calendar_days}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={8}>
                    Lặp lại hàng tuần
                  </Text>
                </Block>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    {route?.params?.data?.repeat_weekly?.join('-')}
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
                  {infoService?.service?.title}
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  marginLeft={30}
                  marginTop={11}>
                  {infoService?.note && `Ghi chú: ${infoService?.note}`}
                </Text>
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
            top={20}
            payData={paymentMethod}
            onPressPay={method_id => setMethodSelected(method_id)}
            titlePay={method?.title}
            voucherData={vouchers}
            onPressVoucher={promotion_id => {
              setPromotionSelected(promotion_id);
            }}
          />
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
            Đăng việc
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
