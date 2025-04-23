import {Block, Text, Image} from '@components';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {icon} from '@assets';
import DatePicker from 'react-native-date-picker';
export default function ChooseStartTime({date, onDateChange}) {
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
        <DatePicker
          mode="time"
          date={date}
          onDateChange={onDateChange}
          style={{
            width: width - 277,
            height: 42,
            borderRadius: 5,
            backgroundColor: COLORS.pinkWhite2,
          }}
          theme="auto"
        />
      </Block>
    </Block>
  );
}
