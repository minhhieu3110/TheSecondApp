import {icon} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Icon,
  Image,
  SelectInput,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, root} from 'navigation/navigationRef';
import {useForm} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import {Pressable} from 'react-native';
export default function AddNewAddress() {
  const {control} = useForm();
  const [defaultAddress, setDefaultAddress] = useState(0);
  const handleSetDefault = () => {
    setDefaultAddress(!defaultAddress);
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
          color={COLORS.black1}>
          Lâm Minh Hoàng
        </TextInput>
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
          color={COLORS.black1}>
          0909 123 456
        </TextInput>
        <Text fontSize={15} semiBold color={COLORS.black1} marginTop={20}>
          Thông tin địa chỉ
        </Text>
        <Block marginTop={15} wrap row>
          <Block width={width - 24} marginBottom={12}>
            <SelectInput
              placeholder="Tỉnh thành"
              control={control}
              name={'abc'}
            />
          </Block>
          <Block
            width={(width - 24) / 2 - 5}
            marginBottom={12}
            marginRight={10}>
            <SelectInput
              placeholder="Quận/Huyện"
              control={control}
              name={'abc'}
            />
          </Block>
          <Block width={(width - 24) / 2 - 5} marginBottom={12}>
            <SelectInput
              placeholder="Phường/Xã"
              control={control}
              name={'abc'}
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
          />
        </Block>
        <Text fontSize={15} semiBold color={COLORS.black3} marginTop={20}>
          Phân loại
        </Text>
        <Block width={width - 114} row marginTop={19}>
          <Block
            paddingHorizontal={15}
            paddingVertical={5}
            backgroundColor={COLORS.white}
            marginRight={12}
            radius={5}>
            <Text fontSize={14} regular color={COLORS.black3}>
              Nhà/Nhà phố
            </Text>
          </Block>
          <Block
            paddingHorizontal={15}
            paddingVertical={5}
            backgroundColor={COLORS.white}
            marginRight={12}
            radius={5}>
            <Text fontSize={14} regular color={COLORS.black3}>
              Căn hộ
            </Text>
          </Block>
          <Block
            paddingHorizontal={15}
            paddingVertical={5}
            backgroundColor={COLORS.white}
            radius={5}>
            <Text fontSize={14} regular color={COLORS.black3}>
              Biệt thự
            </Text>
          </Block>
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
      <Button title="Lưu" onPress={() => root.goBack()} />
    </Block>
  );
}
