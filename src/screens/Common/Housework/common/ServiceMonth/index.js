import {
  Block,
  HeaderChooseTime,
  Pressable,
  Text,
  Image,
  TextInput,
  ButtonSubmitService,
  SANStaffDuties,
  ChooseStartTime,
  DateMultiPicker,
} from '@components';
import {COLORS} from '@theme';
import {useEffect, useState} from 'react';
import {icon} from '@assets';
import {width} from '@responsive';
import {ScrollView} from 'react-native';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import {formatTime} from '@utils';
import {duration} from 'moment';
export default function Housework_ServiceMonth({route}) {
  const dayWeek = [
    {id: 1, title: 'T2'},
    {id: 2, title: 'T3'},
    {id: 3, title: 'T4'},
    {id: 4, title: 'T5'},
    {id: 5, title: 'T6'},
    {id: 6, title: 'T7'},
    {id: 7, title: 'CN'},
  ];

  const [chooseDuration, setChooseDuration] = useState(1);
  const [chooseOptionDuration, setChooseOptionDuration] = useState(1);
  const [againWeek, setAgainWeek] = useState([]);
  const handleWeekDayPress = title => {
    setAgainWeek(prevState => {
      if (prevState.includes(title)) {
        return prevState.filter(item => item !== title);
      }
      return [...prevState, title];
    });
  };
  const [calendar, setCalendar] = useState(0);
  const [listDates, setListDates] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_ADDRESS_SAVE});
    dispatch({
      type: actions.GET_DETAIL_SERVICE_SUB,
      params: {item_id: route?.params?.service_sub_id},
    });
  }, [dispatch]);
  const addressInfo = useSelector(state => state.getAddressSave?.data || []);
  const address = addressInfo?.find(
    item => item.id === route?.params?.address_id,
  );
  const [time, setTime] = useState(new Date());
  const start_time = formatTime(time);
  const detailSub = useSelector(state => state.getDetailServiceSub?.data || []);
  const [content, setContent] = useState('');
  const durationSelected = detailSub?.durations?.find(
    item => item.item_id === chooseDuration,
  );
  const infoOrder = {
    service_id: route?.params?.service_id,
    service_sub_id: route?.params?.service_sub_id,
    duration_id: chooseDuration,
    monthly_package_id: chooseOptionDuration,
    schedule_week: againWeek,
    list_day: listDates,
    start_time: start_time,
    note: content,
    promotion_id: '',
    method_id: '',
    address_id: route?.params?.address_id,
  };
  const priceCalculation = () => {
    dispatch({
      type: actions.PRICE_CALCULATION,
      body: {
        service_id: route?.params?.service_id,
        service_sub_id: route?.params?.service_sub_id,
        duration_id: chooseDuration,
        monthly_package_id: chooseOptionDuration,
        schedule_week: againWeek,
        list_day: listDates,
        start_time: start_time,
        note: content,
        promotion_id: '',
        method_id: '',
        address_id: route?.params?.address_id,
      },
      onSuccess: () => {
        commonRoot.navigate(router.CONFIRM_AND_SIGNUP_PACKAGE, {
          data: infoOrder,
        });
      },
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 136}}>
        <HeaderChooseTime
          titleAddress={address?.title}
          address={address?.address_full}
        />
        <Block marginTop={20} marginHorizontal={12}>
          <Block row alignCenter>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Chọn lịch làm việc
            </Text>
            <Pressable
              absolute
              right={0}
              onPress={() => setCalendar(!calendar)}>
              <Text fontSize={15} regular color={COLORS.red4}>
                Tuỳ chọn lịch
              </Text>
            </Pressable>
          </Block>
          <Block marginTop={15} row columnGap={9.9} justifyCenter>
            {dayWeek.map(item => (
              <Pressable
                onPress={() => handleWeekDayPress(item.title)}
                key={item.title}
                width={49.14}
                height={49.14}
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
          <Block marginTop={19} gap={12}>
            {detailSub?.durations?.map(item => (
              <Pressable
                onPress={() => setChooseDuration(item.item_id)}
                key={item.item_id}
                paddingBottom={19}
                radius={8}
                borderWidth={chooseDuration === item.item_id ? 1 : ''}
                borderColor={chooseDuration === item.item_id && COLORS.red4}
                backgroundColor={
                  chooseDuration === item.item_id
                    ? COLORS.pinkWhite2
                    : COLORS.white
                }>
                <Text
                  marginTop={17}
                  marginLeft={12}
                  fontSize={16}
                  semiBold
                  color={
                    chooseDuration === item.item_id
                      ? COLORS.red4
                      : COLORS.black2
                  }>
                  {item.title}
                </Text>
                <Text
                  marginTop={8}
                  marginLeft={12}
                  fontSize={14}
                  regular
                  color={
                    chooseDuration === item.item_id
                      ? COLORS.black2
                      : COLORS.placeholder
                  }>
                  {item.short}
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
                onPress={() => setChooseOptionDuration(item.item_id)}
                key={item.item_id}
                borderWidth={chooseOptionDuration === item.item_id ? 1 : ''}
                borderColor={
                  chooseOptionDuration === item.item_id && COLORS.red4
                }
                radius={5}
                backgroundColor={
                  chooseOptionDuration === item.item_id
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
                    chooseOptionDuration === item.item_id
                      ? COLORS.red4
                      : COLORS.black2
                  }>
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </Block>
        </Block>
      </ScrollView>
      <ButtonSubmitService
        titleTop={durationSelected?.title}
        titleBottom={detailSub?.service?.title}
        onPress={priceCalculation}
      />
      <DateMultiPicker
        visible={calendar}
        close={() => setCalendar(!calendar)}
        onPress={dates => setListDates(dates)}
      />
    </Block>
  );
}
