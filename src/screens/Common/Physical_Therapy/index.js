import actions from '@actions';
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
  StatusBar,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {formatCurrency} from '@utils';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';

export default function PhysicalTherapy({route}) {
  const [chooseDuration, setChooseDuration] = useState(1);
  const [chooseEquipments, setChooseEquipments] = useState([]);
  const handleChooseEquipment = (icon, text, hour, price) => {
    setChooseEquipments(prev => {
      if (prev.some(item => item.icon === icon)) {
        return prev.filter(item => item.icon !== icon);
      }
      return [...prev, {icon: icon, text: text, hour: hour, price: price}];
    });
  };
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_ADDRESS_SAVE,
    });
    dispatch({
      type: actions.GET_DETAIL_SERVICE_SUB,
      params: {item_id: 7},
    });
  }, [dispatch]);
  const infoAddress = useSelector(state => state.getAddressSave?.data || []);
  const address = infoAddress.find(
    item => item.item_id === route?.params?.addressId,
  );
  const detailSub = useSelector(state => state.getDetailServiceSub?.data || []);
  const selectedDuration = detailSub?.durations?.find(
    item => item.item_id === chooseDuration,
  );

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <ScrollView contentContainerStyle={{paddingBottom: 147}}>
        <HeaderChooseTime
          titleAddress={address?.title}
          address={address?.address_full}
        />
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
            {detailSub?.durations?.map(item => (
              <Pressable
                onPress={() => setChooseDuration(item.item_id)}
                key={item.item_id}
                paddingBottom={19}
                radius={8}
                borderWidth={chooseDuration === item.item_id ? 1 : ''}
                borderColor={chooseDuration === item.item_id && COLORS.red4}
                backgroundColor={
                  chooseDuration === item.item_id
                    ? COLORS.pinkWhite2
                    : COLORS.white
                }>
                <Text
                  marginLeft={12}
                  marginTop={17}
                  fontSize={16}
                  semiBold
                  color={
                    chooseDuration === item.item_id
                      ? COLORS.red4
                      : COLORS.black2
                  }>
                  {item.title}
                </Text>
                <Text
                  marginTop={8}
                  marginLeft={12}
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}>
                  {item.short}
                </Text>
              </Pressable>
            ))}
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={19}>
            Thiết bị hỗ trợ
          </Text>
          <Block marginTop={15} row wrap rowGap={12} columnGap={12.3}>
            {detailSub?.extra_services?.map(item => (
              <Pressable
                onPress={() =>
                  handleChooseEquipment(
                    item.icon,
                    item.text,
                    item.hour,
                    item.price,
                  )
                }
                key={item.icon}
                width={(width - 24) / 3 - 9}
                height={146}
                borderWidth={
                  chooseEquipments.some(equip => equip.icon === item.icon) && 1
                }
                borderColor={
                  chooseEquipments.some(equip => equip.icon === item.icon) &&
                  COLORS.red4
                }
                backgroundColor={
                  chooseEquipments.some(equip => equip.icon === item.icon)
                    ? COLORS.pinkWhite2
                    : COLORS.white
                }
                radius={8}
                alignCenter>
                <Image
                  source={
                    chooseEquipments.some(equip => equip.icon === item.icon)
                      ? {uri: `${URL_API.uploads}/${item.icon_color}`}
                      : {uri: `${URL_API.uploads}/${item.icon}`}
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
                    chooseEquipments.some(equip => equip.icon === item.icon)
                      ? COLORS.red4
                      : COLORS.black2
                  }
                  center>
                  {item.text}
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={
                    chooseEquipments.some(equip => equip.icon === item.icon)
                      ? COLORS.black2
                      : COLORS.placeholder
                  }
                  center>
                  +{formatCurrency(item.price)}
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
          <SANStaffDuties
            task_todo={detailSub?.service?.tasks_todo}
            task_nottodo={detailSub?.service?.tasks_nottodo}
            top={30}
          />
        </Block>
      </ScrollView>
      <ButtonSubmitService
        titleTop={selectedDuration?.title}
        titleBottom={detailSub?.service?.title}
        onPress={() =>
          commonRoot.navigate(router.SELECT_DAY_WORKING, {
            addressId: route?.params?.addressId,
            service_id: route?.params?.service_id,
            service_sub_id: 7,
            duration_id: selectedDuration?.item_id,
            duration: selectedDuration?.title,
            extra_services: chooseEquipments,
            name_service: detailSub?.service?.title,
          })
        }
      />
    </Block>
  );
}
