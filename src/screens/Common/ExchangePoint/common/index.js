import actions from '@actions';
import {image} from '@assets';
import {
  Block,
  Button,
  Icon,
  Image,
  ModalConfirmExchange,
  ModalExchangeVoucherSuccess,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {ConvertDateTimeStamp} from '@utils';
import {commonRoot, root} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import RenderHTML from 'react-native-render-html';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
export default function DetailVoucherExchange({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.DETAIL_EXCHANGE_POINT,
      params: {id: route?.params?.id},
    });
  }, [dispatch]);
  const detailExchange = useSelector(
    state => state.getDetailExchange?.data || [],
  );
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const redeemVoucher = voucher_id => {
    dispatch({
      type: actions.REDEEM_VOUCHER,
      body: {voucher_id: voucher_id},
      onSuccess: () => {
        Toast.show({
          type: 'success',
          text1: 'Đổi điểm thành công',
        });
        setShow(!show);
        setShowSuccess(!showSuccess);
        dispatch({type: actions.GET_USER_INFO});
      },
      onFail: error => {
        Toast.show({
          type: 'error',
          text1: error || 'Số điểm của bạn không đủ',
        });
      },
    });
  };
  const voucher = useSelector(state => state.redeemVoucher?.data || []);

  return (
    <Block backgroundColor={COLORS.gray10} flex>
      <StatusBar />
      <ScrollView contentContainerStyle={{paddingBottom: 190}}>
        <Block width={width} height={199.6}>
          <Pressable
            zIndex={10}
            absolute
            left={12}
            top={13}
            width={30}
            height={30}
            backgroundColor={COLORS.black}
            radius={15}
            alignCenter
            opacity={0.6}
            justifyCenter
            onPress={() => root.goBack()}>
            <Icon
              IconType={Ionicons}
              iconName={'chevron-back'}
              iconSize={30}
              iconColor={COLORS.white}
            />
          </Pressable>
          <Image
            source={{
              uri: `${URL_API.uploads}/${detailExchange?.picture}`,
            }}
            width={'100%'}
            height={'100%'}
            resizeMode="cover"
          />
        </Block>
        <Block
          width={width - 24}
          paddingBottom={42}
          marginTop={-19.6}
          marginLeft={12}
          backgroundColor={COLORS.white}
          radius={8}>
          <Block width={width - 48} marginLeft={12}>
            <Text
              fontSize={18}
              semiBold
              color={COLORS.black1}
              uppercase
              marginTop={12}>
              {detailExchange?.title}
            </Text>
            <Text
              marginTop={7}
              fontSize={12}
              regular
              color={COLORS.placeholder}>
              HSD: {detailExchange?.exchange_date_end}
            </Text>
            <Text fontSize={15} semiBold color={COLORS.black1} marginTop={20}>
              Ưu đãi
            </Text>
            <Block marginTop={15}>
              <RenderHTML
                contentWidth={width - 48}
                source={{html: detailExchange?.short}}
                tagsStyles={{
                  p: {
                    fontSize: 14,
                    color: COLORS.black1,
                    fontWeight: 'regular',
                    lineHeight: 22,
                  },
                }}
              />
            </Block>
            <Text fontSize={15} semiBold color={COLORS.black1} marginTop={24}>
              Điều kiện áp dụng
            </Text>
            <Block marginTop={15}>
              <RenderHTML
                contentWidth={width - 48}
                source={{html: detailExchange?.content}}
                tagsStyles={{
                  p: {
                    fontSize: 14,
                    fontWeight: 'regular',
                    color: COLORS.black1,
                    lineHeight: 22,
                  },
                }}
              />
            </Block>
          </Block>
        </Block>
      </ScrollView>
      <Button title="Đổi điểm" onPress={() => setShow(true)} />
      <ModalConfirmExchange
        visible={show}
        close={() => setShow(!show)}
        point={detailExchange?.point}
        onPress={() => redeemVoucher(detailExchange?.id)}
      />
      <ModalExchangeVoucherSuccess
        visible={showSuccess}
        date={ConvertDateTimeStamp(voucher?.date_end)}
        onPress1={() => {
          commonRoot.navigate(router.DETAIL_VOUCHER, {id: voucher?.id});
          setShowSuccess(!showSuccess);
        }}
        onPress2={() => root.goBack()}
      />
    </Block>
  );
}
