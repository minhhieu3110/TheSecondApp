import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Icon,
  Image,
  MethodPay,
  ModalSuccess,
  Pressable,
  Switch,
  Text,
  ScrollView,
  TextInput,
  TicketVoucherShape,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {ConvertTimeStamp, formatPhone} from '@utils';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {Modal, SafeAreaView, TouchableOpacity} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {formatCurrency} from 'utils/helper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {URL_API} from 'redux/sagas/common';

export default function Shopping_Pay({route}) {
  const [usePoint, setUsePoint] = useState(0);
  const [show, setShow] = useState(0);
  const [changeAddress, setChangeAddress] = useState(false);
  const [visibleMethodPay, setVisibleMethodPay] = useState(false);
  const [visibleVoucher, setVisibleVoucher] = useState(false);

  const [methodSelected, setMethodSelected] = useState(1);
  const [promotionSelected, setPromotionSelected] = useState();
  const paymentMethod = useSelector(
    state => state.getPaymentMethod?.data || [],
  );
  const method = paymentMethod.find(item => item.method_id === methodSelected);
  const [voucherCode, setVoucherCode] = useState('');
  const infoAddCart = useSelector(state => state.addCart?.data || []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_VOUCHER,
      params: {apply_for: 'product'},
    });
    dispatch({
      type: actions.GET_PAYMENT_METHOD,
    });
    dispatch({
      type: actions.GET_ADDRESS_SAVE,
    });
    dispatch({
      type: actions.CALCULATION_PRICE_PRODUCT,
      params: {
        cart_item:
          route?.params?.cart_item === undefined
            ? [infoAddCart?.cart?.id]
            : route?.params?.cart_item,
      },
    });
  }, [dispatch]);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const vouchers = useSelector(state => state.getVoucher?.data || []);
  const addressSaved = useSelector(state => state.getAddressSave?.data || []);
  const [addSelected, setAddSelected] = useState(
    addressSaved.find(item => item.is_default === 1)?.item_id || null,
  );
  const handleSelectAdd = item_id => {
    setAddSelected(item_id);
    setChangeAddress(!changeAddress);
  };
  const address = addressSaved?.find(item => item.id === addSelected);
  const addAddress = () => {
    commonRoot.navigate(router.ADD_NEW_ADDRESS);
    setChangeAddress(!changeAddress);
  };
  const useVoucherCode = () => {
    if (vouchers.filter(item => item.promotion_id === voucherCode)) {
      setPromotionSelected(voucherCode);
    }
  };

  const handleChooseVoucher = promotion_id => {
    setPromotionSelected(promotion_id);
    dispatch({
      type: actions.CALCULATION_PRICE_PRODUCT,
      params: {
        promotion_id: promotion_id,
        cart_item:
          route?.params?.cart_item === undefined
            ? [infoAddCart?.cart?.id]
            : route?.params?.cart_item,
      },
    });
  };

  const cacl = useSelector(state => state.calculationPriceProduct?.data || []);
  const checkout = () => {
    dispatch({
      type: actions.CHECKOUT,
      body: {
        address_id: addSelected,
        method_id: methodSelected,
        promotion_id: promotionSelected,
        use_point: 0,
        cart_item:
          route?.params?.cart_item === undefined
            ? [infoAddCart?.cart?.id]
            : route?.params?.cart_item,
      },
      onSuccess: () => {
        setShow(!show);
      },
    });
  };
  console.log('==', route?.params?.cart_item);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Xác nhận và thanh toán'} />
      <ScrollView contentContainerStyle={{paddingBottom: 179}}>
        <Block marginTop={20} marginHorizontal={12}>
          <Text fontSize={16} semiBold color={COLORS.black2}>
            Thông tin nhận hàng
          </Text>
          <Block
            marginTop={15}
            radius={8}
            backgroundColor={COLORS.white}
            paddingBottom={19}>
            <Block marginHorizontal={12} marginTop={12}>
              <Block row alignCenter>
                <Image source={icon.icon_name_user} width={22} height={22} />
                <Text fontSize={15} medium color={COLORS.black2} marginLeft={8}>
                  {userInfo?.full_name}
                </Text>
              </Block>
              <Text
                marginTop={13}
                marginLeft={30}
                fontSize={14}
                regular
                color={COLORS.red4}>
                {formatPhone(userInfo?.phone)}
              </Text>
              <Text
                marginTop={11}
                marginLeft={30}
                fontSize={14}
                regular
                color={COLORS.black2}
                numberOfLines={2}>
                {address?.address_full}
              </Text>
              <Pressable
                onPress={() => setChangeAddress(true)}
                width={76.83}
                height={30.33}
                radius={15}
                overflow={'hidden'}
                absolute
                top={0}
                right={0}>
                <RadialGradient
                  colors={COLORS.gradient5}
                  style={{
                    width: 76.83,
                    height: 30.33,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text fontSize={13} medium color={COLORS.white}>
                    Thay đổi
                  </Text>
                </RadialGradient>
              </Pressable>
            </Block>
          </Block>
          <Text marginTop={19} fontSize={16} semiBold color={COLORS.black2}>
            Sản phẩm
          </Text>
          <Block marginTop={15} gap={12}>
            {cacl?.list_product?.map(item => (
              <Block
                key={item.id}
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
                        {formatCurrency(item?.product?.price_sale)}
                      </Text>
                      <Text
                        fontSize={14}
                        regular
                        color={COLORS.lightGray1}
                        lineThrough>
                        {formatCurrency(item?.product?.price)}
                      </Text>
                    </Block>
                  </Block>
                </Block>
              </Block>
            ))}
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
          <Block marginTop={15} row alignCenter>
            <Text fontSize={14} regular color={COLORS.black2}>
              Dùng điểm tích luỹ
            </Text>
            <Block row rowGap={10} absolute right={0}>
              <Text fontSize={14} medium color={COLORS.black2}>
                {userInfo?.point} điểm
              </Text>
              <Block marginLeft={10}>
                <Switch value={usePoint} onValueChange={setUsePoint} />
              </Block>
            </Block>
          </Block>
          <Block marginTop={25}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Đơn hàng của bạn
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
                      {formatCurrency(cacl?.amount_estimated)}
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
                      -{formatCurrency(cacl?.amount_promotion)}
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
                      -{formatCurrency(userInfo?.point)}
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
                      {formatCurrency(cacl?.amount_final)}
                    </Text>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
          <Text
            center
            marginHorizontal={10}
            marginTop={15}
            fontSize={14}
            regular
            color={COLORS.black2}>
            Nhấn vào nút "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
            <Text color={COLORS.red4}> Điều khoản</Text> SAN
          </Text>
        </Block>
      </ScrollView>
      <Block
        absolute
        bottom={0}
        backgroundColor={COLORS.white}
        width={width}
        paddingBottom={12}>
        <Block marginHorizontal={12} marginTop={13}>
          <Block>
            <Block rowCenter spaceBetween>
              <Text fontSize={14} regular color={COLORS.black2}>
                Tổng thanh toán
              </Text>
              <Text fontSize={15} semiBold color={COLORS.red4}>
                {formatCurrency(cacl?.amount_final)}
              </Text>
            </Block>
          </Block>
        </Block>
        <Pressable
          onPress={checkout}
          marginTop={13}
          marginHorizontal={12}
          backgroundColor={COLORS.red4}
          radius={8}
          justifyCenter
          alignCenter
          height={48}>
          <Text fontSize={15} regular color={COLORS.white}>
            Đặt hàng
          </Text>
        </Pressable>
      </Block>
      <ModalSuccess
        visible={show}
        close={() => setShow(!show)}
        onPress={() => {
          commonRoot.navigate(router.SHOPPING);
          setShow(!show);
        }}
      />
      <Modal transparent={true} animationType="fade" visible={changeAddress}>
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              flex: 1,
              backgroundColor: COLORS.transparentColor4,
              alignItems: 'center',
            }}>
            <Block
              width={width}
              height={600}
              backgroundColor={COLORS.white}
              borderTopRadius={8}
              absolute
              bottom={0}>
              <Block marginTop={10}>
                <Text fontSize={15} semiBold color={COLORS.placeholder} center>
                  Chọn địa chỉ
                </Text>
                <Pressable
                  onPress={() => setChangeAddress(!changeAddress)}
                  absolute
                  right={10}>
                  <Icon
                    IconType={FontAwesome5}
                    iconName={'times'}
                    iconColor={COLORS.placeholder}
                    iconSize={20}
                  />
                </Pressable>
              </Block>
              <Block
                borderWidth={1}
                marginTop={10}
                borderColor={COLORS.gray10}
              />
              <ScrollView>
                <Block
                  width={width - 24}
                  marginHorizontal={12}
                  marginTop={15}
                  spaceBetween
                  gap={7}>
                  {addressSaved.map(item => (
                    <Pressable
                      onPress={() => handleSelectAdd(item.item_id)}
                      key={item.item_id}
                      width={width - 24}
                      radius={8}
                      paddingBottom={18}
                      marginBottom={12}
                      borderWidth={0.5}
                      borderColor={COLORS.red4}>
                      <Block
                        marginLeft={10}
                        marginTop={12}
                        height={25}
                        row
                        alignCenter>
                        <Image
                          source={icon.icon_position_address}
                          width={25}
                          height={25}
                        />
                        <Text
                          marginLeft={4}
                          fontSize={14}
                          regular
                          color={COLORS.placeholder}>
                          {item.title}
                        </Text>
                        <Block
                          absolute
                          right={5}
                          width={15}
                          height={15}
                          radius={15}
                          borderWidth={0.5}
                          borderColor={COLORS.black2}
                          justifyCenter
                          alignCenter>
                          {addSelected === item.item_id ? (
                            <Block
                              width={11}
                              height={11}
                              radius={11}
                              backgroundColor={COLORS.red4}></Block>
                          ) : (
                            ''
                          )}
                        </Block>
                      </Block>
                      <Text
                        fontSize={14}
                        regular
                        color={COLORS.placeholder}
                        numberOfLines={2}
                        marginLeft={39}
                        marginTop={9}>
                        {item.address_full}
                      </Text>
                    </Pressable>
                  ))}
                </Block>
              </ScrollView>
              <Block height={60} justifyCenter alignCenter>
                <Pressable
                  onPress={addAddress}
                  height={48}
                  width={width - 24}
                  marginHorizontal={12}
                  backgroundColor={COLORS.red4}
                  radius={8}
                  justifyCenter
                  alignCenter>
                  <Text fontSize={15} semiBold color={COLORS.white}>
                    Thêm địa chỉ
                  </Text>
                </Pressable>
              </Block>
            </Block>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
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
                    onPress={() => handleChooseVoucher(item.promotion_id)}
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
