import {
  Block,
  Text,
  TextInput,
  HeaderTitle,
  Image,
  Icon,
  Switch,
  Pressable,
  ButtonSubmitService,
  HeaderChooseTime,
  ChooseStartTime,
  ScrollView,
} from '@components';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {icon} from '@assets';
import {useEffect, useState} from 'react';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import DatePicker from 'react-native-date-picker';
import {formatTime} from '@utils';
import {formatCurrency, sortWeekdays} from 'utils/helper';
const SelectDayWorking = ({route}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_ADDRESS_SAVE,
    });
  }, [dispatch]);
  const addressInfo = useSelector(state => state.getAddressSave?.data || []);
  const address = addressInfo?.find(
    item => item.item_id === route?.params?.addressId,
  );
  const days = Array.from({length: 7}, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');

    const titles = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    return {
      id: index + 1,
      title: titles[date.getDay()],
      day: `${day}/${month}`,
    };
  });
  const year = new Date().getFullYear();
  const dayWeek = [
    {id: 1, title: 'T2'},
    {id: 2, title: 'T3'},
    {id: 3, title: 'T4'},
    {id: 4, title: 'T5'},
    {id: 5, title: 'T6'},
    {id: 6, title: 'T7'},
    {id: 7, title: 'CN'},
  ];
  const [isActive, setIsActive] = useState(false);
  const [chooseDay, setChooseDay] = useState();
  const [againWeek, setAgainWeek] = useState([]);
  const [note, setNote] = useState('');
  const handleWeekDayPress = title => {
    setAgainWeek(prevState => {
      if (prevState.includes(title)) {
        return prevState.filter(item => item !== title);
      }
      return [...prevState, title];
    });
  };
  const daysSort = sortWeekdays(againWeek);

  const [time, setTime] = useState(new Date());
  const start_time = formatTime(time);
  const infoOrder = {
    service_id: route?.params?.service_id,
    service_sub_id: route?.params?.service_sub_id,
    duration_id: route?.params?.duration_id,
    repeat_weekly: isActive === false ? [] : daysSort,
    list_day: [`${chooseDay}/${year}`],
    start_time: start_time,
    note: note,
    address_id: route?.params?.addressId,
    extra_services: route?.params?.extra_services,
    is_favorite_employee: route?.params?.is_favorite_employee,
  };
  const priceCalculation = () => {
    dispatch({
      type: actions.PRICE_CALCULATION,
      body: {
        service_id: route?.params?.service_id,
        service_sub_id: route?.params?.service_sub_id,
        duration_id: route?.params?.duration_id,
        repeat_weekly: isActive === false ? [] : daysSort,
        list_day: [`${chooseDay}/${year}`],
        start_time: start_time,
        note: note,
        address_id: route?.params?.addressId,
        extra_services: route?.params?.extra_services,
        is_favorite_employee: route?.params?.is_favorite_employee,
      },
      onSuccess: () => {
        commonRoot.navigate(router.CONFIRM_AND_PAY_SERVICE, {data: infoOrder});
      },
    });
  };
  useEffect(() => {
    dispatch({
      type: actions.PRICE_CALCULATION,
      body: {
        service_id: route?.params?.service_id,
        service_sub_id: route?.params?.service_sub_id,
        duration_id: route?.params?.duration_id,
        repeat_weekly: againWeek,
        list_day: [`${chooseDay}/${year}`],
        start_time: start_time,
        note: note,
        address_id: route?.params?.addressId,
        extra_services: route?.params?.extra_services,
        is_favorite_employee: route?.params?.is_favorite_employee,
      },
    });
  }, [chooseDay, againWeek, route?.params?.extra_services]);
  const infoService = useSelector(state => state.priceCalculation?.data || []);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderChooseTime
        titleAddress={address?.title}
        address={address?.address_full}
      />
      <ScrollView contentContainerStyle={{paddingBottom: 181}}>
        <Block marginHorizontal={12} marginTop={20}>
          <Block row alignCenter>
            <Text fontSize={15} semiBold color={COLORS.black6}>
              Chọn ngày làm việc
            </Text>
            <Block absolute right={0}>
              <Text fontSize={15} regular color={COLORS.black6}>
                Tháng{' '}
                {String(new Date().getMonth() + 1).padStart(2, '0') +
                  '/' +
                  new Date().getFullYear()}
              </Text>
            </Block>
          </Block>
          <Block marginTop={15}>
            <ScrollView
              contentContainerStyle={{flexDirection: 'row', columnGap: 15}}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {days.map(day => (
                <Pressable
                  onPress={() => setChooseDay(day.day)}
                  key={day.id}
                  width={'13.4%'}
                  height={80.33}
                  borderWidth={chooseDay === day.day ? 1 : 0}
                  borderColor={chooseDay === day.day && COLORS.red4}
                  backgroundColor={
                    chooseDay === day.day ? COLORS.pinkWhite2 : COLORS.white
                  }
                  radius={5}
                  justifyCenter
                  paddingBottom={15.3}>
                  <Block alignCenter marginTop={17}>
                    <Text
                      fontSize={15}
                      semiBold
                      color={
                        chooseDay === day.day ? COLORS.red4 : COLORS.black2
                      }>
                      {day.title}
                    </Text>
                    <Text
                      fontSize={14}
                      regular
                      color={
                        chooseDay === day.day ? COLORS.red4 : COLORS.placeholder
                      }
                      marginTop={19}>
                      {day.day}
                    </Text>
                  </Block>
                </Pressable>
              ))}
            </ScrollView>
          </Block>
          <ChooseStartTime date={time} onDateChange={setTime} />
          <Block marginTop={24.3} row spaceBetween>
            <Block rowCenter gap={12.9}>
              <Image source={icon.icon_week_again} width={24.08} height={27} />
              <Text fontSize={15} regular color={COLORS.black2}>
                Lặp lại hàng tuần
              </Text>
            </Block>
            <Switch
              value={isActive}
              onValueChange={setIsActive}
              trackColor={{false: COLORS.grayWhite, true: COLORS.green6}}
              thumbColor={{false: COLORS.white, true: COLORS.white}}
              width={46}
              height={23}
              thumbSize={19}
              padding={3}
            />
          </Block>
          <Block marginTop={12} row columnGap={9.9} spaceBetween justifyCenter>
            {dayWeek.map(item => (
              <Pressable
                disabled={isActive === false}
                onPress={() => handleWeekDayPress(item.title)}
                key={item.title}
                width={'12%'}
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
          <Block marginTop={34.9}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Ghi chú
            </Text>
            <Text fontSize={14} regular color={COLORS.black2} marginTop={17}>
              Ghi chú này giúp nhân viên làm việc thuận tiện hơn
            </Text>
            <TextInput
              height={154.67}
              placeholder={'Nhập nội dung'}
              radius={8}
              backgroundColor={COLORS.white}
              paddingLeft={12}
              placeholderTextColor={COLORS.placeholder}
              marginTop={13}
              value={note}
              onChangeText={setNote}
            />
          </Block>
        </Block>
      </ScrollView>

      <ButtonSubmitService
        titleTop={
          `${formatCurrency(infoService?.amount_final)}` +
          '/' +
          `${route?.params?.duration}`
        }
        titleBottom={route?.params?.name_service}
        onPress={priceCalculation}
      />
    </Block>
  );
};
export default SelectDayWorking;
