import {icon} from '@assets';
import {
  Block,
  HeaderChooseTime,
  Icon,
  Image,
  Pressable,
  Text,
  Switch,
  SANStaffDuties,
  ButtonSubmitService,
  HeaderTitle,
  TextInput,
  ModalChooseDay,
} from '@components';
import {COLORS} from '@theme';
import {useState} from 'react';
import {Modal, SafeAreaView, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {width} from '@responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import router from '@router';

export default function Housework_OddShiftService() {
  const optionDuration = [
    {
      id: 1,
      time: '2 giờ',
      title: 'Tối đa 55m2 hoặc 2 phòng',
    },
    {
      id: 2,
      time: '3 giờ',
      title: 'Tối đa 85m2 hoặc 3 phòng',
    },
    {
      id: 3,
      time: '4 giờ',
      title: 'Tối đa 105m2 hoặc 4 phòng',
    },
  ];
  const [chooseDuration, setChooseDuration] = useState(null);
  const optionService = [
    {
      id: 1,
      service: `${icon.icon_cooking}`,
      serviceChoose: `${icon.icon_cooking_choose}`,
      title: 'Nấu ăn',
      time: '1 giờ',
    },
    {
      id: 2,
      service: `${icon.icon_ironing}`,
      serviceChoose: `${icon.icon_ironing_choose}`,
      title: 'Ủi quần áo',
      time: '1 giờ',
    },
  ];
  const [chooseService, setChooseService] = useState([null]);
  const handleChoose = id => {
    setChooseService(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      return [...prev, id];
    });
  };
  const [isActive, setIsActive] = useState(false);
  const [staffFavorite, setStaffFavorite] = useState(false);
  const [show, setShow] = useState(0);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 122}}>
        <HeaderChooseTime />
        <Block marginTop={20} marginHorizontal={12}>
          <Text fontSize={15} semiBold color={COLORS.black2}>
            Chọn thời lượng
          </Text>
          <Text fontSize={14} regular color={COLORS.black2} marginTop={15}>
            Vui lòng ước tính diện tích cần dọn dẹp và chọn thời lượng phù hợp
          </Text>
          <Block marginTop={19} gap={12}>
            {optionDuration.map(item => (
              <Pressable
                onPress={() => setChooseDuration(item.id)}
                key={item.id}
                paddingBottom={19}
                radius={8}
                borderWidth={chooseDuration === item.id ? 1 : ''}
                borderColor={chooseDuration === item.id && COLORS.red4}
                backgroundColor={
                  chooseDuration === item.id ? COLORS.pinkWhite2 : COLORS.white
                }>
                <Text
                  marginTop={17}
                  marginLeft={12}
                  fontSize={16}
                  semiBold
                  color={
                    chooseDuration === item.id ? COLORS.red4 : COLORS.black2
                  }>
                  {item.time}
                </Text>
                <Text
                  marginTop={8}
                  marginLeft={12}
                  fontSize={14}
                  regular
                  color={
                    chooseDuration === item.id
                      ? COLORS.black2
                      : COLORS.placeholder
                  }>
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </Block>
          <Block marginTop={16} row alignCenter>
            <Icon
              IconType={FontAwesome}
              iconName={'check-circle'}
              iconSize={20}
              iconColor={COLORS.green6}
            />
            <Text fontSize={14} regular color={COLORS.black2} marginLeft={8}>
              Đã bao gồm dụng cụ vệ sinh
            </Text>
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={35}>
            Dịch vụ thêm
          </Text>
          <Block marginTop={15} gap={12}>
            {optionService.map(item => (
              <Pressable
                key={item.id}
                onPress={() => handleChoose(item.id)}
                radius={8}
                borderWidth={chooseService.includes(item.id) ? 1 : ' '}
                borderColor={chooseService.includes(item.id) && COLORS.red4}
                backgroundColor={
                  chooseService.includes(item.id)
                    ? COLORS.pinkWhite2
                    : COLORS.white
                }
                padding={12}>
                <Block row alignCenter>
                  <Image
                    source={
                      chooseService.includes(item.id)
                        ? item.serviceChoose
                        : item.service
                    }
                    width={25}
                    height={25}
                  />
                  <Text
                    marginLeft={11}
                    fontSize={15}
                    regular
                    color={
                      chooseService.includes(item.id)
                        ? COLORS.red4
                        : COLORS.black2
                    }>
                    {item.title}
                  </Text>
                  <Block absolute right={0}>
                    <Text
                      fontSize={14}
                      regular
                      color={
                        chooseService.includes(item.id)
                          ? COLORS.black2
                          : COLORS.placeholder
                      }>
                      +{'  '} {item.time}
                    </Text>
                  </Block>
                </Block>
              </Pressable>
            ))}
          </Block>
          <Block marginTop={35}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Tuỳ chọn
            </Text>
            <Block marginTop={15} row alignCenter>
              <Text fontSize={15} regular color={COLORS.black2}>
                Nhà có thú cưng
              </Text>
              <Block absolute right={0}>
                <Switch value={isActive} onValueChange={setIsActive} />
              </Block>
            </Block>
            <Block marginTop={12} row alignCenter>
              <Text fontSize={15} regular color={COLORS.black2}>
                Ưu tiên nhân viên yêu thích
              </Text>
              <Block absolute right={0}>
                <Switch
                  value={staffFavorite}
                  onValueChange={setStaffFavorite}
                />
              </Block>
            </Block>
          </Block>
          <SANStaffDuties top={30} />
        </Block>
      </ScrollView>
      <ButtonSubmitService
        titleTop={'600.000 đ/5h'}
        titleBottom={'Dịch vụ dọn vệ sinh'}
        onPress={() => setShow(!show)}
      />
      <ModalChooseDay
        visible={show}
        close={() => setShow(false)}
        onPress={() =>
          commonRoot.navigate(router.HOUSEWORK_ODD_SHIFT_CONFIRM_AND_PAY)
        }
      />
    </Block>
  );
}
