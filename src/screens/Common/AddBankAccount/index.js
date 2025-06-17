import {
  Block,
  HeaderTitle,
  Icon,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useEffect, useState} from 'react';
import {Modal, SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import actions from '@actions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
export default function AddBankAccount({route}) {
  const dispatch = useDispatch();
  const bankCard = useSelector(state => state.getBankCard?.data || []);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showListBank, setShowListBank] = useState(false);
  const [keyword, setKeyword] = useState('');
  useEffect(() => {
    dispatch({
      type: actions.GET_LIST_BANK,
      params: {keyword: keyword},
    });
  }, [dispatch, keyword]);
  const listBank = useSelector(state => state.getListBank?.data || []);
  const [bankId, setBankId] = useState();
  const bankSelect = listBank.find(item => item.item_id === bankId);
  const [bankBranch, setBankBranch] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [bankNumber, setBankNumber] = useState('');
  const [bankDefault, setBankDefault] = useState(0);
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
        setBankAccount('');
        setBankBranch('');
        setBankNumber('');
        setBankId();
        setBankDefault();
        setShow(false);
        dispatch({
          type: actions.GET_BANK_CARD,
        });
      },
    });
  };
  const deleteBank = item_id => {
    dispatch({
      type: actions.DELETE_BANK,
      params: {item_id: item_id},
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
        dispatch({
          type: actions.GET_BANK_CARD,
        });
      },
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <HeaderTitle title={'Thêm tài khoản'} canGoBack />
      <ScrollView>
        <Block
          marginTop={10}
          width={width - 24}
          marginHorizontal={12}
          paddingBottom={15}
          radius={8}
          backgroundColor={COLORS.white}>
          <Text
            fontSize={15}
            semiBold
            color={COLORS.black2}
            marginTop={10}
            marginLeft={12}>
            Tài khoản liên kết
          </Text>
          <Block marginTop={10} marginHorizontal={12} gap={15}>
            {bankCard?.map((bank, index) => (
              <Block key={bank?.item_id}>
                <ScrollView horizontal={true}>
                  <Block
                    width={width - 48}
                    rowCenter
                    paddingBottom={12}
                    borderColor={COLORS.black2}
                    borderLeftRadius={8}
                    alignCenter
                    backgroundColor={COLORS.white}
                    flex={1}>
                    <Block
                      width={40}
                      height={40}
                      radius={40}
                      overflow={'hidden'}>
                      <Image
                        source={{
                          uri: `${URL_API.uploads}/${bank?.bank_name?.picture}`,
                        }}
                        width={40}
                        height={40}
                      />
                    </Block>
                    <Block marginLeft={20} gap={10}>
                      <Text
                        fontSize={13}
                        semiBold
                        color={COLORS.black2}
                        width={width - 108}
                        numberOfLines={2}>
                        {bank?.bank_name?.title}
                      </Text>
                      <Text fontSize={12} regular color={COLORS.black1}>
                        {bank?.bank_number}
                      </Text>
                    </Block>
                  </Block>
                  <Pressable
                    onPress={() => deleteBank(bank?.item_id)}
                    backgroundColor={COLORS.red4}
                    width={50}
                    justifyCenter
                    borderRightRadius={8}
                    alignCenter>
                    <Icon
                      IconType={AntDesign}
                      iconName={'delete'}
                      iconColor={COLORS.white}
                      iconSize={25}
                    />
                  </Pressable>
                  {/* <Pressable
                    onPress={() => {
                      setShowEdit(!showEdit);
                      setItemBankEdit(bank?.item_id);
                    }}
                    backgroundColor={COLORS.green4}
                    width={50}
                    borderRightRadius={8}
                    justifyCenter
                    alignCenter>
                    <Icon
                      IconType={AntDesign}
                      iconName={'edit'}
                      iconColor={COLORS.white}
                      iconSize={25}
                    />
                  </Pressable> */}
                </ScrollView>
                {index < bankCard.length - 1 && (
                  <Block
                    marginTop={2}
                    width={width - 48}
                    borderWidth={0.5}
                    borderColor={COLORS.gray12}></Block>
                )}
              </Block>
            ))}
          </Block>
        </Block>
        <Pressable
          onPress={() => setShow(!show)}
          marginTop={10}
          rowCenter
          marginHorizontal={12}
          backgroundColor={COLORS.white}
          radius={8}
          alignCenter
          height={50}>
          <Icon
            IconType={AntDesign}
            iconName={'creditcard'}
            iconSize={30}
            marginLeft={12}
          />
          <Text fontSize={15} semiBold color={COLORS.red4} marginLeft={15}>
            Thêm tài khoản liên kết
          </Text>
        </Pressable>
      </ScrollView>
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
              marginHorizontal={12}
              width={width - 24}
              paddingBottom={15}
              backgroundColor={COLORS.white}
              radius={8}>
              <Block marginTop={10}>
                <Text fontSize={13} semiBold center color={COLORS.black2}>
                  Thêm tài khoản liên kết
                </Text>
                <Pressable
                  onPress={() => {
                    setShow(!show);
                  }}
                  absolute
                  right={10}>
                  <Icon
                    IconType={FontAwesome}
                    iconName={'times-rectangle'}
                    iconSize={20}
                    iconColor={COLORS.red4}
                  />
                </Pressable>
              </Block>
              <Block marginTop={15} marginHorizontal={12} gap={12}>
                <TextInput
                  height={41}
                  borderWidth={0.5}
                  borderColor={COLORS.lightGray1}
                  radius={8}
                  placeholder={
                    bankSelect ? bankSelect?.title_short : 'Nhập tên ngân hàng'
                  }
                  placeholderTextColor={COLORS.placeholder}
                  fontSize={13}
                  regular
                  color={COLORS.placeholder}
                  paddingLeft={16}
                  value={bankSelect?.title_short || keyword}
                  onChangeText={e => {
                    setKeyword(e);
                    setShowListBank(true);
                    setBankId();
                    dispatch({
                      type: actions.GET_LIST_BANK,
                      params: {keyword: keyword},
                      onSuccess: () => {
                        dispatch({
                          type: actions.GET_LIST_BANK,
                        });
                        setKeyword('');
                      },
                    });
                  }}
                  onPress={() => setShowListBank(true)}
                />
                {showListBank && (
                  <Block
                    absolute
                    top={45}
                    zIndex={10}
                    radius={8}
                    backgroundColor={COLORS.white}
                    width={width - 48}
                    gap={10}>
                    {listBank?.map(bank => (
                      <Pressable
                        onPress={() => {
                          setBankId(bank?.item_id);
                          setShowListBank(false);
                        }}
                        rowCenter
                        spaceBetween
                        key={bank?.item_id}
                        height={30}
                        borderWidth={0.2}
                        radius={5}>
                        <Text
                          marginLeft={12}
                          fontSize={14}
                          semiBold
                          color={COLORS.black2}>
                          {bank?.title}
                        </Text>
                        <Block
                          width={20}
                          height={20}
                          radius={20}
                          borderWidth={0.5}
                          borderColor={COLORS.placeholder}
                          marginRight={5}
                          justifyCenter
                          alignCenter>
                          {bankId === bank?.item_id && (
                            <Block
                              width={12}
                              height={12}
                              radius={12}
                              backgroundColor={COLORS.red4}></Block>
                          )}
                        </Block>
                      </Pressable>
                    ))}
                  </Block>
                )}
                <TextInput
                  height={41}
                  borderWidth={0.5}
                  borderColor={COLORS.lightGray1}
                  radius={8}
                  placeholder={'Nhập số tài khoản'}
                  placeholderTextColor={COLORS.placeholder}
                  fontSize={13}
                  regular
                  color={COLORS.placeholder}
                  paddingLeft={16}
                  value={bankNumber}
                  onChangeText={setBankNumber}
                />
                <TextInput
                  height={41}
                  borderWidth={0.5}
                  borderColor={COLORS.lightGray1}
                  radius={8}
                  placeholder={'Nhập tên chủ tài khoản'}
                  placeholderTextColor={COLORS.placeholder}
                  fontSize={13}
                  regular
                  color={COLORS.placeholder}
                  paddingLeft={16}
                  value={bankAccount}
                  onChangeText={setBankAccount}
                />
                <TextInput
                  height={41}
                  borderWidth={0.5}
                  borderColor={COLORS.lightGray1}
                  radius={8}
                  placeholder={'Nhập chi nhánh ngân hàng'}
                  placeholderTextColor={COLORS.placeholder}
                  fontSize={13}
                  regular
                  color={COLORS.placeholder}
                  paddingLeft={16}
                  value={bankBranch}
                  onChangeText={setBankBranch}
                />
                <Block
                  width={width - 291}
                  height={19}
                  marginTop={18}
                  row
                  alignCenter>
                  <Pressable onPress={() => setBankDefault(!bankDefault)}>
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
              <Pressable
                onPress={addBank}
                marginTop={20}
                height={40}
                width={width - 48}
                marginHorizontal={12}
                backgroundColor={COLORS.red4}
                radius={8}
                justifyCenter
                alignCenter>
                <Text fontSize={14} semiBold color={COLORS.white}>
                  Thêm tài khoản
                </Text>
              </Pressable>
            </Block>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
      {/* <Modal visible={showEdit} transparent={true} animationType="fade">
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
              marginHorizontal={12}
              width={width - 24}
              paddingBottom={15}
              backgroundColor={COLORS.white}
              radius={8}>
              <Block marginTop={10}>
                <Text fontSize={13} semiBold center color={COLORS.black2}>
                  Sửa tài khoản liên kết
                </Text>
                <Pressable
                  onPress={() => {
                    setShowEdit(!showEdit);
                  }}
                  absolute
                  right={10}>
                  <Icon
                    IconType={FontAwesome}
                    iconName={'times-rectangle'}
                    iconSize={20}
                    iconColor={COLORS.red4}
                  />
                </Pressable>
              </Block>
              <Block marginTop={15} marginHorizontal={12} gap={12}>
                <TextInput
                  height={41}
                  borderWidth={0.5}
                  borderColor={COLORS.lightGray1}
                  radius={8}
                  placeholder={
                    bankSelect ? bankSelect?.title_short : 'Nhập tên ngân hàng'
                  }
                  placeholderTextColor={COLORS.placeholder}
                  fontSize={13}
                  regular
                  color={COLORS.placeholder}
                  paddingLeft={16}
                  value={bankEdit?.bank_name?.title_short || keyword}
                  onChangeText={e => {
                    setKeyword(e);
                    setShowListBank(true);
                    setBankId();
                    dispatch({
                      type: actions.GET_LIST_BANK,
                      params: {keyword: keyword},
                      onSuccess: () => {
                        dispatch({
                          type: actions.GET_LIST_BANK,
                        });
                        setKeyword('');
                      },
                    });
                  }}
                  onPress={() => setShowListBank(true)}
                />
                {showListBank && (
                  <Block
                    absolute
                    top={45}
                    zIndex={10}
                    radius={8}
                    backgroundColor={COLORS.white}
                    width={width - 48}
                    gap={10}>
                    {listBank?.map(bank => (
                      <Pressable
                        onPress={() => {
                          setBankId(bank?.item_id);
                          setShowListBank(false);
                        }}
                        rowCenter
                        spaceBetween
                        key={bank?.item_id}
                        height={30}
                        borderWidth={0.2}
                        radius={5}>
                        <Text
                          marginLeft={12}
                          fontSize={14}
                          semiBold
                          color={COLORS.black2}>
                          {bank?.title}
                        </Text>
                        <Block
                          width={20}
                          height={20}
                          radius={20}
                          borderWidth={0.5}
                          borderColor={COLORS.placeholder}
                          marginRight={5}
                          justifyCenter
                          alignCenter>
                          {bankId === bank?.item_id && (
                            <Block
                              width={12}
                              height={12}
                              radius={12}
                              backgroundColor={COLORS.red4}></Block>
                          )}
                        </Block>
                      </Pressable>
                    ))}
                  </Block>
                )}
                <TextInput
                  height={41}
                  borderWidth={0.5}
                  borderColor={COLORS.lightGray1}
                  radius={8}
                  placeholder={'Nhập số tài khoản'}
                  placeholderTextColor={COLORS.placeholder}
                  fontSize={13}
                  regular
                  color={COLORS.placeholder}
                  paddingLeft={16}
                  value={
                    bankEdit ? bankNumber === bankEdit?.bank_number : bankNumber
                  }
                  onChangeText={setBankNumber}
                />
                <TextInput
                  height={41}
                  borderWidth={0.5}
                  borderColor={COLORS.lightGray1}
                  radius={8}
                  placeholder={'Nhập tên chủ tài khoản'}
                  placeholderTextColor={COLORS.placeholder}
                  fontSize={13}
                  regular
                  color={COLORS.placeholder}
                  paddingLeft={16}
                  value={bankAccount}
                  onChangeText={setBankAccount}
                />
                <TextInput
                  height={41}
                  borderWidth={0.5}
                  borderColor={COLORS.lightGray1}
                  radius={8}
                  placeholder={'Nhập chi nhánh ngân hàng'}
                  placeholderTextColor={COLORS.placeholder}
                  fontSize={13}
                  regular
                  color={COLORS.placeholder}
                  paddingLeft={16}
                  value={bankBranch}
                  onChangeText={setBankBranch}
                />
                <Block
                  width={width - 291}
                  height={19}
                  marginTop={18}
                  row
                  alignCenter>
                  <Pressable onPress={() => setBankDefault(!bankDefault)}>
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
              <Pressable
                onPress={addBank}
                marginTop={20}
                height={40}
                width={width - 48}
                marginHorizontal={12}
                backgroundColor={COLORS.red4}
                radius={8}
                justifyCenter
                alignCenter>
                <Text fontSize={14} semiBold color={COLORS.white}>
                  Thêm tài khoản
                </Text>
              </Pressable>
            </Block>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal> */}
    </Block>
  );
}
