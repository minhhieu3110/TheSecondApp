import actions from '@actions';
import {icon, image} from '@assets';
import {Block, Image, Text, Icon, Pressable, ScrollView} from '@components';
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

export default function Complete() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_LIST_ORDER_COMPLETE, params: {is_status: 3}});
  }, [dispatch]);
  const listComplete = useSelector(
    state => state.getListOrderComplete?.data || [],
  );
  const {isLoading} = useSelector(state => state.getListOrderComplete);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 180}}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.red4} style={{marginTop: 10}} />
        ) : (
          <Block width={width - 24} marginTop={15} marginHorizontal={12}>
            {listComplete?.map(item => (
              <Pressable
                key={item?.id}
                onPress={() =>
                  commonRoot.navigate(router.DETAIL_SERVICE, {orderId: item.id})
                }
                paddingBottom={13.9}
                backgroundColor={COLORS.white}
                radius={8}
                marginBottom={15}>
                <Block marginTop={18} marginLeft={12}>
                  <Text fontSize={17} semiBold color={item?.status?.color}>
                    {item?.order?.service?.title}
                  </Text>
                  <Text
                    marginTop={16}
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}>
                    {item?.order?.start_time + ', ' + item?.order?.start_date}
                  </Text>
                </Block>
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
                      {item?.order?.hour +
                        ' giờ, ' +
                        item?.order?.start_time +
                        ' đến ' +
                        item?.order?.end_time}
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
                  <Block marginLeft={23} row width={'85%'}>
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
                    <Block row>
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
                  <Pressable
                    onPress={() =>
                      commonRoot.navigate(router.EVALUATE_SERVICE, {
                        orderId: item.id,
                      })
                    }
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
                      Đánh giá
                    </Text>
                  </Pressable>
                </Block>
              </Pressable>
            ))}
          </Block>
        )}
      </ScrollView>
    </Block>
  );
}
