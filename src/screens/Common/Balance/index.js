import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Pressable,
  Text,
  ScrollView,
  NoneData,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {ConvertTimeStamp} from '@utils';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
import {formatCurrency} from 'utils/helper';
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
      <Image
        source={image.image_header_balance}
        width={width}
        height={225}
        resizeMode="cover">
        <HeaderTitle
          title={'Số dư tài khoản'}
          colorText={COLORS.white}
          colorIcon={COLORS.white}
          background={COLORS.transparent}
          root={bottomRoot}
          screenName={router.PROFILE_SCREEN}
        />
        <Block flex justifyEnd paddingBottom={85} alignCenter>
          <Text fontSize={40} bold color={COLORS.white}>
            {formatCurrency(userInfo?.wcoin)}
          </Text>
          <Text fontSize={14} regular color={COLORS.white} marginTop={12}>
            Số dư tài khoản
          </Text>
        </Block>
      </Image>
      <Block
        marginHorizontal={12}
        height={112.23}
        radius={15}
        backgroundColor={COLORS.white}
        marginTop={-56.115}
        alignCenter
        paddingHorizontal={12}
        row
        spaceBetween>
        <Pressable
          onPress={() => commonRoot.navigate(router.RECHARGE)}
          width={'31.5%'}
          alignCenter
          gap={9.9}>
          <Image
            source={icon.icon_recharge}
            width={50.32}
            height={41.07}
            resizeMode="cover"
          />
          <Text fontSize={14} regular color={COLORS.black2}>
            Nạp tiền
          </Text>
        </Pressable>
        <Pressable
          onPress={() => commonRoot.navigate(router.WITHDRAW)}
          width={'31.5%'}
          alignCenter
          gap={9.9}>
          <Image
            source={icon.icon_withdraw}
            width={50.32}
            height={41.07}
            resizeMode="cover"
          />
          <Text fontSize={14} regular color={COLORS.black2}>
            Rút tiền
          </Text>
        </Pressable>
        <Pressable
          onPress={() => commonRoot.navigate(router.HISTORY)}
          width={'31.5%'}
          alignCenter
          gap={9.9}>
          <Image
            source={icon.icon_transaction_history}
            width={50.32}
            height={41.07}
            resizeMode="cover"
          />
          <Text fontSize={14} regular color={COLORS.black2}>
            Lịch sử
          </Text>
        </Pressable>
      </Block>
      <Text
        fontSize={15}
        semiBold
        color={COLORS.black1}
        marginTop={24.8}
        marginLeft={12}>
        Giao dịch gần đây
      </Text>
      <Block marginHorizontal={12} marginTop={15}>
        {walletLog?.length === 0 ? (
          <NoneData />
        ) : (
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
                      {ConvertTimeStamp(log?.created_at)}
                    </Text>
                  </Block>
                </Block>
              ))
            )}
          </ScrollView>
        )}
      </Block>
    </Block>
  );
}
