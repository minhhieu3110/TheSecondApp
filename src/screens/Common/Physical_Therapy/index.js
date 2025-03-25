import {icon} from '@assets';
import {
  Block,
  HeaderChooseTime,
  Image,
  Pressable,
  Text,
  Switch,
  SANStaffDuties,
  ButtonSubmitService,
  ModalChooseDay,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useState} from 'react';
import {ScrollView} from 'react-native';

export default function PhysicalTherapy() {
  const duration = [
    {
      id: 1,
      time: '2 giờ',
      title: 'Thực hiện theo quy trình vật lý trị liệu từ thấp đến cao',
    },
    {
      id: 2,
      time: '3 giờ',
      title: 'Thực hiện theo quy trình vật lý trị liệu từ thấp đến cao',
    },
    {
      id: 3,
      time: '4 giờ',
      title: 'Thực hiện theo quy trình vật lý trị liệu từ thấp đến cao',
    },
  ];
  const [chooseDuration, setChooseDuration] = useState(1);
  const supportEquipment = [
    {
      id: 1,
      equipment: `${icon.icon_hot_stone}`,
      equipmentChoose: `${icon.icon_hot_stone_choose}`,
      name: 'Đá nóng',
      price: '50K',
    },
    {
      id: 2,
      equipment: `${icon.icon_electric_machine}`,
      equipmentChoose: `${icon.icon_electric_machine_choose}`,
      name: 'Máy châm cứu điện',
      price: '500K',
    },
    {
      id: 3,
      equipment: `${icon.icon_lamp}`,
      equipmentChoose: `${icon.icon_lamp_choose}`,
      name: 'Đèn hồng ngoại',
      price: '500K',
    },
    {
      id: 4,
      equipment: `${icon.icon_vibrator}`,
      equipmentChoose: `${icon.icon_vibrator_choose}`,
      name: 'Máy rung',
      price: '200K',
    },
    {
      id: 5,
      equipment: `${icon.icon_hot_stone}`,
      equipmentChoose: `${icon.icon_hot_stone_choose}`,
      name: 'Đá nóng',
      price: '50K',
    },
    {
      id: 6,
      equipment: `${icon.icon_electric_machine}`,
      equipmentChoose: `${icon.icon_electric_machine_choose}`,
      name: 'Máy châm cứu điện',
      price: '500K',
    },
  ];
  const [chooseEquipments, setChooseEquipments] = useState([null]);
  const handleChooseEquipment = id => {
    setChooseEquipments(prevState => {
      if (prevState.includes(id)) {
        return prevState.filter(item => item !== id);
      }
      return [...prevState, id];
    });
  };
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(0);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 147}}>
        <HeaderChooseTime />
        <Block marginTop={20} marginHorizontal={12}>
          <Text fontSize={15} semiBold color={COLORS.black2}>
            Chọn thời lượng
          </Text>
          <Text
            marginTop={15}
            fontSize={14}
            regular
            color={COLORS.black2}
            numberOfLines={2}>
            Vui lòng ước tính diện tích cần dọn dẹp và chọn thời lượng cho phù
            hợp
          </Text>
          <Block marginTop={19} gap={12}>
            {duration.map(item => (
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
                  marginLeft={12}
                  marginTop={17}
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
                  color={COLORS.placeholder}>
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={19}>
            Thiết bị hỗ trợ
          </Text>
          <Block marginTop={15} row wrap rowGap={12} columnGap={12.3}>
            {supportEquipment.map(item => (
              <Pressable
                onPress={() => handleChooseEquipment(item.id)}
                key={item.id}
                width={(width - 24) / 3 - 9}
                height={146}
                borderWidth={chooseEquipments.includes(item.id) ? 1 : ''}
                borderColor={chooseEquipments.includes(item.id) && COLORS.red4}
                backgroundColor={
                  chooseEquipments.includes(item.id)
                    ? COLORS.pinkWhite2
                    : COLORS.white
                }
                radius={8}
                alignCenter>
                <Image
                  source={
                    chooseEquipments.includes(item.id)
                      ? item.equipmentChoose
                      : item.equipment
                  }
                  width={40}
                  height={40}
                  marginTop={15}
                />
                <Text
                  marginTop={12}
                  fontSize={14}
                  regular
                  color={
                    chooseEquipments.includes(item.id)
                      ? COLORS.red4
                      : COLORS.black2
                  }
                  center>
                  {item.name}
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={
                    chooseEquipments.includes(item.id)
                      ? COLORS.black2
                      : COLORS.placeholder
                  }
                  center>
                  +{item.price}
                </Text>
              </Pressable>
            ))}
          </Block>
          <Block marginTop={25}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Tuỳ chọn
            </Text>
            <Block row alignCenter marginTop={15} spaceBetween>
              <Text fontSize={15} regular color={COLORS.black2}>
                Ưu tiên nhân viên yêu thích
              </Text>
              <Switch
                value={isActive}
                onValueChange={setIsActive}
                trackColor={{false: COLORS.grayWhite, true: COLORS.green6}}
                thumbColor={{false: COLORS.white, true: COLORS.white}}
                width={46}
                height={23}
                thumbSize={19}
                padding={3}
              />
            </Block>
          </Block>
          <SANStaffDuties top={30} />
        </Block>
      </ScrollView>
      <ButtonSubmitService
        titleTop={'950.000 đ/3 giờ'}
        titleBottom={'Dịch vụ vật lý trị liệu tại nhà'}
        onPress={() => setVisible(!0)}
      />
      <ModalChooseDay
        visible={visible}
        close={() => setVisible(false)}
        onPress={() =>
          commonRoot.navigate(router.PHYSICAL_THERAPY_CONFIRM_AND_PAY)
        }
      />
    </Block>
  );
}
