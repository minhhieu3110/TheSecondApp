import actions from '@actions';
import {icon} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Icon,
  Image,
  Loading,
  Pressable,
  ScrollView,
  StatusBar,
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
import {Modal, TouchableOpacity} from 'react-native';
export default function Address({route}) {
  const [service, setService] = useState(null);
  const [deletePopup, setShowDeletePopup] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
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
  const {isLoading} = useSelector(state => state.getAddressSave);
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
  const confirmDelete = item_id => {
    setDeleteItemId(item_id);
    setShowDeletePopup(true);
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <HeaderTitle title={'Chọn địa điểm'} canGoBack />
      <Text
        fontSize={15}
        semiBold
        color={COLORS.black2}
        marginLeft={12}
        marginTop={19}>
        Danh sách địa điểm
      </Text>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
          <Block
            width={width - 24}
            marginHorizontal={12}
            marginTop={15}
            gap={12}>
            {addressSaved.map(item => (
              <Block
                key={item.item_id}
                row
                radius={8}
                overflow={'hidden'}
                backgroundColor={COLORS.white}
                spaceBetween>
                <Pressable
                  width={'85%'}
                  onPress={() => handleService(item.item_id)}
                  paddingBottom={18}>
                  <Block marginLeft={10} marginTop={12} rowCenter spaceBetween>
                    <Block rowCenter gap={4}>
                      <Image
                        source={icon.icon_position_address}
                        width={25}
                        height={25}
                      />
                      <Text fontSize={14} regular color={COLORS.placeholder}>
                        {item.title}
                      </Text>
                    </Block>
                    {item.is_default === 1 && (
                      <Block
                        paddingVertical={5}
                        paddingHorizontal={10}
                        borderWidth={1}
                        radius={15}
                        borderColor={COLORS.red4}>
                        <Text fontSize={10} regular color={COLORS.red4}>
                          Mặc định
                        </Text>
                      </Block>
                    )}
                  </Block>
                  <Text
                    width={'86%'}
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    numberOfLines={2}
                    marginLeft={39}
                    marginTop={9}>
                    {item.address_full}
                  </Text>
                </Pressable>
                <Block
                  width={'10%'}
                  marginRight={10}
                  spaceBetween
                  paddingVertical={10}>
                  <Pressable
                    onPress={() => confirmDelete(item.item_id)}
                    justifyCenter
                    alignCenter
                    width={'100%'}
                    radius={5}
                    backgroundColor={COLORS.placeholderOpacity}
                    height={40}>
                    <Icon
                      IconType={AntDesign}
                      iconName={'delete'}
                      iconSize={24}
                      iconColor={COLORS.red4}
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
                    backgroundColor={COLORS.placeholderOpacity}
                    radius={5}
                    width={'100%'}
                    height={40}>
                    <Icon
                      IconType={Feather}
                      iconName={'edit'}
                      iconSize={24}
                      iconColor={COLORS.green4}
                    />
                  </Pressable>
                </Block>
              </Block>
            ))}
          </Block>
        </ScrollView>
      )}
      <Button
        title="Thêm mới"
        onPress={() => commonRoot.navigate(router.ADD_NEW_ADDRESS)}
      />
      <Modal visible={deletePopup} transparent={true} animationType="fade">
        <TouchableOpacity
          activeOpacity={1}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
            flex: 1,
          }}>
          <Block
            marginHorizontal={12}
            paddingBottom={12}
            radius={5}
            backgroundColor={COLORS.white}
            width={width - 24}>
            <Text
              fontSize={12}
              semiBold
              color={COLORS.red4}
              center
              marginTop={10}>
              Xác nhận xoá địa chỉ
            </Text>
            <Text
              fontSize={12}
              regular
              color={COLORS.black2}
              center
              marginTop={10}>
              Bạn có chắc chắn xoá địa chỉ này không?
            </Text>
            <Block marginHorizontal={12} marginTop={12} row spaceBetween>
              <Pressable
                onPress={() => {
                  deleteAddress(deleteItemId);
                  setShowDeletePopup(false);
                }}
                height={45}
                width={'48%'}
                borderWidth={1}
                borderColor={COLORS.red4}
                radius={8}
                justifyCenter
                alignCenter>
                <Text fontSize={12} regular color={COLORS.red4}>
                  Đồng ý
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setShowDeletePopup(false)}
                height={45}
                width={'48%'}
                backgroundColor={COLORS.red4}
                radius={8}
                justifyCenter
                alignCenter>
                <Text fontSize={12} regular color={COLORS.white}>
                  Bỏ qua
                </Text>
              </Pressable>
            </Block>
          </Block>
        </TouchableOpacity>
      </Modal>
    </Block>
  );
}
