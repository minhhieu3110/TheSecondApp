import {
  Block,
  HeaderChooseTime,
  Pressable,
  Text,
  Image,
  TextInput,
  Icon,
  ButtonSubmitService,
  ModalSANStaffDo,
  ModalSANStaffNotPerform,
  ModalCalendar,
  SANStaffDuties,
} from '@components';
import {COLORS} from '@theme';
import {useState} from 'react';
import {icon} from '@assets';
import {width} from '@responsive';
import {ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
export default function Elederly_Servicedurationmonth() {
  const dayWeek = [
    {id: 1, title: 'T2'},
    {id: 2, title: 'T3'},
    {id: 3, title: 'T4'},
    {id: 4, title: 'T5'},
    {id: 5, title: 'T6'},
    {id: 6, title: 'T7'},
    {id: 7, title: 'CN'},
  ];
  const optionChoose = [
    {id: 1, title: 'Theo buổi', duration: 'Tối đa 4h/ngày'},
    {id: 2, title: 'Theo ngày', duration: 'Tối đa 8h/ngày'},
  ];
  const optionServiceDuration = [
    {id: 1, title: 'Gói 1 tháng'},
    {id: 2, title: 'Gói 2 tháng'},
    {id: 3, title: 'Gói 3 tháng'},
    {id: 4, title: 'Gói 6 tháng'},
  ];
  const [choose, setChoose] = useState(1);
  const [chooseOptionDuration, setChooseOptionDuration] = useState(1);
  const [againWeek, setAgainWeek] = useState([null]);
  const handleWeekDayPress = id => {
    setAgainWeek(prevState => {
      if (prevState.includes(id)) {
        return prevState.filter(item => item !== id);
      }
      return [...prevState, id];
    });
  };
  const [doWork, setDoWork] = useState(0);
  const [notWork, setNotWork] = useState(0);
  const [calendar, setCalendar] = useState(0);
  const [selected, setSelected] = useState('');
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 136}}>
        <HeaderChooseTime />
        <Block marginTop={20} marginHorizontal={12}>
          <Block row alignCenter>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Chọn lịch làm việc
            </Text>
            <Pressable
              absolute
              right={0}
              onPress={() => setCalendar(!calendar)}>
              <Text fontSize={15} regular color={COLORS.red4}>
                Tuỳ chọn lịch
              </Text>
            </Pressable>
          </Block>
          <Block marginTop={15} row columnGap={9.9} justifyCenter>
            {dayWeek.map(item => (
              <Pressable
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
          <Block
            marginTop={15}
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
                  08
                </Text>
                <Block
                  width={1}
                  backgroundColor={COLORS.white}
                  radius={5}
                  height={31.67}
                />
                <Text fontSize={15} regular color={COLORS.black2}>
                  00
                </Text>
              </Block>
            </Block>
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20.2}>
            Thời lượng
          </Text>
          <Block marginTop={15} row columnGap={12}>
            {optionChoose.map(item => (
              <Pressable
                key={item.id}
                onPress={() => setChoose(item.id)}
                width={(width - 24) / 2 - 6}
                radius={8}
                paddingBottom={18}
                borderWidth={1}
                borderColor={choose === item.id ? COLORS.red4 : COLORS.white2}
                backgroundColor={
                  choose === item.id ? COLORS.pinkWhite2 : COLORS.white
                }
                alignCenter>
                <Text
                  marginTop={19}
                  fontSize={15}
                  medium
                  color={choose === item.id ? COLORS.red4 : COLORS.black2}>
                  {item.title}
                </Text>
                <Text
                  marginTop={20}
                  fontSize={15}
                  regular
                  color={
                    choose === item.id ? COLORS.black2 : COLORS.placeholder
                  }>
                  {item.duration}
                </Text>
              </Pressable>
            ))}
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Loại gói
          </Text>
          <Block row wrap gap={12} marginTop={15}>
            {optionServiceDuration.map(item => (
              <Pressable
                onPress={() => setChooseOptionDuration(item.id)}
                key={item.id}
                borderWidth={chooseOptionDuration === item.id ? 1 : ''}
                borderColor={chooseOptionDuration === item.id && COLORS.red4}
                radius={5}
                backgroundColor={
                  chooseOptionDuration === item.id
                    ? COLORS.pinkWhite2
                    : COLORS.white
                }
                width={(width - 24) / 2 - 6}
                height={42}
                alignCenter
                justifyCenter>
                <Text
                  fontSize={15}
                  regular
                  color={
                    chooseOptionDuration === item.id
                      ? COLORS.red4
                      : COLORS.black2
                  }>
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </Block>
          <Block marginTop={20}>
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
          <SANStaffDuties top={20.3} />
        </Block>
      </ScrollView>
      <ButtonSubmitService
        titleTop={'2.050.000 đ/8 buổi'}
        titleBottom={'Dịch vụ chăm sóc người già'}
        onPress={() => commonRoot.navigate(router.ELEDERLY_CONFIRM_PAY_MONTH)}
      />

      {/* <ModalCalendar visible={calendar} close={() => setCalendar(false)} /> */}
    </Block>
  );
}
