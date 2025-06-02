import React, {useState} from 'react';
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
  subMonths,
} from 'date-fns';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {Block, Icon, Pressable, Text} from '@components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RadialGradient from 'react-native-radial-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DateOfBirthPicker = ({visible, close, onPress}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState();

  const days = getCalendarDays(currentMonth);
  const handleSelect = dates => {
    onPress(dates);
    close();
  };

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
                Chọn ngày sinh
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
              gap={10}
              marginHorizontal={12}
              width={width - 48}>
              <Block
                width={width - 48}
                backgroundColor={COLORS.white}
                radius={8}
                paddingBottom={12}>
                <Block
                  rowCenter
                  spaceBetween
                  marginTop={18}
                  marginHorizontal={12}>
                  <Pressable
                    onPress={() => setCurrentMonth(subMonths(currentMonth, 1))}>
                    <Icon
                      IconType={AntDesign}
                      iconName={'caretleft'}
                      iconSize={20}
                      iconColor={COLORS.darkRed1}
                    />
                  </Pressable>
                  <Text
                    marginLeft={12}
                    fontSize={14}
                    semiBold
                    color={COLORS.black2}>
                    Tháng {format(currentMonth, 'LL|yyyy')}
                    {/*  */}
                  </Text>
                  <Pressable
                    onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}>
                    <Icon
                      IconType={AntDesign}
                      iconName={'caretright'}
                      iconSize={20}
                      iconColor={COLORS.darkRed1}
                    />
                  </Pressable>
                </Block>
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
                    {days?.map(day => {
                      const isInMonth = isSameMonth(day, currentMonth);
                      const isInDay = isSameDay(day, new Date());
                      return (
                        <Block
                          width={(width - 76) / 7}
                          key={day}
                          justifyCenter
                          alignCenter>
                          <Pressable
                            onPress={() => {
                              setSelectedDates(format(day, 'dd/MM/yyyy'));
                            }}
                            width={25}
                            height={25}
                            radius={25}
                            justifyCenter
                            alignCenter
                            overflow={'hidden'}
                            opacity={isInMonth ? 1 : 0}>
                            {selectedDates === format(day, 'dd/MM/yyyy') ? (
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
                                    selectedDates === format(day, 'dd/MM/yyyy')
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
                    })}
                  </Block>
                </Block>
              </Block>
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

export default DateOfBirthPicker;
