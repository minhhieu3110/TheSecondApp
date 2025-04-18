import {icon} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Icon,
  Image,
  SelectDropdown,
  SelectInput,
  Text,
  TextInput,
  Pressable,
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
      onSuccess: () => {
        root.goBack();
      },
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Thêm mới địa chỉ'} canGoBack />
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
        <Block marginTop={15} wrap row>
          <Block width={width - 24} marginBottom={12}>
            <SelectDropdown
              data={province}
              placeholder={'Tỉnh/Thành phố'}
              search={true}
              onSelect={selectedProvince => {
                setProvinceCode(selectedProvince.code);
                setDistrictCode(null);
                setWardCode(null);
                dispatch({
                  type: actions.GET_DISTRICT,
                  params: {province_code: selectedProvince.code},
                });
              }}
              buttonTextAfterSelection={selectedProvince =>
                selectedProvince.name
              }
              rowTextForSelection={item => item.name}
            />
          </Block>
          <Block
            width={(width - 24) / 2 - 5}
            marginBottom={12}
            marginRight={10}>
            <SelectDropdown
              data={district}
              placeholder={'Quận/Huyện'}
              onSelect={selectedDistrict => {
                setDistrictCode(selectedDistrict.code);
                setWardCode(null);
                dispatch({
                  type: actions.GET_WARD,
                  params: {district_code: selectedDistrict.code},
                });
              }}
              buttonTextAfterSelection={selectedDistrict =>
                selectedDistrict.name
              }
              rowTextForSelection={item => item.name}
            />
          </Block>
          <Block width={(width - 24) / 2 - 5} marginBottom={12}>
            <SelectDropdown
              data={ward}
              placeholder={'Phường/Xã'}
              onSelect={selectedWard => {
                setWardCode(selectedWard.code);
              }}
              buttonTextAfterSelection={selectedWard => selectedWard.name}
              rowTextForSelection={item => item.name}
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
            marginBottom={12}
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
      <Button title="Lưu" onPress={saveAddress} />
    </Block>
  );
}
