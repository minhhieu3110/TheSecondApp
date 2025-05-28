import actions from '@actions';
import {image} from '@assets';
import {
  Block,
  ButtonSubmitService,
  HeaderTitle,
  Icon,
  Image,
  Pressable,
  Text,
  TextInput,
  ScrollView,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {formatCurrency} from 'utils/helper';
export default function Cart() {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.getCart?.data || []);
  const [chooseProducts, setChooseProducts] = useState([]);
  const handleChooseAll = () => {
    if (!carts?.list_product?.length) return;
    if (chooseProducts.length === carts.list_product.length) {
      setChooseProducts([]);
    } else {
      setChooseProducts(carts.list_product.map(item => item.id));
    }
  };
  const handleChoose = id => {
    setChooseProducts(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      return [...prev, id];
    });
  };
  const deleteCart = id => {
    dispatch({
      type: actions.DELETE_CART,
      params: {id: id},
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
        dispatch({
          type: actions.GET_CART,
        });
      },
    });
  };
  useEffect(() => {
    chooseProducts.length !== 0
      ? dispatch({
          type: actions.CALCULATION_PRICE_PRODUCT,
          params: {cart_item: chooseProducts},
        })
      : dispatch({
          type: actions.CALCULATION_PRICE_PRODUCT,
          params: {cart_item: [0]},
        });
  }, [dispatch, chooseProducts]);
  const cacl = useSelector(state => state.calculationPriceProduct?.data || []);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle
        root={commonRoot}
        screenName={router.SHOPPING}
        title={'Giỏ hàng'}
      />
      <ScrollView contentContainerStyle={{paddingBottom: 208}}>
        <Block marginTop={16} marginHorizontal={12}>
          <Pressable onPress={handleChooseAll} row alignCenter>
            {carts?.list_product?.length === 0 ? (
              <Icon
                IconType={Feather}
                iconColor={COLORS.lightGray1}
                iconSize={22}
                iconName={'square'}
              />
            ) : (
              <Icon
                IconType={
                  chooseProducts.length === carts?.list_product?.length
                    ? AntDesign
                    : Feather
                }
                iconSize={22}
                iconColor={
                  chooseProducts.length === carts?.list_product?.length
                    ? COLORS.red4
                    : COLORS.lightGray1
                }
                iconName={
                  chooseProducts.length === carts?.list_product?.length
                    ? 'checksquare'
                    : 'square'
                }
              />
            )}
            <Text fontSize={15} regular color={COLORS.black2} marginLeft={12}>
              Chọn tất cả
            </Text>
          </Pressable>
          <Block marginTop={12} gap={12}>
            {carts?.list_product?.map(item => (
              <ScrollView key={item.id} horizontal={true}>
                <Pressable
                  padding={12}
                  backgroundColor={COLORS.white}
                  borderLeftRadius={8}>
                  <Block row>
                    <Pressable
                      onPress={() => handleChoose(item.id)}
                      marginTop={25}>
                      <Icon
                        IconType={
                          chooseProducts.includes(item.id) ? AntDesign : Feather
                        }
                        iconSize={22}
                        iconColor={
                          chooseProducts.includes(item.id)
                            ? COLORS.red4
                            : COLORS.lightGray1
                        }
                        iconName={
                          chooseProducts.includes(item.id)
                            ? 'checksquare'
                            : 'square'
                        }
                      />
                    </Pressable>
                    <Block marginHorizontal={12} row gap={12}>
                      <Block
                        width={73}
                        height={73}
                        radius={5}
                        overflow={'hidden'}>
                        <Image
                          source={{uri: item?.product?.picture}}
                          height={'100%'}
                          width={'100%'}
                          resizeMode="cover"
                        />
                      </Block>
                      <Block marginTop={3} marginRight={12} width={width - 167}>
                        <Text
                          lineHeight={17}
                          fontSize={15}
                          medium
                          color={COLORS.black2}
                          numberOfLines={1}>
                          {item?.product?.title}
                        </Text>
                        <Block row alignCenter marginTop={19} columnGap={20}>
                          {item?.product?.percent_discount === 0 ? (
                            ''
                          ) : (
                            <Text
                              fontSize={14}
                              semiBold
                              color={COLORS.red4}
                              lineHeight={17}>
                              {formatCurrency(item?.product?.price_sale)}
                            </Text>
                          )}
                          <Text
                            fontSize={14}
                            semiBold={
                              item?.product?.percent_discount !== 0
                                ? false
                                : true
                            }
                            regular={
                              item?.product?.percent_discount !== 0 && true
                            }
                            color={
                              item?.product?.percent_discount !== 0
                                ? COLORS.lightGray1
                                : COLORS.red4
                            }
                            lineThrough={
                              item?.product?.percent_discount !== 0
                                ? true
                                : false
                            }
                            lineHeight={17}>
                            {formatCurrency(item?.product?.price)}
                          </Text>
                        </Block>
                        <Block
                          marginTop={13}
                          paddingBottom={3.2}
                          shadow3
                          borderColor={COLORS.gray11}
                          borderWidth={0.5}
                          marginRight={173}>
                          <Block
                            marginTop={5.8}
                            marginLeft={7}
                            marginRight={7.3}
                            row
                            alignCenter
                            spaceBetween>
                            <Pressable
                              onPress={() => {
                                if (item?.quantity > 1) {
                                  dispatch({
                                    type: actions.UPDATE_CART,
                                    params: {id: item.id},
                                    body: {quantity: item?.quantity - 1},
                                    onSuccess: res => {
                                      Toast.show({
                                        type: 'success',
                                        text1: res?.message,
                                      });
                                      dispatch({
                                        type: actions.GET_CART,
                                      });
                                    },
                                    onFail: e => {
                                      Toast.show({
                                        type: 'error',
                                        text1Style: e,
                                      });
                                    },
                                  });
                                }
                              }}>
                              <Icon
                                IconType={Ionicons}
                                iconName={'remove-outline'}
                                iconColor={COLORS.red}
                                iconSize={10.1}
                              />
                            </Pressable>
                            <Text fontSize={16} regular color={COLORS.black}>
                              {item?.quantity}
                            </Text>
                            <Pressable
                              onPress={() => {
                                if (item?.quantity > 1) {
                                  dispatch({
                                    type: actions.UPDATE_CART,
                                    params: {id: item.id},
                                    body: {quantity: item?.quantity - 1},
                                    onSuccess: res => {
                                      Toast.show({
                                        type: 'success',
                                        text1: res?.message,
                                      });
                                      dispatch({
                                        type: actions.GET_CART,
                                      });
                                    },
                                    onFail: e => {
                                      Toast.show({
                                        type: 'error',
                                        text1Style: e,
                                      });
                                    },
                                  });
                                }
                              }}>
                              <Icon
                                IconType={Ionicons}
                                iconName={'add-outline'}
                                iconColor={COLORS.red}
                                iconSize={10.1}
                              />
                            </Pressable>
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Pressable>
                <Pressable
                  onPress={() => deleteCart(item.id)}
                  width={100}
                  backgroundColor={COLORS.red4}
                  borderRightRadius={8}
                  justifyCenter
                  alignCenter>
                  <Icon
                    IconType={AntDesign}
                    iconName={'delete'}
                    iconSize={40}
                    iconColor={COLORS.white}
                  />
                </Pressable>
              </ScrollView>
            ))}
          </Block>
        </Block>
      </ScrollView>
      <ButtonSubmitService
        disable={chooseProducts.length === 0 && true}
        titleBottom={`${chooseProducts.length} sản phẩm`}
        titleTop={
          <>
            Tổng cộng:{' '}
            <Text color={COLORS.red4}>
              {formatCurrency(cacl?.amount_final)}
            </Text>
          </>
        }
        onPress={() =>
          commonRoot.navigate(router.PAY_SHOPPING, {cart_item: chooseProducts})
        }
      />
    </Block>
  );
}
