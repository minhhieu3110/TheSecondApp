import {
  Block,
  HeaderChooseTime,
  Pressable,
  Text,
  TextInput,
  ButtonSubmitService,
  SANStaffDuties,
  ChooseStartTime,
  DateMultiPicker,
  ScrollView,
} from '@components';
import {COLORS} from '@theme';
import {useEffect, useState} from 'react';
import {width} from '@responsive';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import {formatTime} from '@utils';
import {format} from 'date-fns';
import Toast from 'react-native-toast-message';
import {formatCurrency} from 'utils/helper';
export default function Elederly_Servicedurationmonth({route}) {
  const dayWeek = [
    {id: 1, title: 'T2'},
    {id: 2, title: 'T3'},
    {id: 3, title: 'T4'},
    {id: 4, title: 'T5'},
    {id: 5, title: 'T6'},
    {id: 6, title: 'T7'},
    {id: 7, title: 'CN'},
  ];

  const [choose, setChoose] = useState(1);
  const [chooseOptionDuration, setChooseOptionDuration] = useState(0);
  const [againWeek, setAgainWeek] = useState([]);
  const handleWeekDayPress = title => {
    setAgainWeek(prevState => {
      if (prevState.includes(title)) {
        return prevState.filter(item => item !== title);
      }
      return [...prevState, title];
    });
  };
  const [listDates, setListDates] = useState([]);
  const [calendar, setCalendar] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_ADDRESS_SAVE});
    dispatch({type: actions.GET_DETAIL_SERVICE_SUB, params: {item_id: 4}});
  }, [dispatch]);
  const addressInfo = useSelector(state => state.getAddressSave?.data || []);
  const address = addressInfo?.find(
    item => item.id === route?.params?.addressId,
  );
  const [time, setTime] = useState(new Date());
  const start_time = formatTime(time);
  const detailSub = useSelector(state => state.getDetailServiceSub?.data || []);
  const [content, setContent] = useState('');
  const durationSelected = detailSub?.durations?.find(
    item => item.item_id === choose,
  );
  const infoOrder = {
    service_id: route?.params?.service_id,
    service_sub_id: route?.params?.service_sub_id,
    duration_id: choose,
    monthly_package_id: chooseOptionDuration,
    // schedule_week: againWeek,
    list_day: listDates,
    start_time: start_time,
    note: content,
    promotion_id: '',
    method_id: '',
    address_id: route?.params?.addressId,
  };
  const priceCalculation = () => {
    dispatch({
      type: actions.PRICE_CALCULATION,
      body: {
        service_id: route?.params?.service_id,
        service_sub_id: route?.params?.service_sub_id,
        duration_id: choose,
        monthly_package_id: chooseOptionDuration,
        // schedule_week: againWeek,
        list_day: listDates,
        start_time: start_time,
        note: content,
        promotion_id: '',
        method_id: '',
        address_id: route?.params?.addressId,
      },
      onSuccess: () => {
        commonRoot.navigate(router.CONFIRM_AND_SIGNUP_PACKAGE, {
          data: infoOrder,
        });
      },
      onFail: e => {
        Toast.show({
          type: 'success',
          text1: e,
        });
      },
    });
  };
  const infoService = useSelector(state => state.priceCalculation?.data || []);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 136}}>
        <HeaderChooseTime
          titleAddress={address?.title}
          address={address?.address_full}
        />
        <Block marginTop={20} marginHorizontal={12}>
          <Block rowCenter spaceBetween>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Chọn lịch làm việc
            </Text>

            <Text
              fontSize={15}
              regular
              color={COLORS.red4}
              onPress={() => setCalendar(!calendar)}>
              Tuỳ chọn lịch
            </Text>
          </Block>
          <Block marginTop={15} row gap={9.9}>
            {dayWeek.map(item => (
              <Pressable
                onPress={() => handleWeekDayPress(item.title)}
                key={item.title}
                width={(width - 83.4) / 7}
                height={(width - 83.4) / 7}
                radius={5}
                borderWidth={againWeek.includes(item.title) ? 1 : ''}
                borderColor={againWeek.includes(item.title) && COLORS.red4}
                backgroundColor={
                  againWeek.includes(item.title)
                    ? COLORS.pinkWhite2
                    : COLORS.white
                }
                justifyCenter
                alignCenter>
                <Text
                  fontSize={15}
                  semiBold
                  color={
                    againWeek.includes(item.title) ? COLORS.red4 : COLORS.black2
                  }>
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </Block>
          <ChooseStartTime date={time} onDateChange={setTime} />
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20.2}>
            Thời lượng
          </Text>
          <Block marginTop={15} row columnGap={12}>
            {detailSub?.durations?.map(item => (
              <Pressable
                key={item.item_id}
                onPress={() => setChoose(item.item_id)}
                width={(width - 24) / 2 - 6}
                radius={8}
                paddingBottom={18}
                borderWidth={1}
                borderColor={
                  choose === item.item_id ? COLORS.red4 : COLORS.white2
                }
                backgroundColor={
                  choose === item.item_id ? COLORS.pinkWhite2 : COLORS.white
                }
                alignCenter>
                <Text
                  marginTop={19}
                  fontSize={15}
                  medium
                  color={choose === item.item_id ? COLORS.red4 : COLORS.black2}>
                  {item.short}
                </Text>
                <Text
                  marginTop={20}
                  fontSize={15}
                  regular
                  color={
                    choose === item.item_id ? COLORS.black2 : COLORS.placeholder
                  }>
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Loại gói
          </Text>
          <Block row wrap gap={12} marginTop={15}>
            {detailSub?.months?.map(item => (
              <Pressable
                onPress={() => setChooseOptionDuration(item.month)}
                key={item.item_id}
                borderWidth={chooseOptionDuration === item.month ? 1 : ''}
                borderColor={chooseOptionDuration === item.month && COLORS.red4}
                radius={5}
                backgroundColor={
                  chooseOptionDuration === item.month
                    ? COLORS.pinkWhite2
                    : COLORS.white
                }
                width={(width - 24) / 2 - 6}
                height={42}
                alignCenter
                justifyCenter>
                <Text
                  fontSize={15}
                  regular
                  color={
                    chooseOptionDuration === item.month
                      ? COLORS.red4
                      : COLORS.black2
                  }>
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </Block>
          <Block marginTop={20}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Ghi chú
            </Text>
            <Text fontSize={14} regular color={COLORS.black2} marginTop={17}>
              Ghi chú này giúp nhân viên làm việc thuận tiện hơn
            </Text>
            <TextInput
              placeholder={'Nhập nội dung'}
              radius={8}
              backgroundColor={COLORS.white}
              paddingLeft={12}
              placeholderTextColor={COLORS.placeholder}
              marginTop={13}
              value={content}
              onChangeText={setContent}
            />
          </Block>
          <SANStaffDuties
            top={20.3}
            task_todo={detailSub?.service?.tasks_todo}
            task_nottodo={detailSub?.service?.tasks_nottodo}
          />
        </Block>
      </ScrollView>
      <ButtonSubmitService
        titleTop={formatCurrency(infoService?.amount_final)}
        titleBottom={detailSub?.service?.title}
        onPress={priceCalculation}
      />
      <DateMultiPicker
        visible={calendar}
        close={() => setCalendar(!calendar)}
        numMonth={chooseOptionDuration}
        dayOfWeek={againWeek}
        onChange={dates => {
          dispatch({
            type: actions.PRICE_CALCULATION,
            body: {
              service_id: route?.params?.service_id,
              service_sub_id: route?.params?.service_sub_id,
              duration_id: choose,
              monthly_package_id: chooseOptionDuration,
              // schedule_week: againWeek,
              list_day: dates,
              start_time: start_time,
              note: content,
              promotion_id: '',
              method_id: '',
              address_id: route?.params?.addressId,
            },
          });
          setListDates(dates);
        }}
        onPress={dates => {
          dispatch({
            type: actions.PRICE_CALCULATION,
            body: {
              service_id: route?.params?.service_id,
              service_sub_id: route?.params?.service_sub_id,
              duration_id: choose,
              monthly_package_id: chooseOptionDuration,
              // schedule_week: againWeek,
              list_day: dates,
              start_time: start_time,
              note: content,
              promotion_id: '',
              method_id: '',
              address_id: route?.params?.addressId,
            },
          });
          setListDates(dates);
        }}
      />
    </Block>
  );
}
