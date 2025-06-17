import actions from '@actions';
import {icon} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  ModalConfirmExchange,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';

export default function ExchangePoint() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_USER_INFO,
    });
    dispatch({
      type: actions.EXCHANGE_POINT,
    });
  }, [dispatch]);
  const [show, setShow] = useState(false);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const exchange = useSelector(state => state.getListExchange?.data || []);
  const redeemVoucher = voucher_id => {
    dispatch({
      type: actions.REDEEM_VOUCHER,
      body: {voucher_id: voucher_id},
      onFail: error => {
        Toast.show({
          type: 'error',
          text1: error,
        });
      },
    });
  };
  return (
    <Block backgroundColor={COLORS.gray10} flex>
      <StatusBar />
      <HeaderTitle canGoBack title={'Đổi điểm'} />
      <Block rowCenter absolute zIndex={10} top={21} right={12}>
        <Text fontSize={15} regular color={COLORS.placeholder}>
          Điểm của bạn
        </Text>
        <Text fontSize={15} regular color={COLORS.red4} marginLeft={16}>
          {userInfo?.point}
        </Text>
      </Block>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <Block marginTop={15} marginHorizontal={12} gap={12}>
          {exchange?.map(exchange => (
            <Block key={exchange?.id}>
              <Pressable
                onPress={() =>
                  commonRoot.navigate(router.DETAIL_EXCHANGE_VOUCHER, {
                    id: exchange?.id,
                  })
                }
                paddingBottom={15}
                width={width - 24}
                backgroundColor={COLORS.white}>
                <Block height={187} borderTopRadius={5} overflow={'hidden'}>
                  <Image
                    source={{uri: `${URL_API.uploads}/${exchange?.picture}`}}
                    width={width - 24}
                    height={187}
                  />
                </Block>
                <Text
                  fontSize={14}
                  semiBold
                  color={COLORS.black2}
                  marginTop={14}
                  marginLeft={14}>
                  {exchange?.title}
                </Text>
                <Block
                  height={26}
                  marginTop={15}
                  marginHorizontal={12}
                  rowCenter
                  spaceBetween>
                  <Block rowCenter>
                    <Text fontSize={16} medium color={COLORS.red4}>
                      Đổi bằng {exchange?.point}
                    </Text>
                    <Image
                      source={icon.icon_point_exchange}
                      width={17.67}
                      height={17.67}
                      marginLeft={21}
                    />
                  </Block>
                  <Pressable
                    onPress={() => redeemVoucher(exchange?.id)}
                    width={97}
                    height={29}
                    backgroundColor={COLORS.pinkWhite2}
                    justifyCenter
                    radius={13}
                    alignCenter>
                    <Text fontSize={14} regular color={COLORS.red4}>
                      Đổi ngay
                    </Text>
                  </Pressable>
                </Block>
              </Pressable>
            </Block>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
}
