import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Icon,
  Image,
  MethodPay,
  ModalSuccess,
  Pressable,
  Switch,
  Text,
  ScrollView,
  ChangeAddress,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {formatPhone} from '@utils';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import RadialGradient from 'react-native-radial-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {formatCurrency} from 'utils/helper';

export default function Shopping_Pay({route}) {
  const [usePoint, setUsePoint] = useState(0);
  const [show, setShow] = useState(0);
  const [changeAddress, setChangeAddress] = useState(false);

  const [methodSelected, setMethodSelected] = useState(1);
  const [promotionSelected, setPromotionSelected] = useState();
  const paymentMethod = useSelector(
    state => state.getPaymentMethod?.data || [],
  );
  const method = paymentMethod.find(item => item.method_id === methodSelected);
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
  const address = addressSaved?.find(item => item.id === addSelected);
  const addAddress = () => {
    commonRoot.navigate(router.ADD_NEW_ADDRESS);
    setChangeAddress(!changeAddress);
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
                {address?.address_full
                  ? address?.address_full
                  : userInfo?.address_full}
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
          <MethodPay
            top={20}
            payData={paymentMethod}
            onPressPay={method_id => setMethodSelected(method_id)}
            titlePay={method?.title}
            voucherData={vouchers}
            onPressVoucher={promotion_id => {
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
            }}
          />
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
      <ChangeAddress
        data={addressSaved}
        visible={changeAddress}
        defaultAddress={addSelected}
        close={() => setChangeAddress(!changeAddress)}
        onPress={item_id => {
          setAddSelected(item_id);
          setChangeAddress(!changeAddress);
        }}
        addAddress={addAddress}
      />
    </Block>
  );
}
