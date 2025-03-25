import {icon} from '@assets';
import {
  Block,
  ButtonSubmitService,
  HeaderChooseTime,
  HeaderTitle,
  Icon,
  Image,
  ModalChooseDay,
  ModalSANStaffDo,
  ModalSANStaffNotPerform,
  Pressable,
  SANStaffDuties,
  Switch,
  Text,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useState} from 'react';
import {Modal, SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
export default function Elederly_Servicedurationday() {
  const optionChoose = [
    {id: 1, title: 'Theo buổi', duration: 'Tối đa 4h/ngày'},
    {id: 2, title: 'Theo ngày', duration: 'Tối đa 8h/ngày'},
  ];
  const [choose, setChoose] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const selectedOption = optionChoose.find(item => item.id === choose);
  const [visible, setVisible] = useState(0);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderChooseTime />
      <Block marginHorizontal={12} marginTop={20}>
        <Text fontSize={15} semiBold color={COLORS.black2}>
          Chọn thời lượng
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
                color={choose === item.id ? COLORS.black2 : COLORS.placeholder}>
                {item.duration}
              </Text>
            </Pressable>
          ))}
        </Block>
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
        <SANStaffDuties top={30} />
      </Block>
      {selectedOption && (
        <ButtonSubmitService
          titleTop={selectedOption?.duration}
          titleBottom={'Dịch vụ chăm sóc người già'}
          onPress={() => setVisible(!visible)}
        />
      )}
      <ModalChooseDay
        visible={visible}
        close={() => setVisible(0)}
        onPress={() => commonRoot.navigate(router.ELEDERLY_CONFIRM_PAY)}
      />
    </Block>
  );
}
