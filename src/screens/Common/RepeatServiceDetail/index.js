import actions from '@actions';
import {icon} from '@assets';
import {
  Block,
  HeaderTitle,
  Icon,
  Image,
  Pressable,
  Text,
  PolicyCancelPackageService,
  ModalTurnOffRepeat,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {formatCurrency, formatPhone} from '@utils';
import {commonRoot, root} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {ScrollView, Modal, SafeAreaView, TouchableOpacity} from 'react-native';
import RenderHTML from 'react-native-render-html';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
export default function RepeatServiceDetail({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_DETAIL_ORDER,
      params: {orderId: route?.params?.orderId},
    });
    dispatch({
      type: actions.GET_LIST_REASON,
    });
  }, [dispatch]);
  const [show, setShow] = useState(0);
  const [visible, setVisible] = useState(0);
  const [showNotification, setShowNotification] = useState(0);
  const detailOrder = useSelector(state => state.getDetailOrder?.data || []);
  const reasons = useSelector(state => state.getListReason?.data || []);
  const [reasonsCancel, setReasonCancel] = useState('');
  const handleConfirmCancel = () => {
    dispatch({
      type: actions.CANCEL_ORDER,
      body: {id: route?.params?.orderId, reason_id: reasonsCancel},
      onSuccess: () => {
        dispatch({
          type: actions.GET_LIST_ORDER,
          params: {is_status: 0},
        });
        root.goBack();
      },
    });
  };
  const onPress = status => {
    status === -1 &&
      dispatch({
        type: actions.RE_ORDER,
        body: {order_id: route?.params?.orderId},
      });
  };
  const reasonCancel = reasons.find(
    item => item.item_id === detailOrder?.reason_id,
  );
  const handle = () => {
    detailOrder?.order?.repeat_weekly.length === 0
      ? setShow(!show)
      : setVisible(!visible);
  };
  const handleCancelRepeat = order_id => {
    dispatch({
      type: actions.CANCEL_REPEAT,
      body: {order_id: order_id},
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
        setVisible(!visible);
        root.goBack();
        dispatch({
          type: actions.GET_LIST_ORDER,
          params: {is_status: 0},
        });
        dispatch({type: actions.GET_LIST_ORDER, params: {repeat_weekly: 1}});
      },
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Chi tiết dịch vụ'} canGoBack />
      <ScrollView
        contentContainerStyle={{paddingBottom: 153}}
        showsVerticalScrollIndicator={false}>
        <Block marginTop={12} marginHorizontal={12}>
          {detailOrder?.is_status === -1 ? (
            ''
          ) : (
            <Block
              width={width - 24}
              height={72}
              radius={8}
              backgroundColor={`${detailOrder?.status?.background}`}
              row
              alignCenter>
              <Image
                source={
                  detailOrder?.order?.repeat_weekly.length === 0
                    ? icon.icon_user_activity
                    : icon.title_repeat_icon
                }
                width={42}
                height={42}
                marginLeft={11.7}
              />
              <Block marginLeft={13.3}>
                <Text
                  fontSize={14}
                  medium
                  color={`${detailOrder?.status?.color}`}>
                  {detailOrder?.order?.repeat_weekly.length === 0
                    ? detailOrder?.status?.note_title
                    : `Lặp ${detailOrder?.order?.repeat_weekly?.join('-')}`}
                </Text>
                <Text fontSize={14} regular color={COLORS.black2}>
                  {detailOrder?.order?.repeat_weekly.length === 0
                    ? detailOrder?.status?.note_content
                    : 'Giúp bạn tiết kiệm thời gian và chi phí'}
                </Text>
              </Block>
            </Block>
          )}
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Vị trí làm việc
          </Text>
          <Block
            paddingBottom={15}
            radius={8}
            backgroundColor={COLORS.white}
            marginTop={15}>
            <Block width={width - 48} marginHorizontal={12} marginTop={14}>
              <Block>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_position_address}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={15}
                    medium
                    color={COLORS.black2}
                    marginLeft={8}>
                    Công ty
                  </Text>
                </Block>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  marginLeft={30}
                  marginTop={11}
                  numberOfLines={2}>
                  {detailOrder?.address_full}
                </Text>
              </Block>
              <Block
                absolute
                top={85}
                right={0}
                width={width - 76}
                borderWidth={1}
                borderColor={COLORS.borderColor1}
              />
              <Block marginTop={28}>
                <Block row alignCenter>
                  <Image source={icon.icon_name_user} width={22} height={22} />
                  <Text
                    fontSize={15}
                    medium
                    color={COLORS.black2}
                    marginLeft={8}>
                    {detailOrder?.order?.full_name}
                  </Text>
                </Block>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  marginLeft={30}
                  marginTop={11}
                  numberOfLines={2}>
                  {formatPhone(detailOrder?.order?.phone)}
                </Text>
              </Block>
            </Block>
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Thông tin công việc
          </Text>
          <Block
            paddingBottom={15}
            radius={8}
            backgroundColor={COLORS.white}
            marginTop={15}>
            <Block width={width - 48} marginHorizontal={12} marginTop={14}>
              <Block row alignCenter>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_calendar_day}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={8}>
                    Ngày làm việc
                  </Text>
                </Block>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    {detailOrder?.order?.start_date}
                  </Text>
                </Block>
              </Block>
              <Block
                marginTop={13}
                marginLeft={28}
                width={width - 76}
                borderWidth={1}
                borderColor={COLORS.borderColor1}
                marginBottom={12}
              />
              <Block row alignCenter>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_time_activity}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginLeft={8}>
                    Thời gian làm việc
                  </Text>
                </Block>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    {detailOrder?.order?.hour} giờ,{' '}
                    {detailOrder?.order?.start_time} đến{' '}
                    {detailOrder?.order?.end_time}
                  </Text>
                </Block>
              </Block>
              <Block
                marginTop={13}
                marginLeft={28}
                width={width - 76}
                borderWidth={1}
                borderColor={COLORS.borderColor1}
                marginBottom={12}
              />

              {detailOrder?.order?.repeat_weekly === null ||
              detailOrder?.order?.repeat_weekly.length === 0 ? (
                ''
              ) : (
                <>
                  <Block row alignCenter>
                    <Block row alignCenter>
                      <Image
                        source={icon.icon_calendar_days}
                        width={22}
                        height={22}
                      />
                      <Text
                        fontSize={14}
                        regular
                        color={COLORS.placeholder}
                        marginLeft={8}>
                        Lặp lại hàng tuần
                      </Text>
                    </Block>
                    <Block absolute right={0}>
                      <Text fontSize={14} regular color={COLORS.black2}>
                        {detailOrder?.order?.repeat_weekly?.join('-')}
                      </Text>
                    </Block>
                  </Block>
                  <Block
                    marginTop={13}
                    marginLeft={28}
                    width={width - 76}
                    borderWidth={1}
                    borderColor={COLORS.borderColor1}
                    marginBottom={12}
                  />
                </>
              )}

              <Block>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_detail_activity}
                    width={22}
                    height={22}
                  />
                  <Text
                    fontSize={15}
                    medium
                    color={COLORS.black2}
                    marginLeft={8}>
                    Chi tiết công việc
                  </Text>
                </Block>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  marginLeft={30}
                  marginTop={9}>
                  {detailOrder?.order?.service?.title}
                </Text>
                {detailOrder?.order?.note && (
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.black2}
                    marginLeft={30}
                    marginTop={11}>
                    Ghi chú: {detailOrder?.order?.note}
                  </Text>
                )}
              </Block>
            </Block>
          </Block>
          {detailOrder?.reason_id === null ? (
            ''
          ) : (
            <Block>
              <Text fontSize={15} semiBold color={COLORS.black2} marginTop={23}>
                Lý do huỷ
              </Text>
              <Block
                marginTop={15}
                height={45}
                radius={8}
                backgroundColor={COLORS.white}
                justifyCenter>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.black2}
                  marginLeft={12}>
                  {reasonCancel?.title}
                </Text>
              </Block>
            </Block>
          )}
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Chi tiết thanh toán
          </Text>
          <Block
            paddingBottom={15}
            radius={8}
            backgroundColor={COLORS.white}
            marginTop={19}>
            <Block width={width - 48} marginHorizontal={12} marginTop={16}>
              <Block row alignCenter>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Giá gói
                </Text>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.placeholder}>
                    {formatCurrency(detailOrder?.amount_estimated)}
                  </Text>
                </Block>
              </Block>
              <Block
                marginTop={15}
                marginLeft={28}
                width={width - 48}
                borderWidth={1}
                borderColor={COLORS.borderColor1}
                marginBottom={16}
              />
              <Block row alignCenter>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Khuyến mãi
                </Text>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    -{formatCurrency(detailOrder?.amount_promotion)}
                  </Text>
                </Block>
              </Block>
              <Block
                marginTop={15}
                marginLeft={28}
                width={width - 48}
                borderWidth={1}
                borderColor={COLORS.borderColor1}
                marginBottom={16}
              />
              <Block row alignCenter>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Phương thức thanh toán
                </Text>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.placeholder}>
                    {detailOrder?.order?.method?.title}
                  </Text>
                </Block>
              </Block>
              <Block
                marginTop={15}
                marginLeft={28}
                width={width - 48}
                borderWidth={1}
                borderColor={COLORS.borderColor1}
                marginBottom={16}
              />
              <Block row alignCenter>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Tổng thanh toán
                </Text>
                <Block absolute right={0}>
                  <Text fontSize={14} regular color={COLORS.red4}>
                    {formatCurrency(detailOrder?.amount_final)}
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block marginTop={23} gap={15}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Quy định huỷ dịch vụ
            </Text>
            <RenderHTML
              contentWidth={width - 24}
              source={{html: detailOrder?.service_cancellation_policy}}
              tagsStyles={{
                p: {
                  fontSize: 14,
                  fontWeight: 'regular',
                  color: COLORS.black2,
                  lineHeight: 22,
                },
                strong: {
                  fontSize: 14,
                  fontWeight: 'semibold',
                  color: COLORS.black2,
                  lineHeight: 22,
                },
              }}
            />
          </Block>
          {detailOrder?.is_status !== 0 && detailOrder?.is_status !== 1 ? (
            <Pressable
              onPress={() => onPress(detailOrder?.is_status)}
              marginTop={23}
              height={48}
              backgroundColor={COLORS.red4}
              radius={8}
              justifyCenter
              alignCenter>
              <Text fontSize={15} regular color={COLORS.white}>
                {detailOrder?.is_status === 2 && 'Hỗ trợ'}
                {detailOrder?.is_status === 3 && 'Đánh giá'}
                {detailOrder?.is_status === -1 && 'Đặt lại'}
              </Text>
            </Pressable>
          ) : (
            <Block marginTop={23} row height={48}>
              <Pressable
                onPress={handle}
                width={(width - 24) / 2 - 6}
                justifyCenter
                alignCenter
                borderWidth={1}
                borderColor={COLORS.red4}
                radius={8}>
                <Text fontSize={15} regular color={COLORS.red4}>
                  {detailOrder?.order?.repeat_weekly.length === 0
                    ? 'Huỷ dịch vụ'
                    : 'Tắt lặp lại'}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => commonRoot.navigate(router.HELP)}
                width={(width - 24) / 2 - 6}
                justifyCenter
                alignCenter
                borderWidth={1}
                borderColor={COLORS.red4}
                radius={8}
                backgroundColor={COLORS.red4}
                marginLeft={12}>
                <Text fontSize={15} regular color={COLORS.white}>
                  Hỗ trợ
                </Text>
              </Pressable>
            </Block>
          )}
        </Block>
      </ScrollView>
      <Modal visible={show} transparent={false} animationType="fade">
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Block
              width={width - 24}
              paddingBottom={12}
              backgroundColor={COLORS.gray10}
              radius={15}>
              <Block height={42.43} alignCenter justifyCenter>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Lý do huỷ việc
                </Text>
                <Pressable absolute right={0} onPress={() => setShow(!show)}>
                  <Icon
                    IconType={Ionicons}
                    iconName={'close'}
                    iconSize={30}
                    iconColor={COLORS.black2}
                  />
                </Pressable>
              </Block>
              <Block
                marginTop={19.6}
                width={width - 48}
                marginHorizontal={12}
                gap={12}>
                {reasons.map(item => (
                  <Pressable
                    onPress={() => setReasonCancel(item.item_id)}
                    key={item.item_id}
                    justifyCenter
                    height={45}
                    radius={8}
                    borderWidth={reasonsCancel === item.item_id && 1}
                    borderColor={reasonsCancel === item.item_id && COLORS.red4}
                    backgroundColor={
                      reasonsCancel === item.item_id
                        ? COLORS.pinkWhite2
                        : COLORS.white
                    }>
                    <Text
                      marginLeft={12}
                      fontSize={14}
                      color={
                        reasonsCancel === item.item_id
                          ? COLORS.red4
                          : COLORS.placeholder
                      }>
                      {item.title}
                    </Text>
                  </Pressable>
                ))}
              </Block>
              <Pressable
                onPress={() => {
                  setShowNotification(!showNotification);
                  setShow(false);
                }}
                backgroundColor={COLORS.red4}
                height={48}
                width={width - 48}
                marginTop={30}
                alignCenter
                justifyCenter
                radius={8}
                marginHorizontal={12}>
                <Text fontSize={15} regular color={COLORS.white}>
                  Đồng ý
                </Text>
              </Pressable>
            </Block>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
      <Modal
        visible={showNotification}
        transparent={false}
        animationType="fade">
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.6)',
            }}>
            <Block
              width={width - 24}
              paddingBottom={12}
              backgroundColor={COLORS.gray10}
              radius={15}>
              <Block height={42.43} alignCenter justifyCenter>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Thông báo
                </Text>
                <Pressable
                  absolute
                  right={0}
                  onPress={() => setShowNotification(false)}>
                  <Icon
                    IconType={Ionicons}
                    iconName={'close'}
                    iconSize={30}
                    iconColor={COLORS.black2}
                  />
                </Pressable>
              </Block>
              <Block marginTop={23.6} marginHorizontal={12} width={width - 48}>
                <Block
                  height={44}
                  backgroundColor={COLORS.pinkWhite2}
                  alignCenter>
                  <Block
                    width={width - 72}
                    height={44}
                    justifyCenter
                    alignCenter>
                    <Text fontSize={14} regular color={COLORS.red4}>
                      Bạn đã huỷ công việc trong 7 ngày
                    </Text>
                  </Block>
                </Block>
                <Block marginTop={15}>
                  <RenderHTML
                    contentWidth={width - 48}
                    source={{html: detailOrder?.cancellation_policy_popup}}
                    tagsStyles={{
                      p: {
                        fontSize: 14,
                        fontWeight: 'regular',
                        color: COLORS.black2,
                        lineHeight: 22,
                      },
                      strong: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: COLORS.black2,
                        lineHeight: 22,
                      },
                    }}
                  />
                </Block>
                <Text
                  marginTop={22}
                  lineHeight={22}
                  fontSize={14}
                  italic
                  color={COLORS.red4}
                  center>
                  Độ tin cậy của bạn sẽ giảm đáng kể nếu bạn hủy nhiều lần. Bạn
                  chắc chân hủy công việc này?
                </Text>
                <Block marginTop={37} row height={48}>
                  <Pressable
                    onPress={handleConfirmCancel}
                    width={(width - 48) / 2 - 6}
                    justifyCenter
                    alignCenter
                    borderWidth={1}
                    borderColor={COLORS.red4}
                    radius={8}>
                    <Text fontSize={15} regular color={COLORS.red4}>
                      Đồng ý
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => root.goBack()}
                    marginLeft={12}
                    width={(width - 48) / 2 - 6}
                    justifyCenter
                    alignCenter
                    backgroundColor={COLORS.red4}
                    radius={8}>
                    <Text fontSize={15} regular color={COLORS.white}>
                      Bỏ qua
                    </Text>
                  </Pressable>
                </Block>
              </Block>
            </Block>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
      <ModalTurnOffRepeat
        visible={visible}
        close={() => setVisible(false)}
        onPress={() => handleCancelRepeat(detailOrder?.order?.id)}
      />
    </Block>
  );
}
