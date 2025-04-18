import {Block, HeaderTitle, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS, FONTS} from '@theme';
import {bottomRoot} from 'navigation/navigationRef';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllVoucher from './components/AllVoucher';
import UsedVoucher from './components/UsedVoucher';
import {Modal, ScrollView} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
export default function Voucher() {
  const title = [
    {id: 1, title: 'Tất cả'},
    {id: 2, title: 'Đã dùng'},
  ];
  const [allVoucher, setAllVoucher] = useState(true);
  const [usedVoucher, setUsedVoucher] = useState(false);
  const handleVoucher = title => {
    setAllVoucher(false);
    setUsedVoucher(false);
    if (title === 'Tất cả') setAllVoucher(true);
    if (title === 'Đã dùng') setUsedVoucher(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_VOUCHER,
      params: {apply_for: 'service'},
    });
  }, [dispatch]);
  const vouchers = useSelector(state => state.getVoucher?.data || []);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width} height={93} backgroundColor={COLORS.white}>
        <HeaderTitle
          background
          canGoBack
          title={'Kho voucher'}
          colorIcon={COLORS.black1}
          colorText={COLORS.black1}
        />
        <Block
          marginTop={63}
          width={width - 24}
          height={30}
          marginHorizontal={12}
          row>
          {title.map(item => (
            <Pressable
              onPress={() => handleVoucher(item.title)}
              key={item.id}
              width={(width - 24) / 2}
              height={30}
              alignCenter
              spaceBetween>
              <Text
                fontSize={15}
                regular
                color={
                  (allVoucher && item.title === 'Tất cả') ||
                  (usedVoucher && item.title === 'Đã dùng')
                    ? COLORS.red4
                    : COLORS.black1
                }>
                {item.title}
              </Text>
              <Block
                height={2}
                width={'100%'}
                backgroundColor={
                  (allVoucher && item.title === 'Tất cả') ||
                  (usedVoucher && item.title === 'Đã dùng')
                    ? COLORS.red4
                    : ''
                }
              />
            </Pressable>
          ))}
        </Block>
      </Block>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        {allVoucher && <AllVoucher />}
        {usedVoucher && <UsedVoucher />}
      </ScrollView>
    </Block>
  );
}
