import actions from '@actions';
import {icon} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Image,
  Pressable,
  ScrollView,
  SelectInput,
  Text,
  TextInput,
  Icon,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {Modal, SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
import {formatCurrency} from 'utils/helper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
    dispatch({type: actions.GET_LIST_BANK, params: {keyword: keyword}});
    dispatch({
      type: actions.GET_BANK_CARD,
    });
  }, [dispatch]);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const listBank = useSelector(state => state.getListBank?.data || []);
  const bankCard = useSelector(state => state.getBankCard?.data || []);
  const cardChoose = bankCard?.find(bank => bank.is_default === 1);
  const [keyword, setKeyword] = useState('');
  const [bankCardSelected, setBankCardSelected] = useState(cardChoose?.item_id);
  const [show, setShow] = useState(false);
  const [bankBranch, setBankBranch] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [bankNumber, setBankNumber] = useState('');
  const [bankId, setBankId] = useState();
  const [bankDefault, setBankDefault] = useState(0);
  const handleSetDefault = () => {
    setBankDefault(!bankDefault);
  };
  const addBank = () => {
    dispatch({
      type: actions.ADD_BANK,
      body: {
        bank_branch: bankBranch,
        bank_account: bankAccount,
        bank_number: bankNumber,
        bank_id: bankId,
        is_default: bankDefault,
      },
      onSuccess: () => {
        setShow(false);
        dispatch({
          type: actions.GET_BANK_CARD,
        });
      },
    });
  };
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
            {bankCard?.map(bank => (
              <Pressable
                onPress={() => setBankCardSelected(bank.item_id)}
                key={bank.item_id}>
                <Block rowCenter spaceBetween>
                  <Block rowCenter>
                    <Block
                      width={30}
                      height={30}
                      radius={30}
                      overflow={'hidden'}>
                      <Image
                        source={{
                          uri: `${URL_API.uploads}/${bank?.bank_name?.picture}`,
                        }}
                        width={30}
                        height={30}
                      />
                    </Block>
                    <Text
                      fontSize={15}
                      regular
                      color={COLORS.black1}
                      marginLeft={10}>
                      {bank?.bank_name?.title_short}
                    </Text>
                  </Block>
                  <Block
                    width={23}
                    height={23}
                    radius={15}
                    borderWidth={1}
                    borderColor={COLORS.placeholder}
                    backgroundColor={
                      bankCardSelected === bank.item_id
                        ? COLORS.red4
                        : COLORS.white
                    }
                    justifyCenter
                    alignCenter>
                    <Block
                      width={11}
                      height={11}
                      backgroundColor={COLORS.white}
                      radius={11}></Block>
                  </Block>
                </Block>
              </Pressable>
            ))}
          </Block>
        </Block>
        <Text
          onPress={() => setShow(true)}
          marginTop={20}
          marginLeft={20}
          fontSize={15}
          semiBold
          color={COLORS.green5}>
          + Thêm tài khoản
        </Text>
      </ScrollView>
      <Button title="Gửi lệnh" />
      <Modal visible={show} transparent={true} animationType="fade">
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.6)',
              flex: 1,
            }}>
            <Block
              width={width - 24}
              marginHorizontal={12}
              backgroundColor={COLORS.white}
              paddingBottom={15}
              radius={8}>
              <Text
                fontSize={15}
                bold
                color={COLORS.red4}
                center
                marginTop={10}>
                Thêm tài khoản
              </Text>
              <Block marginTop={15} marginHorizontal={12} gap={10}>
                <Block>
                  <Text fontSize={15} semiBold color={COLORS.black2}>
                    Nhập chi nhánh ngân hàng
                  </Text>
                  <TextInput
                    height={41}
                    radius={5}
                    borderWidth={0.5}
                    borderColor={COLORS.gray11}
                    paddingLeft={12}
                    color={COLORS.placeholder}
                    fontSize={14}
                    regular
                    marginTop={15}
                    placeholder={'Nhập chi nhánh '}
                    placeholderTextColor={COLORS.placeholder}
                    value={bankBranch}
                    onChangeText={setBankBranch}
                  />
                </Block>
                <Block>
                  <Text fontSize={15} semiBold color={COLORS.black2}>
                    Nhập tên tài khoản
                  </Text>
                  <TextInput
                    height={41}
                    radius={5}
                    borderWidth={0.5}
                    borderColor={COLORS.gray11}
                    paddingLeft={12}
                    color={COLORS.placeholder}
                    fontSize={14}
                    regular
                    marginTop={15}
                    placeholder={'Nhập tên tài khoản '}
                    placeholderTextColor={COLORS.placeholder}
                    value={bankAccount}
                    onChangeText={setBankAccount}
                  />
                </Block>
                <Block>
                  <Text fontSize={15} semiBold color={COLORS.black2}>
                    Nhập số tài khoản
                  </Text>
                  <TextInput
                    height={41}
                    radius={5}
                    borderWidth={0.5}
                    borderColor={COLORS.gray11}
                    paddingLeft={12}
                    color={COLORS.placeholder}
                    fontSize={14}
                    regular
                    marginTop={15}
                    placeholder={'Nhập số tài khoản '}
                    placeholderTextColor={COLORS.placeholder}
                    value={bankNumber}
                    onChangeText={setBankNumber}
                  />
                </Block>
                <Block>
                  <Text fontSize={15} semiBold color={COLORS.black2}>
                    Nhập tên ngân hàng
                  </Text>
                  <SelectInput
                    top={15}
                    data={listBank}
                    width={width - 48}
                    height={41}
                    labelField="title_short"
                    valueField="item_id"
                    placeholder={'Nhập tên ngân hàng'}
                    // keyword={setKeyword}
                    onChange={item => {
                      setBankId(item.item_id);
                      // dispatch({
                      //   type: actions.GET_LIST_BANK,
                      //   params: {keyword: keyword},
                      // });
                    }}
                  />
                  {/* <TextInput
                    height={41}
                    radius={5}
                    borderWidth={0.5}
                    borderColor={COLORS.gray11}
                    paddingLeft={12}
                    color={COLORS.placeholder}
                    fontSize={14}
                    regular
                    marginTop={15}
                    placeholder={'Nhập tên ngân hàng '}
                    placeholderTextColor={COLORS.placeholder}
                    value={keyword}
                    onChangeText={keyword => {
                      setKeyword(keyword);
                      dispatch({
                        type: actions.GET_LIST_BANK,
                        params: {keyword: keyword},
                      });
                    }}
                  /> */}
                </Block>
                <Block
                  width={width - 291}
                  height={19}
                  marginTop={18}
                  row
                  alignCenter>
                  <Pressable onPress={handleSetDefault}>
                    <Icon
                      IconType={bankDefault ? AntDesign : Ionicons}
                      iconName={bankDefault ? 'checksquare' : 'square-outline'}
                      iconSize={19}
                      iconColor={bankDefault ? COLORS.red4 : COLORS.gay12}
                    />
                  </Pressable>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.black3}
                    marginLeft={10}>
                    Cài làm mặc định
                  </Text>
                </Block>
              </Block>
              <Block marginTop={15} marginHorizontal={12} row gap={10}>
                <Pressable
                  onPress={() => setShow(false)}
                  width={(width - 58) / 2}
                  height={48}
                  backgroundColor={COLORS.white}
                  borderWidth={1}
                  borderColor={COLORS.red4}
                  radius={8}
                  justifyCenter
                  alignCenter>
                  <Text fontSize={15} semiBold color={COLORS.red4}>
                    Huỷ
                  </Text>
                </Pressable>
                <Pressable
                  onPress={addBank}
                  width={(width - 58) / 2}
                  height={48}
                  backgroundColor={COLORS.red4}
                  borderWidth={1}
                  borderColor={COLORS.red4}
                  radius={8}
                  justifyCenter
                  alignCenter>
                  <Text fontSize={15} semiBold color={COLORS.white}>
                    Thêm tài khoản
                  </Text>
                </Pressable>
              </Block>
            </Block>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </Block>
  );
}
