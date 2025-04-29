import actions from '@actions';
import {icon, image} from '@assets';
import {Block, Image, Pressable, Text, ScrollView} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useEffect} from 'react';
import {RefreshControl} from 'react-native';
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

  const onRefresh = () => {
    dispatch({
      type: actions.GET_LIST_ORDER,
      params: {is_status: 0},
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }>
        <Block width={width - 24} marginTop={15} marginHorizontal={12}>
          {newOrder.length === 0 ? (
            <Block marginTop={42.7} alignCenter>
              <Image
                source={image.image_none_activity}
                width={width - 119.67}
                height={227.04}
              />
              <Text
                marginTop={22.3}
                fontSize={15}
                regular
                color={COLORS.black2}>
                Hiện bạn chưa có công việc nào đang chờ
              </Text>
              <Pressable
                onPress={() => bottomRoot.navigate(router.HOME_SCREEN)}
                marginTop={20}
                width={width - 296}
                height={48}
                radius={8}
                backgroundColor={COLORS.red4}
                justifyCenter
                alignCenter>
                <Text fontSize={15} regular color={COLORS.white}>
                  Đăng việc ngay
                </Text>
              </Pressable>
            </Block>
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
                    backgroundColor={`${item?.status?.background}`}
                    justifyCenter
                    alignCenter
                    radius={15}
                    absolute
                    top={12}
                    right={12}>
                    <Text
                      fontSize={13}
                      regular
                      color={`${item?.status?.color}`}>
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
                        {item?.order?.hour} giờ, {item?.order?.start_time} đến{' '}
                        {item?.order?.end_time}
                      </Text>
                    </Block>
                    {item?.order?.repeat_weekly.length === 0 ? (
                      ''
                    ) : (
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
                    )}
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
                    <Block marginLeft={23} row width={width - 48}>
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
                    row
                    width={width - 101.74}
                    height={42}
                    alignCenter>
                    <Block width={42} height={42} radius={50}>
                      <Image
                        width={42}
                        height={42}
                        source={icon.icon_user_activity}
                        resizeMode="contain"
                        radius={50}
                      />
                    </Block>
                    <Block marginLeft={13.3} height={40}>
                      <Text fontSize={14} regular color={COLORS.red4}>
                        {item?.status?.note_title}
                      </Text>
                      <Text fontSize={14} regular color={COLORS.placeholder}>
                        {item?.status?.note_content}
                      </Text>
                    </Block>
                  </Block>
                </Pressable>
              ))}
            </>
          )}
        </Block>
      </ScrollView>
    </Block>
  );
}
