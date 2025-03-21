import {icon} from '@assets';
import {
  Block,
  HeaderChooseTime,
  Image,
  Pressable,
  Text,
  Switch,
  TextInput,
  ButtonSubmitService,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useState} from 'react';
import {ScrollView} from 'react-native';

export default function ChooseTime() {
  const days = [
    {id: 1, title: 'T4', day: '19/02'},
    {id: 2, title: 'T5', day: '20/02'},
    {id: 3, title: 'T6', day: '21/02'},
    {id: 4, title: 'T7', day: '22/02'},
    {id: 5, title: 'CN', day: '23/02'},
    {id: 6, title: 'T2', day: '24/02'},
    {id: 7, title: 'T3', day: '25/02'},
  ];
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
  const [chooseDay, setChooseDay] = useState(null);
  const [againWeek, setAgainWeek] = useState([null]);
  const handleWeekDayPress = id => {
    setAgainWeek(prevState => {
      if (prevState.includes(id)) {
        return prevState.filter(item => item !== id);
      }
      return [...prevState, id];
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderChooseTime />
      <Block marginHorizontal={12} marginTop={20}>
        <Block row alignCenter>
          <Text fontSize={15} semiBold color={COLORS.black6}>
            Chọn ngày làm việc
          </Text>
          <Block absolute right={0}>
            <Text fontSize={15} regular color={COLORS.black6}>
              Tháng 01/2025
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
                onPress={() => setChooseDay(day.id)}
                key={day.id}
                width={width - 373.17}
                height={80.33}
                borderWidth={chooseDay === day.id ? 1 : 0}
                borderColor={chooseDay === day.id && COLORS.red4}
                backgroundColor={
                  chooseDay === day.id ? COLORS.pinkWhite2 : COLORS.white
                }
                radius={5}
                justifyCenter
                paddingBottom={15.3}>
                <Block alignCenter marginTop={17}>
                  <Text
                    fontSize={15}
                    semiBold
                    color={chooseDay === day.id ? COLORS.red4 : COLORS.black2}>
                    {day.title}
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={
                      chooseDay === day.id ? COLORS.red4 : COLORS.placeholder
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
              onPress={() => handleWeekDayPress(item.id)}
              key={item.id}
              width={49.14}
              height={49.14}
              radius={5}
              borderWidth={againWeek.includes(item.id) ? 1 : ''}
              borderColor={againWeek.includes(item.id) && COLORS.red4}
              backgroundColor={
                againWeek.includes(item.id) ? COLORS.pinkWhite2 : COLORS.white
              }
              justifyCenter
              alignCenter>
              <Text
                fontSize={15}
                semiBold
                color={
                  againWeek.includes(item.id) ? COLORS.red4 : COLORS.black2
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
          />
        </Block>
      </Block>
      <ButtonSubmitService
        titleTop={'950.000 đ/3 giờ'}
        titleBottom={'Dịch vụ vật lý trị liệu tại nhà'}
        onPress={() =>
          commonRoot.navigate(router.PHYSICAL_THERAPY_CONFIRM_AND_PAY)
        }
      />
    </Block>
  );
}
