import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  SafeAreaView,
} from 'react-native';
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

const DateMultiPicker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);

  const days = getCalendarDays(currentMonth);

  function toggleDate(date) {
    const isSelected = selectedDates.some(d => isSameDay(d, date));
    if (isSelected) {
      setSelectedDates(prev => prev.filter(d => !isSameDay(d, date)));
    } else {
      setSelectedDates(prev => [...prev, date]);
    }
  }

  return (
    <Modal animationType="fade">
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.transparentColor4,
          }}>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => setCurrentMonth(subMonths(currentMonth, 1))}>
                <Text style={styles.arrow}>←</Text>
              </TouchableOpacity>
              <Text style={styles.monthLabel}>
                {format(currentMonth, 'MMMM yyyy')}
              </Text>
              <TouchableOpacity
                onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}>
                <Text style={styles.arrow}>→</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.weekRow}>
              {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map(day => (
                <Text key={day} style={styles.dayLabel}>
                  {day}
                </Text>
              ))}
            </View>

            <FlatList
              data={days}
              keyExtractor={item => item.toString()}
              numColumns={7}
              renderItem={({item}) => {
                const isSelected = selectedDates.some(d => isSameDay(d, item));
                const isInMonth = isSameMonth(item, currentMonth);

                return (
                  <TouchableOpacity
                    onPress={() => toggleDate(item)}
                    style={[
                      styles.dateCell,
                      isSelected && styles.selected,
                      !isInMonth && styles.outsideMonth,
                    ]}>
                    <Text
                      style={[
                        styles.dateText,
                        isSelected && styles.selectedText,
                      ]}>
                      {format(item, 'd')}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

// Get all days to show in calendar grid for the given month
function getCalendarDays(month) {
  const start = startOfWeek(startOfMonth(month), {weekStartsOn: 0});
  const end = endOfWeek(endOfMonth(month), {weekStartsOn: 0});
  return eachDayOfInterval({start, end});
}

const styles = StyleSheet.create({
  container: {
    width: width - 24,
    backgroundColor: COLORS.white,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
  },
  monthLabel: {fontSize: 20, fontWeight: 'bold'},
  arrow: {fontSize: 20},
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dayLabel: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 25,
    height: 25,
  },
  dateCell: {
    width: 25,
    height: 25,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    flex: 1,
    textAlign: 'center',
  },
  selected: {backgroundColor: COLORS.darkRed1},
  selectedText: {color: 'white'},
  dateText: {color: 'black'},
  outsideMonth: {opacity: 0.4},
});

export default DateMultiPicker;
