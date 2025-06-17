import actions from '@actions';
import {
  Block,
  HeaderTitle,
  Image,
  Text,
  Icon,
  Pressable,
  ModalTurnOffRepeat,
  StatusBar,
} from '@components';
import {COLORS} from '@theme';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {icon, image} from '@assets';
import {width} from '@responsive';
import router from '@router';
import {commonRoot} from 'navigation/navigationRef';
import {ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {formatCurrency} from 'utils/helper';
import Toast from 'react-native-toast-message';
export default function RepeatService() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_LIST_ORDER, params: {repeat_weekly: 1}});
  }, [dispatch]);
  const repeatWeekly = useSelector(state => state.getListOrder?.data || []);
  const [show, setShow] = useState(false);
  const handleCancelRepeat = order_id => {
    dispatch({
      type: actions.CANCEL_REPEAT,
      body: {order_id: order_id},
      onSuccess: () => {
        dispatch({type: actions.GET_LIST_ORDER, params: {repeat_weekly: 1}});
      },
    });
  };
  return (
    <Block backgroundColor={COLORS.gray10} flex>
      <StatusBar />
      <HeaderTitle canGoBack title={'Dịch vụ lặp lại'} />
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <Block width={width - 24} marginTop={15} marginHorizontal={12}>
          {repeatWeekly?.map(item => (
            <Pressable
              key={item?.id}
              onPress={() =>
                commonRoot.navigate(router.DETAIL_REPEAT_SERVICE, {
                  orderId: item.id,
                })
              }
              paddingBottom={13.9}
              backgroundColor={COLORS.white}
              radius={8}
              marginBottom={15}>
              <Block marginTop={18} marginLeft={12}>
                <Text fontSize={17} semiBold color={COLORS.red4}>
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
                width={width - 327}
                height={29}
                backgroundColor={COLORS.pinkWhite2}
                justifyCenter
                alignCenter
                radius={15}
                absolute
                top={12}
                right={12}>
                <Text fontSize={13} regular color={COLORS.red4}>
                  Lặp lại
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
                    source={icon.icon_calendar_day}
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
                    source={icon.icon_time_activity}
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
                    source={icon.icon_calendar_days}
                    width={22}
                    height={22}
                  />
                  <Text
                    marginLeft={8}
                    fontSize={14}
                    regular
                    color={COLORS.red4}>
                    {item?.order?.repeat_weekly?.join('-')} hàng tuần
                  </Text>
                </Block>
                <Block marginLeft={23} row marginBottom={12}>
                  <Image
                    source={icon.icon_price_service}
                    width={22}
                    height={22}
                  />
                  <Text
                    marginLeft={8}
                    fontSize={14}
                    regular
                    color={COLORS.red4}>
                    {formatCurrency(item?.amount_final)}
                  </Text>
                </Block>
                <Block marginLeft={23} row>
                  <Image
                    source={icon.icon_position_address}
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
              <Block
                marginLeft={11.7}
                marginTop={14.1}
                row
                height={42}
                alignCenter>
                <Pressable
                  onPress={() => handleCancelRepeat(item?.id)}
                  width={152}
                  height={42}
                  justifyCenter
                  alignCenter
                  radius={8}
                  absolute
                  right={10}
                  zIndex={10}
                  backgroundColor={COLORS.red4}>
                  <Text fontSize={15} regular color={COLORS.white}>
                    Tắt lặp lại
                  </Text>
                </Pressable>
              </Block>
              {/* <ModalTurnOffRepeat
                visible={show}
                close={() => setShow(!show)}
                onPress={() => console.log(item?.id)}
              /> */}
            </Pressable>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
}
