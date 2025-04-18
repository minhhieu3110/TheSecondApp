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
} from '@components';
import {ScrollView} from 'react-native';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {icon} from '@assets';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useEffect, useState} from 'react';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch} from 'react-redux';
import actions from '@actions';
import {duration} from 'moment';
const SelectDayWorking = ({route}) => {
  const dispatch = useDispatch();
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
  const infoOrder = {
    service_id: 1,
    service_sub_id: 3,
    duration_id: route?.params?.duration_id,
    schudule_week: againWeek,
    list_day: [`${chooseDay}/${year}`],
    start_time: '09:00',
    note: note,
  };
  const priceCalculation = () => {
    dispatch({
      type: actions.PRICE_CALCULATION,
      body: {
        service_id: 1,
        service_sub_id: 3,
        duration_id: route?.params?.duration_id,
        schudule_week: againWeek,
        list_day: [`${chooseDay}/${year}`],
        start_time: '09:00',
        note: note,
      },
      onSuccess: () => {
        commonRoot.navigate(router.CONFIRM_AND_PAY_SERVICE, {data: infoOrder});
      },
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block height={173} backgroundColor={COLORS.red4}>
        <HeaderTitle
          background={COLORS.white2}
          colorIcon={COLORS.white}
          colorText={COLORS.white}
          title={'Chọn thời gian làm việc'}
          absolute={false}
          canGoBack
        />
        <Block
          width={width - 24}
          marginHorizontal={12}
          paddingBottom={19}
          marginTop={2}
          backgroundColor={COLORS.solidColorRed}
          radius={8}>
          <Block marginTop={12} marginLeft={10} row alignCenter>
            <Image
              source={icon.icon_position_address_work}
              width={25}
              height={25}
            />

            <Text fontSize={15} medium color={COLORS.white} marginLeft={4}>
              Công ty
            </Text>
          </Block>
          <Text
            marginLeft={39}
            marginTop={9}
            fontSize={14}
            regular
            color={COLORS.white}
            numberOfLines={2}>
            107 đường Cộng Hòa, Phường 12, quận Tân Bình, Tp.HCM
          </Text>
          <Block absolute top={15} right={3}>
            <Icon
              IconType={MaterialIcons}
              iconName={'keyboard-arrow-right'}
              iconColor={COLORS.yellow3}
              iconSize={20}
            />
          </Block>
        </Block>
      </Block>
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
                width={(width - 99) / 6}
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
                    color={chooseDay === day.day ? COLORS.red4 : COLORS.black2}>
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
        <Block
          marginTop={14.7}
          radius={8}
          backgroundColor={COLORS.white}
          paddingBottom={14.7}
          alignCenter
          row>
          <Image
            source={icon.icon_time_activity}
            width={22}
            height={22}
            marginTop={24}
            marginLeft={12}
          />
          <Text
            fontSize={15}
            semiBold
            color={COLORS.black2}
            marginTop={28}
            marginLeft={8}>
            Chọn giờ bắt đầu
          </Text>
          <Block
            width={width - 277}
            height={44}
            backgroundColor={COLORS.pinkWhite2}
            marginLeft={65}
            marginTop={15}
            radius={5}
            justifyCenter
            alignCenter>
            <Block spaceBetween row alignCenter height={31.67} width={92}>
              <Text fontSize={15} regular color={COLORS.black2}>
                17
              </Text>
              <Block
                width={1}
                backgroundColor={COLORS.white}
                radius={5}
                height={31.67}
              />
              <Text fontSize={15} regular color={COLORS.black2}>
                30
              </Text>
            </Block>
          </Block>
        </Block>
        <Block marginTop={24.3} row>
          <Image source={icon.icon_week_again} width={24.08} height={27} />
          <Text marginLeft={12.9} fontSize={15} regular color={COLORS.black2}>
            Lặp lại hàng tuần
          </Text>
          <Block absolute right={0}>
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
        </Block>
        <Block marginTop={12} row columnGap={9.9} justifyCenter>
          {dayWeek.map(item => (
            <Pressable
              disabled={isActive === false}
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
        <Block marginTop={34.9}>
          <Text fontSize={15} semiBold color={COLORS.black2}>
            Ghi chú
          </Text>
          <Text fontSize={14} regular color={COLORS.black2} marginTop={17}>
            Ghi chú này giúp nhân viên làm việc thuận tiện hơn
          </Text>
          <TextInput
            placeholder={'Nhập nội dung'}
            height={154.67}
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
      <ButtonSubmitService
        titleTop={route?.params?.duration}
        titleBottom={route?.params?.name_service}
        onPress={priceCalculation}
      />
    </Block>
  );
};
export default SelectDayWorking;
