import actions from '@actions';
import {icon} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {formatCurrency} from 'utils/helper';

export default function Withdraw() {
  const rechargeMoney = [
    {id: 1, money: '100.000'},
    {id: 2, money: '200.000'},
    {id: 3, money: '300.000'},
    {id: 4, money: '400.000'},
    {id: 5, money: '500.000'},
    {id: 6, money: '600.000'},
  ];
  const [chooseMoney, setChooseMoney] = useState(null);
  const [money, setMoney] = useState(null);
  const handleChooseMoney = (id, money) => {
    setChooseMoney(id);
    setMoney(money);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_USER_INFO});
    dispatch({type: actions.GET_LIST_BANK});
  }, [dispatch]);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const listBank = useSelector(state => state.getListBank?.data || []);
  const [bankSelected, setBankSelected] = useState();

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Rút tiền'} canGoBack />
      <ScrollView contentContainerStyle={{paddingBottom: 150}}>
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
            Số dư khả dụng
          </Text>
          <Block
            marginLeft={12}
            marginTop={15}
            justifyCenter
            alignCenter
            width={width - 48}
            height={60}
            radius={5}
            backgroundColor={COLORS.pinkWhite2}>
            <Text fontSize={22} semiBold color={COLORS.red4}>
              {formatCurrency(userInfo?.wcoin)}
            </Text>
          </Block>
          <Text
            fontSize={15}
            semiBold
            color={COLORS.black1}
            marginTop={20}
            marginLeft={20}>
            Nhập số tiền rút
          </Text>
          <Block
            row
            alignCenter
            width={width - 48}
            height={48}
            marginTop={15}
            marginLeft={12}>
            <TextInput
              placeholder={'Nhập số tiền cần rút'}
              width={width - 48}
              borderWidth={1}
              radius={5}
              borderColor={'#f1f1f1'}
              paddingLeft={10}
              color={COLORS.red4}
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
            Tài khoản nhận tiền
          </Text>
          <Block marginLeft={12} marginTop={18} width={width - 48} gap={12}>
            {listBank?.map(bank => (
              <Pressable
                onPress={() => setBankSelected(bank.item_id)}
                rowCenter
                spaceBetween
                key={bank.item_id}>
                <Block rowCenter>
                  <Image
                    source={icon.icon_NH_BIDV}
                    width={30}
                    height={30}
                    resizeMode="contain"
                  />
                  <Text
                    fontSize={15}
                    regular
                    color={COLORS.black1}
                    marginLeft={10}>
                    {bank?.title_short}
                  </Text>
                </Block>
                <Block
                  width={23}
                  height={23}
                  radius={15}
                  borderWidth={1}
                  borderColor={COLORS.placeholder}
                  backgroundColor={
                    bankSelected === bank.item_id ? COLORS.red4 : COLORS.white
                  }
                  justifyCenter
                  alignCenter>
                  <Block
                    width={11}
                    height={11}
                    backgroundColor={COLORS.white}
                    radius={11}></Block>
                </Block>
              </Pressable>
            ))}
          </Block>
        </Block>
        <Text
          marginTop={20}
          marginLeft={20}
          fontSize={15}
          semiBold
          color={COLORS.green5}>
          + Thêm tài khoản
        </Text>
      </ScrollView>
      <Button title="Gửi lệnh" />
    </Block>
  );
}
