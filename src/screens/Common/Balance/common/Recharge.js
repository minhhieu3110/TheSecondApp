import actions from '@actions';
import {icon} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Image,
  Pressable,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {formatCurrency} from '@utils';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';

export default function Recharge() {
  const rechargeMoney = [
    {id: 1, title: '100.000', value: 100000},
    {id: 2, title: '200.000', value: 200000},
    {id: 3, title: '300.000', value: 300000},
    {id: 4, title: '400.000', value: 400000},
    {id: 5, title: '500.000', value: 500000},
    {id: 6, title: '600.000', value: 600000},
  ];
  const [chooseMoney, setChooseMoney] = useState();
  const [value, setValue] = useState();
  const handleChooseMoney = (id, value) => {
    setChooseMoney(id);
    setValue(value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_USER_INFO,
    });
  }, [dispatch]);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);

  const recharge = async () => {
    const numericValue = Number(value);
    numericValue < userInfo?.minimum_recharge ||
    numericValue > userInfo?.maximum_recharge
      ? Toast.show({
          type: 'error',
          text1: `Số tiền nạp từ ${formatCurrency(
            userInfo?.minimum_recharge,
          )} đến ${formatCurrency(userInfo?.maximum_recharge)}`,
        })
      : dispatch({
          type: actions.RECHARGE,
          body: {value: numericValue},
          onSuccess: () => {
            commonRoot.navigate(router.INFO_RECHARGE, {
              value: value,
              rechargeInfo: rechargeInfo,
            });
          },
        });
  };
  const rechargeInfo = useSelector(state => state.recharge?.data || []);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Nạp tiền'} canGoBack />
      <Block
        width={width - 24}
        radius={8}
        backgroundColor={COLORS.white}
        marginLeft={12}
        marginTop={15}
        paddingBottom={12}>
        <Text
          fontSize={15}
          semiBold
          color={COLORS.black1}
          marginTop={17}
          marginLeft={17}>
          Số tiền nạp
        </Text>
        <Block marginLeft={12} marginTop={15} wrap row spaceBetween>
          {rechargeMoney.map(item => (
            <Pressable
              onPress={() => handleChooseMoney(item.id, item.value)}
              key={item.id}
              width={118.67}
              radius={5}
              height={45}
              backgroundColor={
                chooseMoney === item.id ? COLORS.red4 : COLORS.pinkWhite2
              }
              marginRight={12.3}
              marginBottom={12}
              alignCenter
              justifyCenter>
              <Text
                fontSize={14}
                medium
                color={chooseMoney === item.id ? COLORS.white : COLORS.black1}>
                {item.title} đ
              </Text>
            </Pressable>
          ))}
        </Block>
        <Text
          fontSize={15}
          semiBold
          color={COLORS.black1}
          marginTop={20}
          marginLeft={20}>
          Nhập số tiền nạp
        </Text>
        <Block
          row
          alignCenter
          width={width - 48}
          height={48}
          marginTop={15}
          marginLeft={12}>
          <TextInput
            placeholder={'Nhập số tiền cần nạp'}
            width={width - 48}
            borderWidth={1}
            radius={5}
            borderColor={'#f1f1f1'}
            paddingLeft={10}
            color={COLORS.red4}
            value={value}
            onChangeText={setValue}
          />
          <Block absolute right={12}>
            <Text fontSize={22} regular color={COLORS.black}>
              đ
            </Text>
          </Block>
        </Block>
      </Block>
      <Block
        width={width - 24}
        backgroundColor={COLORS.white}
        radius={8}
        marginTop={12}
        marginHorizontal={12}
        paddingTop={17}
        paddingBottom={12}>
        <Text fontSize={15} semiBold color={COLORS.black1} marginLeft={20.1}>
          Phương thức nạp tiền
        </Text>
        <Block marginLeft={12} marginTop={18} width={width - 48}>
          <Block row height={23} alignCenter spaceBetween>
            <Block rowCenter>
              <Image
                source={icon.icon_transfer}
                width={25.09}
                height={21.5}
                resizeMode="contain"
              />
              <Text fontSize={15} regular color={COLORS.black1} marginLeft={17}>
                Chuyển khoản
              </Text>
            </Block>

            <Block
              width={23}
              height={23}
              radius={15}
              borderWidth={1}
              borderColor={COLORS.placeholder}
              backgroundColor={COLORS.red4}
              justifyCenter
              alignCenter>
              <Block
                width={11}
                height={11}
                backgroundColor={COLORS.white}
                radius={11}></Block>
            </Block>
          </Block>
        </Block>
      </Block>
      <Button title="Tiếp tục" onPress={recharge} />
    </Block>
  );
}
