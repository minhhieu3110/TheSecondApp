import {icon} from '@assets';
import {
  Block,
  ButtonSubmitService,
  HeaderChooseTime,
  Icon,
  Image,
  ModalChooseDay,
  ModalSANStaffDo,
  ModalSANStaffNotPerform,
  Pressable,
  ScrollView,
  Switch,
  Text,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
const ChooseTimeForService = ({route}) => {
  const dayWeek = [
    {id: 1, title: 'T2'},
    {id: 2, title: 'T3'},
    {id: 3, title: 'T4'},
    {id: 4, title: 'T5'},
    {id: 5, title: 'T6'},
    {id: 6, title: 'T7'},
    {id: 7, title: 'CN'},
  ];
  const [choose, setChoose] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (route.params?.item_id) {
      dispatch({
        type: actions.GET_DETAIL_SERVICE_SUB,
        params: {item_id: route.params?.item_id},
      });
    }
  }, [dispatch]);
  const detailSub = useSelector(state => state.getDetailServiceSub?.data || []);
  const [doWork, setDoWork] = useState(0);
  const [notWork, setNotWork] = useState(0);
  const [againWeek, setAgainWeek] = useState([]);
  const handleWeekDayPress = title => {
    setAgainWeek(prevState => {
      if (prevState.includes(title)) {
        return prevState.filter(item => item !== title);
      }
      return [...prevState, title];
    });
  };
  const [monthly, setMonthly] = useState(1);
  const [time, setTime] = useState(new Date());
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderChooseTime />
      <ScrollView contentContainerStyle={{paddingBottom: 136}}>
        <Block marginHorizontal={12} marginTop={20}>
          {detailSub.months?.length > 0 && (
            <Block paddingBottom={20.2}>
              <Block rowCenter spaceBetween>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Chọn lịch làm việc
                </Text>
                <Text fontSize={15} regular color={COLORS.red4}>
                  Tuỳ chọn lịch
                </Text>
              </Block>
              <Block marginTop={15} row gap={9.9}>
                {dayWeek.map(item => (
                  <Pressable
                    onPress={() => handleWeekDayPress(item.title)}
                    key={item.title}
                    width={(width - 83.4) / 7}
                    height={(width - 83.4) / 7}
                    radius={5}
                    borderWidth={againWeek.includes(item.title) && 1}
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
                        againWeek.includes(item.title)
                          ? COLORS.red4
                          : COLORS.black2
                      }>
                      {item.title}
                    </Text>
                  </Pressable>
                ))}
              </Block>
              <Block
                marginTop={15}
                radius={8}
                height={71.67}
                backgroundColor={COLORS.white}
                justifyCenter>
                <Block marginLeft={12} rowCenter spaceBetween marginRight={30}>
                  <Block rowCenter>
                    <Image
                      source={icon.icon_time_activity}
                      width={22}
                      height={22}
                    />
                    <Text
                      marginLeft={8}
                      fontSize={15}
                      semiBold
                      color={COLORS.black2}>
                      Chọn giờ bắt đầu
                    </Text>
                  </Block>
                  <DatePicker
                    mode="time"
                    date={time}
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
            </Block>
          )}
          <Text fontSize={15} semiBold color={COLORS.black2}>
            Chọn thời lượng
          </Text>
          <Block marginTop={15} row columnGap={12}>
            {detailSub.durations?.map(item => (
              <Pressable
                key={item.item_id}
                onPress={() => setChoose(item.item_id)}
                width={(width - 24) / 2 - 6}
                radius={8}
                paddingBottom={18}
                borderWidth={1}
                borderColor={
                  choose === item.item_id ? COLORS.red4 : COLORS.white2
                }
                backgroundColor={
                  choose === item.item_id ? COLORS.pinkWhite2 : COLORS.white
                }
                alignCenter>
                <Text
                  marginTop={19}
                  fontSize={15}
                  medium
                  color={choose === item.item_id ? COLORS.red4 : COLORS.black2}>
                  {item.short}
                </Text>
                <Text
                  marginTop={20}
                  fontSize={15}
                  regular
                  color={
                    choose === item.item_id ? COLORS.black2 : COLORS.placeholder
                  }>
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </Block>
          {detailSub.months?.length > 0 && (
            <Block marginTop={20}>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Loại gói
              </Text>
              <Block marginTop={15} row wrap gap={12}>
                {detailSub.months?.map(item => (
                  <Pressable
                    onPress={() => setMonthly(item.item_id)}
                    key={item.item_id}
                    width={(width - 36) / 2}
                    height={42}
                    radius={5}
                    borderWidth={monthly === item.item_id && 1}
                    borderColor={monthly === item.item_id && COLORS.red4}
                    backgroundColor={
                      monthly === item.item_id
                        ? COLORS.pinkWhite2
                        : COLORS.white
                    }
                    justifyCenter
                    alignCenter>
                    <Text
                      fontSize={15}
                      regular
                      color={
                        monthly === item.item_id ? COLORS.red4 : COLORS.black2
                      }>
                      {item.title}
                    </Text>
                  </Pressable>
                ))}
              </Block>
            </Block>
          )}
          <Text fontSize={14} regular color={COLORS.placeholder} marginTop={21}>
            Tuỳ chọn
          </Text>
          <Block alignCenter marginTop={15} row>
            <Image
              source={icon.icon_option_staff_favorite}
              width={30}
              height={27.95}
            />
            <Text fontSize={15} marginLeft={7} regular color={COLORS.black6}>
              Ưu tiên nhân viên yêu thích
            </Text>
            <Block absolute right={0} width={46} height={23}>
              <Switch value={isActive} onValueChange={setIsActive} />
            </Block>
          </Block>
          <Block marginTop={30}>
            <Pressable
              onPress={() => setDoWork(!doWork)}
              paddingBottom={23}
              radius={8}
              backgroundColor={COLORS.white}>
              <Block marginLeft={15} marginTop={15} marginRight={8} row>
                <Icon
                  IconType={FontAwesome}
                  iconName={'check-circle'}
                  iconSize={30.6}
                  iconColor={COLORS.green6}
                />
                <Text
                  fontSize={15}
                  medium
                  marginLeft={10.3}
                  color={COLORS.black6}
                  numberOfLines={2}
                  width={width - 103}>
                  Nhân viên của SAN sẽ thực hiện những công việc gì?
                </Text>
              </Block>
              <Block absolute top={17} right={8}>
                <Icon
                  IconType={MaterialIcons}
                  iconName={'keyboard-arrow-right'}
                  iconColor={COLORS.black6}
                  iconSize={22}
                />
              </Block>
            </Pressable>
            <Pressable
              onPress={() => setNotWork(!notWork)}
              marginTop={12}
              paddingBottom={23}
              radius={8}
              backgroundColor={COLORS.white}>
              <Block marginLeft={15} marginTop={15} marginRight={8} row>
                <Icon
                  IconType={FontAwesome}
                  iconName={'times-circle'}
                  iconSize={30.6}
                  iconColor={COLORS.red4}
                />
                <Text
                  fontSize={15}
                  medium
                  marginLeft={10.3}
                  color={COLORS.black6}
                  numberOfLines={2}
                  width={width - 103}>
                  Nhân viên của SAN sẽ không thực hiện những công việc gì?
                </Text>
              </Block>
              <Block absolute top={17} right={8}>
                <Icon
                  IconType={MaterialIcons}
                  iconName={'keyboard-arrow-right'}
                  iconColor={COLORS.black6}
                  iconSize={22}
                />
              </Block>
            </Pressable>
            <ModalSANStaffDo
              data={detailSub.service?.tasks_todo}
              visible={doWork}
              close={() => setDoWork(false)}
            />
            <ModalSANStaffNotPerform
              data={detailSub.service?.tasks_nottodo}
              visible={notWork}
              close={() => setNotWork(false)}
            />
          </Block>
        </Block>
      </ScrollView>
      <ButtonSubmitService
        titleBottom={detailSub?.service?.title}
        onPress={() => setVisible(!visible)}
      />
      <ModalChooseDay
        visible={visible}
        close={() => setVisible(0)}
        onPress={() => commonRoot.navigate(router.ELEDERLY_CONFIRM_PAY)}
      />
      {/* {detailSub.map(item => (
        <Block marginTop={20}>
          <Block marginHorizontal={12}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Chọn thời lượng
            </Text>
          </Block>
        </Block>
      ))} */}
    </Block>
  );
};
export default ChooseTimeForService;
