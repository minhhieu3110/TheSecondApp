import {icon} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Icon,
  Image,
  Text,
  TextInput,
  Pressable,
  SelectInput,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {root} from 'navigation/navigationRef';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
export default function UpdateAddress({route}) {
  const addressSaved = useSelector(state => state.getAddressSave?.data || []);
  const updateAdd = addressSaved?.find(
    item => item.item_id === route?.params?.item_id,
  );

  const dispatch = useDispatch();
  const [fullName, setFullName] = useState(updateAdd?.full_name);
  const [phone, setPhone] = useState(updateAdd?.phone);
  const [provinceCode, setProvinceCode] = useState();
  const [districtCode, setDistrictCode] = useState();
  const [wardCode, setWardCode] = useState();
  const [address, setAddress] = useState(updateAdd?.address);
  const [title, setTitle] = useState(updateAdd?.title);
  const [type, setType] = useState(updateAdd?.type);
  const types = [
    {id: 1, title: 'Nhà/Nhà phố'},
    {id: 2, title: 'Căn hộ'},
    {id: 3, title: 'Biệt thự'},
  ];
  const [defaultAddress, setDefaultAddress] = useState(updateAdd?.is_default);
  const handleSetDefault = () => {
    setDefaultAddress(!defaultAddress);
  };
  useEffect(() => {
    dispatch({
      type: actions.GET_PROVINCE,
    });
  }, [dispatch]);

  const province = useSelector(state => state.getProvince?.data || []);
  const district = useSelector(state => state.getDistrict?.data || []);
  const ward = useSelector(state => state.getWard?.data || []);

  const updateAddress = () => {
    dispatch({
      type: actions.UPDATE_ADDRESS,
      body: {
        full_name: fullName,
        phone: phone,
        province: provinceCode,
        district: districtCode,
        ward: wardCode,
        address: address,
        title: title,
        type: type,
        is_default: defaultAddress,
        item_id: route?.params?.item_id,
      },
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
        root.goBack();
        dispatch({type: actions.GET_ADDRESS_SAVE});
      },
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Cập nhật địa chỉ'} canGoBack />
      <Block row absolute top={15} right={8} alignCenter height={25}>
        <Text fontSize={14} regular color={COLORS.red4}>
          Bản đồ
        </Text>
        <Image
          source={icon.icon_position_address}
          width={25}
          height={25}
          marginLeft={15}
        />
      </Block>
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
          value={fullName}
          onChangeText={setFullName}
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
          value={phone}
          onChangeText={setPhone}
        />
        <Text fontSize={15} semiBold color={COLORS.black1} marginTop={20}>
          Thông tin địa chỉ
        </Text>
        <Block marginTop={15}>
          <Block wrap row gap={12}>
            <SelectInput
              data={province}
              width={width - 24}
              height={41}
              placeholder={'Tỉnh/Thành Phố'}
              value={updateAdd?.province}
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
              value={updateAdd?.district}
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
              value={updateAdd?.ward}
              onChange={item => {
                setWardCode(item.code);
              }}
            />
          </Block>

          <TextInput
            width={width - 24}
            placeholder={'Số nhà, tên đường, toà nhà...'}
            placeholderTextColor={COLORS.gay12}
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
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            width={width - 24}
            placeholder={'Tên gọi địa chỉ'}
            placeholderTextColor={COLORS.gay12}
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
            value={title}
            onChangeText={setTitle}
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
        <Block width={width - 291} height={19} marginTop={18} row alignCenter>
          <Pressable onPress={handleSetDefault}>
            <Icon
              IconType={defaultAddress ? AntDesign : Ionicons}
              iconName={defaultAddress ? 'checksquare' : 'square-outline'}
              iconSize={19}
              iconColor={defaultAddress ? COLORS.red4 : COLORS.gay12}
            />
          </Pressable>
          <Text fontSize={14} regular color={COLORS.black3} marginLeft={10}>
            Cài làm mặc định
          </Text>
        </Block>
      </Block>
      <Button title="Cập nhập" onPress={updateAddress} />
    </Block>
  );
}
