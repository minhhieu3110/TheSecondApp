import actions from '@actions';
import {icon} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Text,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
export default function Address({route}) {
  const [service, setService] = useState(null);
  useEffect(() => {
    if (route.params?.service) {
      setService(route.params?.service);
    }
  }, [route.params?.service]);
  const handleService = item_id => {
    service === 'elderly_care' &&
      commonRoot.navigate(router.CARE_ELEDERLY, {
        addressId: item_id,
        service_id: route?.params?.service_id,
      });
    service === 'patient_care' &&
      commonRoot.navigate(router.CARE_SICKER, {
        addressId: item_id,
        service_id: route?.params?.service_id,
      });
    service === 'physical_therapy' &&
      commonRoot.navigate(router.PHYSICAL_THERAPY, {
        addressId: item_id,
        service_id: route?.params?.service_id,
      });
    service === 'house_cleaning' &&
      commonRoot.navigate(router.HOUSEWORK, {
        addressId: item_id,
        service_id: route?.params?.service_id,
      });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_ADDRESS_SAVE,
    });
  }, [dispatch]);
  const addressSaved = useSelector(state => state.getAddressSave?.data || []);
  const deleteAddress = item_id => {
    dispatch({
      type: actions.DELETE_ADDRESS,
      params: {item_id: item_id},
      onSuccess: res => {
        dispatch({
          type: actions.GET_ADDRESS_SAVE,
        });
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
      },
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Chọn địa điểm'} canGoBack />
      <Text
        fontSize={15}
        semiBold
        color={COLORS.black2}
        marginLeft={12}
        marginTop={19}>
        Danh sách địa điểm
      </Text>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <Block
          width={width - 24}
          marginHorizontal={12}
          marginTop={15}
          spaceBetween>
          {addressSaved.map(item => (
            <ScrollView key={item.item_id} horizontal={true}>
              <Pressable
                width={width - 24}
                onPress={() => handleService(item.item_id)}
                borderLeftRadius={8}
                backgroundColor={COLORS.white}
                paddingBottom={18}
                marginBottom={12}>
                <Block
                  marginLeft={10}
                  marginTop={12}
                  height={25}
                  row
                  alignCenter>
                  <Image
                    source={icon.icon_position_address}
                    width={25}
                    height={25}
                  />
                  <Text
                    marginLeft={4}
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}>
                    {item.title}
                  </Text>
                </Block>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  numberOfLines={2}
                  marginLeft={39}
                  marginTop={9}>
                  {item.address_full}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => deleteAddress(item.item_id)}
                justifyCenter
                alignCenter
                backgroundColor={COLORS.red4}
                width={78}
                marginBottom={12}>
                <Icon
                  IconType={AntDesign}
                  iconName={'delete'}
                  iconSize={30}
                  iconColor={COLORS.white}
                />
              </Pressable>
              <Pressable
                onPress={() =>
                  commonRoot.navigate(router.UPDATE_ADDRESS, {
                    item_id: item.item_id,
                  })
                }
                justifyCenter
                alignCenter
                backgroundColor={COLORS.green}
                width={78}
                marginBottom={12}
                borderRightRadius={8}>
                <Icon
                  IconType={Feather}
                  iconName={'edit'}
                  iconSize={30}
                  iconColor={COLORS.white}
                />
              </Pressable>
            </ScrollView>
          ))}
        </Block>
      </ScrollView>
      <Button
        title="Thêm mới"
        onPress={() => commonRoot.navigate(router.ADD_NEW_ADDRESS)}
      />
    </Block>
  );
}
