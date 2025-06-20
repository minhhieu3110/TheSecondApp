import {image} from '@assets';
import {Block, Image, Pressable, Text, ScrollView, NoneData} from '@components';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {ConvertDateTimeStamp} from '@utils';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import actions from '@actions';
import {formatCurrency} from 'utils/helper';
import Toast from 'react-native-toast-message';
import {ActivityIndicator} from 'react-native';
export default function CancelOrder() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.CANCEL_ORDER_PRO,
    });
  }, [dispatch]);
  const listOrder = useSelector(state => state.cancelOrderPro?.data || []);
  const {isLoading} = useSelector(state => state.cancelOrderPro);
  const onRefesh = () => {
    dispatch({
      type: actions.CANCEL_ORDER_PRO,
    });
  };
  const orderAgain = (info = []) => {
    info?.forEach(item =>
      dispatch({
        type: actions.ADD_CART,
        body: {
          product_id: item.product_item_id,
          quantity: item.quantity,
        },
        onSuccess: res => {
          Toast.show({
            type: 'success',
            text1: res?.message,
          });
          commonRoot.navigate(router.CART);
          dispatch({
            type: actions.GET_CART,
          });
        },
      }),
    );
    dispatch({
      type: actions.GET_CART,
    });
  };

  const carts = useSelector(state => state.getCart?.data || []);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 171}}
        onRefresh={onRefesh}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.red4} style={{marginTop: 10}} />
        ) : (
          <Block marginTop={15} gap={12} marginHorizontal={12}>
            {listOrder?.length === 0 ? (
              <NoneData />
            ) : (
              listOrder?.map(item => (
                <Pressable
                  key={item.order_code}
                  onPress={() =>
                    commonRoot.navigate(router.DETAIL_ORDER, {id: item.id})
                  }
                  paddingBottom={15}
                  backgroundColor={COLORS.white}
                  radius={8}>
                  <Block marginTop={18} marginLeft={12}>
                    <Text fontSize={17} semiBold color={COLORS.black2}>
                      #{item?.order_code}
                    </Text>
                    <Text
                      marginTop={15}
                      fontSize={15}
                      regular
                      color={COLORS.placeholder}>
                      {ConvertDateTimeStamp(item?.created_at)}
                    </Text>
                  </Block>
                  <Block
                    absolute
                    top={16}
                    right={12}
                    backgroundColor={item?.status?.color_bg}
                    radius={15}
                    paddingHorizontal={20}
                    paddingVertical={5}>
                    <Text
                      fontSize={13}
                      regular
                      color={item?.status?.color_title}>
                      {item?.status?.title}
                    </Text>
                  </Block>
                  <Block
                    borderWidth={1}
                    borderColor={COLORS.borderColor1}
                    marginTop={16}
                  />
                  <Block marginTop={13} gap={6}>
                    {item?.details?.map(detail => (
                      <Block
                        marginLeft={12}
                        marginRight={17}
                        row
                        borderWidth={0.2}
                        radius={8}
                        borderColor={listOrder?.status?.color_border}
                        key={detail?.product_item_id}>
                        <Image
                          source={{uri: detail?.product?.picture}}
                          width={73}
                          height={73}
                          radius={8}
                        />
                        <Block marginTop={3} marginLeft={8} width={width - 134}>
                          <Text
                            marginLeft={4}
                            fontSize={15}
                            medium
                            color={COLORS.black2}
                            numberOfLines={1}>
                            {detail?.product?.title}
                          </Text>
                          <Text
                            fontSize={14}
                            regular
                            color={COLORS.black2}
                            marginTop={14}>
                            x{detail?.quantity}
                          </Text>
                          <Block marginTop={12} row columnGap={20} alignCenter>
                            <Text fontSize={14} regular color={COLORS.red4}>
                              {formatCurrency(detail?.price_sale)}
                            </Text>
                            <Text
                              fontSize={14}
                              regular
                              color={COLORS.lightGray1}
                              lineThrough>
                              {formatCurrency(detail?.price)}
                            </Text>
                          </Block>
                        </Block>
                      </Block>
                    ))}
                  </Block>
                  <Block
                    borderWidth={1}
                    borderColor={COLORS.borderColor1}
                    marginTop={15}
                  />
                  <Block
                    marginLeft={12}
                    marginTop={16}
                    rowCenter
                    spaceBetween
                    marginHorizontal={12}>
                    <Block gap={11}>
                      {item?.cancel_reason !== '' ? (
                        <Text fontSize={14} regular color={COLORS.red4}>
                          Lý do hủy: {item?.cancel_reason}
                        </Text>
                      ) : (
                        ''
                      )}
                      <Text fontSize={15} regular color={COLORS.placeholder}>
                        Bạn có thể đặt lại đơn hàng
                      </Text>
                    </Block>
                    <Pressable
                      onPress={() =>
                        orderAgain(
                          item?.details?.map(detail => ({
                            product_item_id: detail?.product_item_id,
                            quantity: detail?.quantity,
                          })),
                        )
                      }
                      width={width - 296}
                      height={42}
                      radius={8}
                      backgroundColor={COLORS.red4}
                      justifyCenter
                      alignCenter>
                      <Text fontSize={15} regular color={COLORS.white}>
                        Đặt lại
                      </Text>
                    </Pressable>
                  </Block>
                </Pressable>
              ))
            )}
          </Block>
        )}
      </ScrollView>
    </Block>
  );
}
