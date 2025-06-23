import {icon} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Icon,
  Image,
  SelectDropdown,
  Text,
  TextInput,
  Pressable,
  SelectInput,
  StatusBar,
  FormInput,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot, root} from 'navigation/navigationRef';
import {set, useForm} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {use, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import {Picker} from '@react-native-picker/picker';
import SelectDrop from '@components/form/SelectDropdown';
import Toast from 'react-native-toast-message';
export default function AddNewAddress() {
  const dispatch = useDispatch();
  const [defaultAddress, setDefaultAddress] = useState(0);
  const handleSetDefault = () => {
    setDefaultAddress(!defaultAddress);
  };
  const [provinceCode, setProvinceCode] = useState();
  const [districtCode, setDistrictCode] = useState();
  const [wardCode, setWardCode] = useState();
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const types = [
    {id: 1, title: 'Nhà/Nhà phố'},
    {id: 2, title: 'Căn hộ'},
    {id: 3, title: 'Biệt thự'},
  ];

  useEffect(() => {
    dispatch({
      type: actions.GET_PROVINCE,
    });
    dispatch({
      type: actions.GET_USER_INFO,
    });
  }, [dispatch]);

  const province = useSelector(state => state.getProvince?.data || []);
  const district = useSelector(state => state.getDistrict?.data || []);
  const ward = useSelector(state => state.getWard?.data || []);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const saveAddress = () => {
    dispatch({
      type: actions.ADD_ADDRESS_BOOK,
      body: {
        full_name: userInfo?.full_name,
        phone: userInfo?.phone,
        province: provinceCode,
        district: districtCode,
        ward: wardCode,
        address: address,
        title: title,
        type: type,
        is_default: defaultAddress,
      },
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
        root.goBack();
        dispatch({type: actions.GET_ADDRESS_SAVE});
      },
      onFail: error => {
        Toast.show({
          type: 'error',
          text1: error,
        });
      },
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <HeaderTitle title={'Thêm mới địa chỉ'} canGoBack />

      <Block width={width - 24} marginHorizontal={12} marginTop={18}>
        <Text fontSize={15} semiBold color={COLORS.black3}>
          Thông tin cá nhân
        </Text>
        <TextInput
          height={41}
          radius={5}
          backgroundColor={COLORS.white}
          borderWidth={0.5}
          marginTop={15}
          borderColor={COLORS.gray11}
          paddingLeft={12}
          fontSize={14}
          regular
          color={COLORS.black1}
          value={userInfo?.full_name}
        />
        <TextInput
          height={41}
          radius={5}
          backgroundColor={COLORS.white}
          borderWidth={0.5}
          marginTop={12}
          borderColor={COLORS.gray11}
          paddingLeft={12}
          fontSize={14}
          regular
          color={COLORS.black1}
          value={userInfo?.phone}
        />
        <Text fontSize={15} semiBold color={COLORS.black1} marginTop={20}>
          Thông tin địa chỉ
        </Text>
        <Block marginTop={15}>
          <Block row wrap columnGap={12} rowGap={12}>
            <SelectInput
              data={province}
              width={width - 24}
              height={41}
              placeholder={'Tỉnh/Thành Phố'}
              onChange={item => {
                setProvinceCode(item.code);
                setDistrictCode(null);
                setWardCode(null);
                dispatch({
                  type: actions.GET_DISTRICT,
                  params: {province_code: item.code},
                });
              }}
            />
            <SelectInput
              data={district}
              width={(width - 36) / 2}
              height={41}
              placeholder={'Quận/Huyện'}
              onChange={item => {
                setDistrictCode(item.code);
                setWardCode(null);
                dispatch({
                  type: actions.GET_WARD,
                  params: {district_code: item.code},
                });
              }}
            />
            <SelectInput
              data={ward}
              width={(width - 36) / 2}
              height={41}
              placeholder={'Phường/Xã'}
              onChange={item => {
                setWardCode(item.code);
              }}
            />
          </Block>

          <FormInput
            marginTop={12}
            placeholder={'Số nhà, tên đường, toà nhà....'}
            value={address}
            onChangeText={setAddress}
            backgroundColor={COLORS.white}
            color={COLORS.black2}
          />
          <FormInput
            placeholder={'Tên gọi địa chỉ'}
            value={title}
            onChangeText={setTitle}
            backgroundColor={COLORS.white}
            color={COLORS.black2}
          />
        </Block>
        <Text fontSize={15} semiBold color={COLORS.black3} marginTop={20}>
          Phân loại
        </Text>
        <Block row marginTop={19} gap={12}>
          {types.map(item => (
            <Pressable
              onPress={() => setType(item.title)}
              key={item.id}
              paddingHorizontal={15}
              paddingVertical={5}
              borderWidth={type === item.title && 1}
              borderColor={type === item.title && COLORS.red4}
              backgroundColor={
                type === item.title ? COLORS.pinkWhite2 : COLORS.white
              }
              radius={5}>
              <Text
                fontSize={14}
                regular
                color={type === item.title ? COLORS.red4 : COLORS.black3}>
                {item.title}
              </Text>
            </Pressable>
          ))}
        </Block>
        <Pressable
          onPress={handleSetDefault}
          height={19}
          marginTop={18}
          rowCenter
          alignCenter>
          {defaultAddress ? (
            <Icon
              IconType={AntDesign}
              iconName={'checksquare'}
              iconSize={19}
              iconColor={COLORS.red4}
            />
          ) : (
            <Block
              borderWidth={1}
              radius={3}
              borderColor={COLORS.gay12}
              backgroundColor={COLORS.white}
              width={19}
              height={19}></Block>
          )}

          <Text fontSize={14} regular color={COLORS.black3} paddingLeft={10}>
            Cài làm mặc định
          </Text>
        </Pressable>
      </Block>
      <Button title="Lưu" onPress={saveAddress} />
    </Block>
  );
}
