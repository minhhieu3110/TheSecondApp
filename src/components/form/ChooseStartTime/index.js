import {Block, Text, Image, Pressable} from '@components';
import {COLORS} from '@theme';
import {icon} from '@assets';
import DTP from '@react-native-community/datetimepicker';
import {useState} from 'react';

export default function ChooseStartTime({onDateChange}) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const handleChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      onDateChange(selectedDate);
      setShow(false);
    }
  };
  return (
    <Block
      marginTop={15}
      radius={8}
      height={71.67}
      backgroundColor={COLORS.white}
      justifyCenter>
      <Block marginLeft={12} rowCenter spaceBetween marginRight={30}>
        <Block rowCenter>
          <Image source={icon.icon_time_activity} width={22} height={22} />
          <Text marginLeft={8} fontSize={15} semiBold color={COLORS.black2}>
            Chọn giờ bắt đầu
          </Text>
        </Block>
        <Pressable
          onPress={() => setShow(true)}
          width={151}
          height={42}
          backgroundColor={COLORS.pinkWhite2}
          alignCenter
          paddingHorizontal={29.5}
          rowCenter
          spaceBetween>
          <Text>{String(date.getHours()).padStart(2, '0')}</Text>
          <Block height={31.67} borderWidth={1} borderColor={COLORS.white} />
          <Text>{String(date.getMinutes()).padStart(2, '0')}</Text>
        </Pressable>
        {show && (
          <DTP
            mode="time"
            value={date}
            onChange={handleChange}
            is24Hour={true}
            display="inline"
          />
        )}
      </Block>
    </Block>
  );
}
