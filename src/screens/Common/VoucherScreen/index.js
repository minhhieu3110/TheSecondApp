import {
  Block,
  HeaderTitle,
  Image,
  Pressable,
  StatusBar,
  Text,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS, FONTS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllVoucher from './components/AllVoucher';
import UsedVoucher from './components/UsedVoucher';
import {Modal, ScrollView} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import {icon} from '@assets';
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

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <Block width={width} height={93} backgroundColor={COLORS.white}>
        <HeaderTitle
          background
          canGoBack
          title={'Kho voucher'}
          colorIcon={COLORS.black1}
          colorText={COLORS.black1}
        />
        {allVoucher && (
          <Pressable
            onPress={() => commonRoot.navigate(router.EXCHANGE_POINT)}
            width={'25%'}
            height={28}
            absolute
            zIndex={10}
            right={12}
            top={13}
            backgroundColor={COLORS.pinkWhite2}
            radius={17}
            justifyCenter
            alignCenter>
            <Block rowCenter>
              <Image source={icon.icon_exchange_point} width={21} height={15} />
              <Text fontSize={12} regular color={COLORS.red4} marginLeft={14}>
                Đổi điểm
              </Text>
            </Block>
          </Pressable>
        )}

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
