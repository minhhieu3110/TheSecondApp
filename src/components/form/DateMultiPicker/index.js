import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Modal, SafeAreaView} from 'react-native';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  getDay,
} from 'date-fns';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {Block, Icon, Pressable, ScrollView, Text} from '@components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RadialGradient from 'react-native-radial-gradient';
const DateMultiPicker = ({
  visible,
  close,
  onPress,
  onChange,
  numMonth,
  dayOfWeek = ['T2', 'T3'],
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);

  const [arrayMonth, setArrayMonth] = useState([0]);
  useEffect(() => {
    numMonth &&
      setArrayMonth(Array.from({length: numMonth}, (_, index) => index));
  }, [numMonth]);

  const dayArr = arrayMonth?.map(month =>
    getCalendarDays(addMonths(currentMonth, month)),
  );
  useEffect(() => {
    if (dayOfWeek?.length > 0) {
      const filteredDates = dayArr
        .flat()
        .filter(day =>
          dayOfWeek.includes(
            ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'][getDay(day)],
          ),
        );
      const filteredDatesInMonth = filteredDates.filter(date =>
        arrayMonth?.some(month =>
          isSameMonth(date, addMonths(currentMonth, month)),
        ),
      );
      setSelectedDates(filteredDatesInMonth);
      // onChange(
      //   filteredDatesInMonth.map(date => format(new Date(date), 'dd/MM/yyyy')),
      // );
    }
  }, [dayOfWeek]);
  function toggleDate(date) {
    const isSelected = selectedDates.some(d => isSameDay(d, date));
    if (isSelected) {
      setSelectedDates(prev => prev.filter(d => !isSameDay(d, date)));
    } else {
      setSelectedDates(prev => [...prev, date]);
    }
    onChange(date.map(date => format(new Date(date), 'dd/MM/yyyy')));
  }
  const handleSelect = dates => {
    const datesFormated = dates.map(date =>
      format(new Date(date), 'dd/MM/yyyy'),
    );
    onPress(datesFormated);
    close();
  };
  console.log(selectedDates?.length);

  return (
    <Modal animationType="fade" visible={visible} onRequestClose={close}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.transparentColor4,
          }}>
          <Block
            width={width - 24}
            backgroundColor={COLORS.gray10}
            paddingBottom={15}
            radius={10}>
            <Block marginTop={17}>
              <Text fontSize={15} semiBold color={COLORS.black2} center>
                Chọn lịch
              </Text>
              <Pressable onPress={close} absolute right={6}>
                <Icon
                  IconType={FontAwesome5}
                  iconColor={COLORS.black}
                  iconName={'times'}
                  iconSize={20}
                />
              </Pressable>
            </Block>

            <Block
              marginTop={15}
              marginHorizontal={12}
              width={width - 48}
              height={400}>
              <ScrollView contentContainerStyle={{gap: 10}}>
                {arrayMonth?.map(month => (
                  <Block
                    key={month}
                    width={width - 48}
                    backgroundColor={COLORS.white}
                    radius={8}
                    paddingBottom={12}>
                    <Text
                      marginLeft={12}
                      marginTop={18}
                      fontSize={14}
                      semiBold
                      color={COLORS.black2}>
                      Tháng {format(addMonths(currentMonth, month), 'L/yyyy')}
                    </Text>
                    <Block marginTop={17} marginHorizontal={12}>
                      <Block row spaceBetween>
                        {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map(day => (
                          <Text
                            key={day}
                            fontSize={13}
                            semiBold
                            width={(width - 72) / 7}
                            center
                            color={COLORS.black2}>
                            {day}
                          </Text>
                        ))}
                      </Block>
                      <Block marginTop={22} rowGap={18} row wrap>
                        {getCalendarDays(addMonths(currentMonth, month))?.map(
                          day => {
                            const isInMonth = isSameMonth(
                              day,
                              addMonths(currentMonth, month),
                            );
                            const isSelected = selectedDates.some(d =>
                              isSameDay(d, day),
                            );
                            const isInDay = isSameDay(day, new Date());
                            return (
                              <Block
                                width={(width - 76) / 7}
                                key={day}
                                justifyCenter
                                alignCenter>
                                <Pressable
                                  onPress={() => toggleDate(day)}
                                  width={25}
                                  height={25}
                                  radius={25}
                                  justifyCenter
                                  alignCenter
                                  overflow={'hidden'}
                                  opacity={isInMonth ? 1 : 0}>
                                  {isSelected ? (
                                    <RadialGradient
                                      colors={COLORS.gradient5}
                                      style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: 25,
                                        height: 25,
                                      }}>
                                      <Text
                                        fontSize={13}
                                        regular
                                        color={
                                          isSelected
                                            ? COLORS.white
                                            : COLORS.black2
                                        }>
                                        {format(day, 'd')}
                                      </Text>
                                    </RadialGradient>
                                  ) : (
                                    <Text
                                      fontSize={13}
                                      regular
                                      color={
                                        isInDay ? COLORS.yellow3 : COLORS.black2
                                      }>
                                      {format(day, 'd')}
                                    </Text>
                                  )}
                                </Pressable>
                              </Block>
                            );
                          },
                        )}
                      </Block>
                    </Block>
                  </Block>
                ))}
              </ScrollView>
              {/* <Block
                width={width - 48}
                backgroundColor={COLORS.white}
                radius={8}
                paddingBottom={12}>
                <Text
                  marginLeft={12}
                  marginTop={18}
                  fontSize={14}
                  semiBold
                  color={COLORS.black2}>
                  Tháng {format(addMonths(currentMonth, 1), 'L/yyyy')}
                </Text>
                <Block marginTop={17} marginHorizontal={12}>
                  <Block row spaceBetween>
                    {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map(day => (
                      <Text
                        key={day}
                        fontSize={13}
                        semiBold
                        width={(width - 72) / 7}
                        center
                        color={COLORS.black2}>
                        {day}
                      </Text>
                    ))}
                  </Block>
                  <Block marginTop={22} rowGap={18} row wrap>
                    {days2?.map(day => {
                      const isInMonth = isSameMonth(
                        day,
                        addMonths(currentMonth, 1),
                      );
                      const isSelected = selectedDates.some(d =>
                        isSameDay(d, day),
                      );
                      return (
                        <Block
                          width={(width - 76) / 7}
                          key={day}
                          justifyCenter
                          alignCenter>
                          <Pressable
                            onPress={() => toggleDate(day)}
                            width={25}
                            height={25}
                            radius={25}
                            justifyCenter
                            alignCenter
                            overflow={'hidden'}
                            opacity={isInMonth ? 1 : 0.5}>
                            {isSelected ? (
                              <RadialGradient
                                colors={COLORS.gradient5}
                                style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  width: 25,
                                  height: 25,
                                }}>
                                <Text
                                  fontSize={13}
                                  regular
                                  color={
                                    isSelected ? COLORS.white : COLORS.black2
                                  }>
                                  {format(day, 'd')}
                                </Text>
                              </RadialGradient>
                            ) : (
                              <Text fontSize={13} regular color={COLORS.black2}>
                                {format(day, 'd')}
                              </Text>
                            )}
                          </Pressable>
                        </Block>
                      );
                    })}
                  </Block>
                </Block>
              </Block> */}
            </Block>

            <Pressable
              onPress={() => handleSelect(selectedDates)}
              marginHorizontal={12}
              height={48}
              radius={8}
              marginTop={20}
              backgroundColor={COLORS.red4}
              justifyCenter
              alignCenter>
              <Text fontSize={15} regular color={COLORS.white}>
                Đồng ý
              </Text>
            </Pressable>
          </Block>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

function getCalendarDays(month) {
  const start = startOfWeek(startOfMonth(month), {weekStartsOn: 0});
  const end = endOfWeek(endOfMonth(month), {weekStartsOn: 0});
  return eachDayOfInterval({start, end});
}

export default DateMultiPicker;
