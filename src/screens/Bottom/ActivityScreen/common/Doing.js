import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  Image,
  Text,
  Icon,
  Pressable,
  ScrollView,
  NoneData,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
import {formatCurrency} from 'utils/helper';

export default function Doing() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_LIST_ORDER_DOING, params: {is_status: 2}});
  }, [dispatch]);
  const doingList = useSelector(state => state.getListOrderDoing?.data || []);
  const {isLoading} = useSelector(state => state.getListOrderDoing);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 181}}>
        <Block width={width - 24} marginTop={15} marginHorizontal={12}>
          {isLoading ? (
            <ActivityIndicator color={COLORS.red4} />
          ) : doingList?.length === 0 ? (
            <NoneData />
          ) : (
            doingList?.map(item => (
              <Pressable
                key={item?.id}
                onPress={() =>
                  commonRoot.navigate(router.DETAIL_SERVICE, {
                    orderId: item.id,
                  })
                }
                paddingBottom={13.9}
                backgroundColor={COLORS.white}
                radius={8}
                marginBottom={15}>
                <Block marginTop={18} marginHorizontal={12}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={17} semiBold color={item?.status?.color}>
                      {item?.order?.service?.title}
                    </Text>
                    <Block
                      width={95}
                      height={29}
                      backgroundColor={item?.status?.background}
                      justifyCenter
                      alignCenter
                      radius={15}
                      absolute
                      top={12}
                      right={12}>
                      <Text fontSize={13} regular color={item?.status?.color}>
                        {item?.status?.title}
                      </Text>
                    </Block>
                  </Block>
                  <Text
                    marginTop={16}
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}>
                    {item?.order?.start_time}, {item?.order?.start_date}
                  </Text>
                </Block>

                <Block
                  marginTop={16}
                  paddingBottom={19}
                  paddingVertical={12}
                  borderWidth={1}
                  borderColor={COLORS.gray11}>
                  <Block rowCenter marginHorizontal={12} marginBottom={12}>
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
                  <Block rowCenter marginHorizontal={12} marginBottom={12}>
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
                      {item?.order?.hours} giờ, {item?.order?.start_time} đến{' '}
                      {item?.order?.end_time}
                    </Text>
                  </Block>
                  {item?.order?.repeat_weekly?.length !== 0 && (
                    <Block rowCenter marginHorizontal={12} marginBottom={12}>
                      <Image
                        source={icon.icon_calendar_days}
                        width={22}
                        height={22}
                      />
                      <Text
                        marginLeft={8}
                        fontSize={14}
                        regular
                        color={COLORS.black1}>
                        T4-T5, hàng tuần
                      </Text>
                    </Block>
                  )}
                  <Block rowCenter marginHorizontal={12} marginBottom={12}>
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
                  <Block rowCenter marginHorizontal={12} width={'85%'}>
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
                  width={width - 101.74}
                  height={42}
                  alignCenter>
                  <Block width={42} height={42} radius={50}>
                    <Image
                      width={42}
                      height={42}
                      source={{
                        uri: `${URL_API.uploads}/${item?.employee?.picture}`,
                      }}
                      resizeMode="cover"
                      radius={50}
                    />
                  </Block>
                  <Block marginLeft={13.3} height={40}>
                    <Text fontSize={14} regular color={COLORS.red4}>
                      {item?.employee?.full_name}
                    </Text>
                    <Block rowCenter>
                      <Text fontSize={14} regular color={COLORS.placeholder}>
                        {item?.employee?.star}
                      </Text>
                      <Icon
                        marginLeft={5}
                        IconType={FontAwesome}
                        iconName={'star'}
                        iconSize={18}
                        iconColor={COLORS.yellow3}
                      />
                    </Block>
                  </Block>
                </Block>
              </Pressable>
            ))
          )}
        </Block>
      </ScrollView>
    </Block>
  );
}
