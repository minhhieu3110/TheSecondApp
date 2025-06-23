import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  Image,
  Pressable,
  Text,
  ScrollView,
  NoneData,
  Loading,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useEffect} from 'react';
import {ActivityIndicator, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {formatCurrency} from 'utils/helper';

export default function NewActivity() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_LIST_ORDER,
      params: {is_status: 0},
    });
  }, [dispatch]);
  const newOrder = useSelector(state => state.getListOrder?.data || []);
  const {isLoading} = useSelector(state => state.getListOrder);
  const onRefresh = () => {
    dispatch({
      type: actions.GET_LIST_ORDER,
      params: {is_status: 0},
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 181}}
        onRefresh={onRefresh}>
        {isLoading ? (
          <Loading />
        ) : (
          <Block width={width - 24} marginTop={15} marginHorizontal={12}>
            {newOrder.length === 0 ? (
              <NoneData
                top={42.7}
                title={'Bạn chưa có công việc nào đang chờ'}
                btn={true}
                titleBtn={'Đăng việc ngay'}
                onPress={() => bottomRoot.navigate(router.HOME_SCREEN)}
              />
            ) : (
              <>
                {newOrder?.map(item => (
                  <Pressable
                    key={item.id}
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
                        <Text fontSize={17} semiBold color={COLORS.red4}>
                          {item?.order?.service?.title}
                        </Text>
                        <Block
                          width={95}
                          height={29}
                          backgroundColor={`${item?.status?.background}`}
                          justifyCenter
                          alignCenter
                          radius={15}>
                          <Text
                            fontSize={13}
                            regular
                            color={`${item?.status?.color}`}>
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
                      borderTopWidth={1}
                      borderBottomWidth={1}
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
                          {item?.order?.hour} giờ, {item?.order?.start_time} đến{' '}
                          {item?.order?.end_time}
                        </Text>
                      </Block>
                      {item?.order?.repeat_weekly?.length !== 0 && (
                        <Block
                          rowCenter
                          marginHorizontal={12}
                          marginBottom={12}>
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
                          width={width - 85}
                          numberOfLines={2}>
                          {item?.address_full}
                        </Text>
                      </Block>
                    </Block>
                    <Block
                      marginLeft={11.7}
                      marginTop={14.1}
                      width={'95%'}
                      rowCenter
                      gap={13.3}
                      height={42}
                      alignCenter>
                      <Image
                        width={42}
                        height={42}
                        source={icon.icon_user_activity}
                        resizeMode="contain"
                        radius={50}
                      />
                      <Block height={40} width={'80%'}>
                        <Text fontSize={14} regular color={COLORS.red4}>
                          {item?.status?.note_title}
                        </Text>
                        <Text
                          fontSize={14}
                          regular
                          color={COLORS.placeholder}
                          numberOfLines={1}>
                          {item?.status?.note_content}
                        </Text>
                      </Block>
                    </Block>
                  </Pressable>
                ))}
              </>
            )}
          </Block>
        )}
      </ScrollView>
    </Block>
  );
}
