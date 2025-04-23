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
import {useEffect, useState} from 'react';
import {Modal, SafeAreaView, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {width} from '@responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import {URL_API} from 'redux/sagas/common';

export default function Housework_OddShiftService({route}) {
  const dispatch = useDispatch();
  const [chooseDuration, setChooseDuration] = useState();
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
  const [chooseService, setChooseService] = useState([]);
  const handleChoose = (icon, text, hour, price) => {
    setChooseService(prev => {
      if (prev.some(item => item.icon === icon)) {
        return prev.filter(item => item.icon !== icon);
      }
      return [...prev, {icon: icon, text: text, hour: hour, price: price}];
    });
  };
  const [isActive, setIsActive] = useState(false);
  const [staffFavorite, setStaffFavorite] = useState(0);
  const [show, setShow] = useState(0);

  useEffect(() => {
    dispatch({
      type: actions.GET_ADDRESS_SAVE,
    });
    dispatch({
      type: actions.GET_DETAIL_SERVICE_SUB,
      params: {item_id: route?.params?.service_sub_id},
    });
  }, [dispatch]);
  const addressInfo = useSelector(state => state.getAddressSave?.data || []);
  const address = addressInfo?.find(
    item => item.item_id === route?.params?.address_id,
  );
  const detailSub = useSelector(state => state.getDetailServiceSub?.data || []);
  const durationSelected = detailSub?.durations?.find(
    item => item.item_id === chooseDuration,
  );

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 122}}>
        <HeaderChooseTime
          titleAddress={address?.title}
          address={address?.address_full}
        />
        <Block marginTop={20} marginHorizontal={12}>
          <Text fontSize={15} semiBold color={COLORS.black2}>
            Chọn thời lượng
          </Text>
          <Text fontSize={14} regular color={COLORS.black2} marginTop={15}>
            Vui lòng ước tính diện tích cần dọn dẹp và chọn thời lượng phù hợp
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
                  marginTop={17}
                  marginLeft={12}
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
                  color={
                    chooseDuration === item.item_id
                      ? COLORS.black2
                      : COLORS.placeholder
                  }>
                  {item.short}
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
            {detailSub?.extra_services?.map(item => (
              <Pressable
                key={item.icon}
                onPress={() =>
                  handleChoose(item.icon, item.text, item.hour, item.price)
                }
                radius={8}
                borderWidth={
                  chooseService.some(equi => equi.icon === item.icon) && 1
                }
                borderColor={
                  chooseService.some(equi => equi.icon === item.icon) &&
                  COLORS.red4
                }
                backgroundColor={
                  chooseService.some(equi => equi.icon === item.icon)
                    ? COLORS.pinkWhite2
                    : COLORS.white
                }
                padding={12}>
                <Block row alignCenter>
                  <Image
                    source={
                      chooseService.some(equi => equi.icon === item.icon)
                        ? {uri: `${URL_API.uploads}/${item.icon_color}`}
                        : {uri: `${URL_API.uploads}/${item.icon}`}
                    }
                    width={25}
                    height={25}
                  />
                  <Text
                    marginLeft={11}
                    fontSize={15}
                    regular
                    color={
                      chooseService.some(equi => equi.icon === item.icon)
                        ? COLORS.red4
                        : COLORS.black2
                    }>
                    {item.text}
                  </Text>
                  <Block absolute right={0}>
                    <Text
                      fontSize={14}
                      regular
                      color={
                        chooseService.some(equi => equi.icon === item.icon)
                          ? COLORS.black2
                          : COLORS.placeholder
                      }>
                      +{'  '} {item.hour} giờ
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
                  onValueChange={() => setStaffFavorite(!staffFavorite)}
                />
              </Block>
            </Block>
          </Block>
          <SANStaffDuties
            top={30}
            task_todo={detailSub?.service?.tasks_todo}
            task_nottodo={detailSub?.service?.tasks_nottodo}
          />
        </Block>
      </ScrollView>
      <ButtonSubmitService
        titleTop={durationSelected?.title}
        titleBottom={detailSub?.service?.title}
        onPress={() =>
          commonRoot.navigate(router.SELECT_DAY_WORKING, {
            addressId: route?.params?.address_id,
            service_id: route?.params?.service_id,
            service_sub_id: route?.params?.service_sub_id,
            duration_id: durationSelected?.item_id,
            duration: durationSelected?.title,
            extra_services: chooseService,
            name_service: detailSub?.service?.title,
            is_favorite_employee: 1,
          })
        }
      />
    </Block>
  );
}
