import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Pressable,
  Text,
  ScrollView,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
import {convertDate, formatCurrency} from 'utils/helper';
export default function Balance() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_USER_INFO,
    });
    dispatch({
      type: actions.WALLET_LOG,
    });
  }, [dispatch]);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const walletLog = useSelector(state => state.walletLog?.data || []);
  const {isLoading} = useSelector(state => state.walletLog);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block
        width={width}
        height={225}
        backgroundColor={COLORS.white}
        alignCenter>
        <HeaderTitle
          background
          screenName={router.PROFILE_SCREEN}
          root={bottomRoot}
          title={'Số dư khả dụng'}
          colorIcon={COLORS.white}
          colorText={COLORS.white}
        />
        <Image
          source={image.image_header_balance}
          width={'100%'}
          height={'100%'}
          resizeMode="cover"
        />
        <Block absolute zIndex={10} top={74} alignCenter>
          <Text fontSize={40} bold color={COLORS.white}>
            {formatCurrency(userInfo?.wcoin)}
          </Text>
          <Text fontSize={14} regular color={COLORS.gray11}>
            Số dư khả dụng
          </Text>
        </Block>
      </Block>
      <Block
        width={width - 24}
        height={112.23}
        backgroundColor={COLORS.white}
        radius={15}
        marginLeft={12}
        marginTop={-64}>
        <Block
          width={width - 48}
          height={64.93}
          row
          alignCenter
          spaceBetween
          marginHorizontal={12}
          marginTop={20}>
          <Pressable
            onPress={() => commonRoot.navigate(router.RECHARGE)}
            width={width - 309}
            alignCenter>
            <Block width={50.32} height={41.07}>
              <Image
                source={icon.icon_recharge}
                width={'100%'}
                height={'100%'}
                resizeMode="contain"
              />
            </Block>
            <Text fontSize={14} regular color={COLORS.black1}>
              Nạp tiền
            </Text>
          </Pressable>
          <Pressable
            onPress={() => commonRoot.navigate(router.WITHDRAW)}
            width={width - 309}
            alignCenter>
            <Block width={50.32} height={41.07}>
              <Image
                source={icon.icon_withdraw}
                width={'100%'}
                height={'100%'}
                resizeMode="contain"
              />
            </Block>
            <Text fontSize={14} regular color={COLORS.black1} center>
              Rút tiền
            </Text>
          </Pressable>
          <Pressable
            onPress={() => commonRoot.navigate(router.HISTORY)}
            width={width - 309}
            alignCenter>
            <Block width={50.32} height={41.07}>
              <Image
                source={icon.icon_transaction_history}
                width={'100%'}
                height={'100%'}
                resizeMode="contain"
              />
            </Block>
            <Text fontSize={14} regular color={COLORS.black1} center>
              Lịch sử
            </Text>
          </Pressable>
        </Block>
      </Block>
      <Text
        fontSize={15}
        semiBold
        color={COLORS.black1}
        marginTop={24.8}
        marginLeft={12}>
        Giao dịch gần đây
      </Text>
      <Block width={width - 24} marginLeft={12} marginTop={15}>
        <ScrollView contentContainerStyle={{paddingBottom: 350}}>
          {isLoading ? (
            <ActivityIndicator color={COLORS.red4} />
          ) : (
            walletLog?.slice(0, 4)?.map(log => (
              <Block
                key={log?.exchange_code}
                paddingTop={12}
                paddingBottom={15}
                radius={8}
                backgroundColor={log?.exchange_type?.background}
                marginBottom={12}
                row>
                <Image
                  source={{
                    uri: `${URL_API.uploads}/${log?.exchange_type?.picture}`,
                  }}
                  width={40}
                  height={40}
                  marginLeft={12}
                  resizeMode="cover"
                />

                <Block marginLeft={12} marginTop={9}>
                  <Text fontSize={15} semiBold color={COLORS.textColor}>
                    {log?.exchange_type?.title}
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={log?.exchange_type?.color}
                    marginTop={16}>
                    {(log?.value_type === -1 && '-') ||
                      (log?.value_type === 1 && '+')}{' '}
                    {formatCurrency(log?.value)}
                  </Text>
                  <Text
                    width={width - 142}
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    numberOfLines={1}
                    marginTop={15}>
                    Quý khách đã thanh toán dịch vụ Chăm Sóc khach hang
                  </Text>
                </Block>
                <Block absolute top={23} right={11}>
                  <Text fontSize={14} regular color={COLORS.placeholder}>
                    {convertDate(log?.created_at)}
                  </Text>
                </Block>
              </Block>
            ))
          )}
        </ScrollView>
      </Block>
    </Block>
  );
}
