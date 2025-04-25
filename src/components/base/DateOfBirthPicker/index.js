import {Block, Text, Pressable, Icon} from '@components';
import {Modal, TouchableOpacity} from 'react-native';
import {COLORS} from '@theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {width} from '@responsive';

import CalendarPicker from 'react-native-calendar-picker';
import {convertDate, FormatDay} from '@utils';

const DateOfBirthPicker = ({visible, close, onChange}) => {
  const handleDateChange = day => {
    const formattedDate = convertDate(day);
    onChange(formattedDate);
    close();
  };

  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="fade"
      onRequestClose={close}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}>
        <Block
          backgroundColor={COLORS.gray10}
          paddingBottom={15}
          width={width - 24}
          radius={15}
          justifyCenter>
          <Text
            fontSize={15}
            semiBold
            color={COLORS.black2}
            marginTop={12}
            marginHorizontal={68}
            center>
            Chọn ngày sinh
          </Text>
          <CalendarPicker
            weekdays={['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']}
            months={[
              'Tháng 1',
              'Tháng 2',
              'Tháng 3',
              'Tháng 4',
              'Tháng 5',
              'Tháng 6',
              'Tháng 7',
              'Tháng 8',
              'Tháng 9',
              'Tháng 10',
              'Tháng 11',
              'Tháng 12',
            ]}
            selectedDayColor={COLORS.red4}
            selectedDayTextColor="#FFFFFF"
            previousTitle="Trước"
            nextTitle="Sau"
            onDateChange={handleDateChange}
          />
          <Pressable
            onPress={close}
            absolute
            top={5}
            right={6}
            width={30}
            height={30}
            radius={50}
            backgroundColor={COLORS.grayWhite}
            justifyCenter
            alignCenter>
            <Icon
              IconType={FontAwesome5}
              iconName={'times'}
              iconColor={COLORS.black1}
              iconSize={14.6}
            />
          </Pressable>
        </Block>
      </TouchableOpacity>
    </Modal>
  );
};

export default DateOfBirthPicker;
