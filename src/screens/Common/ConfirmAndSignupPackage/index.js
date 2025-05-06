import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Pressable,
  Text,
  Icon,
  TextInput,
  TicketVoucherShape,
  ModalSuccess,
  PolicyCancelPackageService,
} from '@components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Modal, TouchableOpacity} from 'react-native';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ConvertTimeStamp, formatPhone} from '@utils';
import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
import {formatCurrency} from 'utils/helper';
import {bottomRoot} from 'navigation/navigationRef';
import router from '@router';

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
  const [visibleMethodPay, setVisibleMethodPay] = useState(false);
  const [visibleVoucher, setVisibleVoucher] = useState(false);
  const [methodSelected, setMethodSelected] = useState(1);
  const [promotionSelected, setPromotionSelected] = useState();
  const [voucherCode, setVoucherCode] = useState('');
  const method = paymentMethod.find(item => item.method_id === methodSelected);
  const [show, setShow] = useState(0);
  const useVoucherCode = () => {
    if (vouchers.filter(item => item.promotion_id === voucherCode)) {
      setPromotionSelected(voucherCode);
    }
  };
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
        console.log(e?.data?.message);
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
          <Block marginTop={20}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Phương thức thanh toán
            </Text>
            <Block marginTop={15} row columnGap={12} height={73}>
              <Pressable
                onPress={() => setVisibleMethodPay(true)}
                width={(width - 24) / 2 - 6}
                backgroundColor={COLORS.white}
                radius={8}
                paddingBottom={12}>
                <Block marginTop={16} marginLeft={12} marginRight={9}>
                  <Text fontSize={14} regular color={COLORS.black1}>
                    Phương thức thanh toán
                  </Text>
                  <Block marginTop={9}>
                    <Text fontSize={15} medium color={COLORS.red4}>
                      {method?.title}
                    </Text>
                    <Block absolute right={0}>
                      <Icon
                        IconType={MaterialIcons}
                        iconName={'keyboard-arrow-right'}
                        iconColor={COLORS.red4}
                        iconSize={22}
                      />
                    </Block>
                  </Block>
                </Block>
              </Pressable>
              <Pressable
                onPress={() => setVisibleVoucher(true)}
                width={(width - 24) / 2 - 6}
                backgroundColor={COLORS.white}
                radius={8}
                paddingBottom={12}>
                <Block marginTop={16} marginLeft={12} marginRight={9}>
                  <Text fontSize={14} regular color={COLORS.black1}>
                    Chọn mã khuyến mãi
                  </Text>
                  <Block marginTop={9}>
                    <Text fontSize={15} medium color={COLORS.red4}>
                      Chọn Voucher
                    </Text>
                    <Block absolute right={0}>
                      <Icon
                        IconType={MaterialIcons}
                        iconName={'keyboard-arrow-right'}
                        iconColor={COLORS.red4}
                        iconSize={22}
                      />
                    </Block>
                  </Block>
                </Block>
              </Pressable>
            </Block>
          </Block>
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
      <Modal
        visible={visibleMethodPay}
        transparent={false}
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
              onPress={() => setVisibleMethodPay(false)}
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
                          methodSelected === item.method_id
                            ? COLORS.red4
                            : COLORS.white
                        }>
                        <Block
                          width={11}
                          height={11}
                          radius={50}
                          backgroundColor={COLORS.white}
                        />
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
      <Modal visible={visibleVoucher} transparent={false} animationType="fade">
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
              onPress={() => setVisibleVoucher(false)}
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
                <TextInput
                  placeholder={'Nhập mã voucher'}
                  paddingLeft={12}
                  value={voucherCode}
                  onChangeText={setVoucherCode}
                />
                <Pressable
                  onPress={useVoucherCode}
                  disabled={voucherCode.length === 0}
                  width={104}
                  height={37}
                  radius={5}
                  backgroundColor={
                    voucherCode.length === 0 ? COLORS.placeholder : COLORS.red4
                  }
                  absolute
                  zIndex={10}
                  top={4}
                  right={4}
                  alignCenter
                  justifyCenter>
                  <Text fontSize={15} medium color={COLORS.white}>
                    Sử dụng
                  </Text>
                </Pressable>
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
                {vouchers.map(item => (
                  <Pressable
                    onPress={() => setPromotionSelected(item.promotion_id)}
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
    </Block>
  );
}
