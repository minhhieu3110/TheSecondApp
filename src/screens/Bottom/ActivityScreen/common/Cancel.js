import actions from '@actions';
import {icon, image} from '@assets';
import {Block, Image, Text, ScrollView, Pressable, NoneData} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {formatCurrency} from '@utils';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export default function Cancel() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_LIST_ORDER_CANCEL,
      params: {is_status: -1},
    });
  }, [dispatch]);
  const cancelOrder = useSelector(
    state => state.getListOrderCancel?.data || [],
  );
  const {isLoading} = useSelector(state => state.getListOrderCancel);
  const onRefresh = () => {
    dispatch({
      type: actions.GET_LIST_ORDER_CANCEL,
      params: {is_status: -1},
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 181}}>
        <Block width={width - 24} marginTop={15} marginHorizontal={12}>
          {isLoading ? (
            <ActivityIndicator color={COLORS.red4} />
          ) : cancelOrder?.length === 0 ? (
            <NoneData />
          ) : (
            cancelOrder?.map(item => (
              <Pressable
                key={item.id}
                onPress={() =>
                  commonRoot.navigate(router.DETAIL_SERVICE, {
                    orderId: item.id,
                  })
                }
                backgroundColor={COLORS.white}
                radius={8}
                marginBottom={15}>
                <Block marginTop={18} marginLeft={12}>
                  <Text fontSize={17} semiBold color={COLORS.black1}>
                    {item?.order?.service?.title}
                  </Text>
                  <Text
                    marginTop={16}
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}>
                    {item?.order?.start_time}, {item?.order?.start_date}
                  </Text>
                </Block>
                <Block
                  width={95}
                  height={29}
                  backgroundColor={COLORS.gray11}
                  justifyCenter
                  alignCenter
                  radius={15}
                  absolute
                  top={12}
                  right={12}>
                  <Text fontSize={13} regular color={COLORS.black1}>
                    {item?.status?.title}
                  </Text>
                </Block>
                <Block
                  marginTop={16}
                  paddingBottom={19}
                  paddingVertical={12}
                  borderWidth={1}
                  borderColor={COLORS.gray11}>
                  <Block marginLeft={23} row marginBottom={12}>
                    <Image
                      source={icon.icon_day_cancel}
                      width={22}
                      height={22}
                    />
                    <Text
                      marginLeft={8}
                      fontSize={14}
                      regular
                      color={COLORS.black1}>
                      {item?.order?.start_date}
                    </Text>
                  </Block>
                  <Block marginLeft={23} row marginBottom={12}>
                    <Image
                      source={icon.icon_time_cancel}
                      width={22}
                      height={22}
                    />
                    <Text
                      marginLeft={8}
                      fontSize={14}
                      regular
                      color={COLORS.black1}>
                      {item?.order?.hour} giờ, {item?.order?.start_time} đến{' '}
                      {item?.order?.end_time}
                    </Text>
                  </Block>
                  <Block marginLeft={23} row marginBottom={12}>
                    <Image
                      source={icon.icon_price_cancel}
                      width={22}
                      height={22}
                    />
                    <Text
                      marginLeft={8}
                      fontSize={14}
                      regular
                      color={COLORS.black1}>
                      {formatCurrency(item?.amount_final)}
                    </Text>
                  </Block>
                  <Block marginLeft={23} row width={'85%'}>
                    <Image
                      source={icon.icon_address_cancel}
                      width={22}
                      height={22}
                    />
                    <Text
                      marginLeft={8}
                      fontSize={14}
                      regular
                      color={COLORS.black1}
                      numberOfLines={2}>
                      {item?.address_full}
                    </Text>
                  </Block>
                </Block>
              </Pressable>
            ))
          )}
          {/* ))} */}
        </Block>
      </ScrollView>
    </Block>
  );
}
