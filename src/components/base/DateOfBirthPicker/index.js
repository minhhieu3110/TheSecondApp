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
} from 'date-fns';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {Block, Icon, Pressable, Text} from '@components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RadialGradient from 'react-native-radial-gradient';
import {Dropdown} from 'react-native-element-dropdown';

const DateOfBirthPicker = ({visible, close, onPress}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState();

  const months = Array.from({length: 12}, (_, i) => ({
    label: `Tháng ${i + 1}`,
    value: i,
  })).filter(month => {
    const currentYear = new Date().getFullYear();
    return (
      currentMonth.getFullYear() < currentYear ||
      month.value <= new Date().getMonth()
    );
  });
  const years = Array.from({length: 100}, (_, i) => ({
    label: `${new Date().getFullYear() - i}`,
    value: new Date().getFullYear() - i,
  }));

  const days = getCalendarDays(currentMonth).filter(day => day <= new Date());
  const handleSelect = dates => {
    onPress(dates);
    close();
  };

  const handleMonthYearChange = (month, year) => {
    setCurrentMonth(new Date(year, month, 1));
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
                  <Dropdown
                    data={months}
                    labelField="label"
                    valueField="value"
                    placeholder="Chọn tháng"
                    value={currentMonth.getMonth()}
                    onChange={item =>
                      handleMonthYearChange(
                        item.value,
                        currentMonth.getFullYear(),
                      )
                    }
                    style={{
                      width: (width - 72) / 2,
                      backgroundColor: COLORS.gray10,
                      borderRadius: 8,
                      padding: 8,
                    }}
                  />
                  <Dropdown
                    data={years}
                    labelField="label"
                    valueField="value"
                    placeholder="Chọn năm"
                    search={true}
                    value={currentMonth.getFullYear()}
                    onChange={item =>
                      handleMonthYearChange(currentMonth.getMonth(), item.value)
                    }
                    style={{
                      width: (width - 72) / 2,
                      backgroundColor: COLORS.gray10,
                      borderRadius: 8,
                      padding: 8,
                    }}
                  />
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
                      const isSelectable = day <= new Date();
                      return (
                        <Block
                          width={(width - 76) / 7}
                          key={day}
                          justifyCenter
                          alignCenter>
                          <Pressable
                            onPress={() => {
                              if (isSelectable) {
                                setSelectedDates(format(day, 'dd/MM/yyyy'));
                              }
                            }}
                            width={25}
                            height={25}
                            radius={25}
                            justifyCenter
                            alignCenter
                            overflow={'hidden'}
                            opacity={isInMonth ? 1 : 0.5}
                            disabled={!isSelectable}>
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
                                  isSelectable
                                    ? isInDay
                                      ? COLORS.yellow3
                                      : COLORS.black2
                                    : COLORS.gray5
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
