import {Block, Text, Image, StatusBar, ScrollView} from '@components';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import actions from '@actions';
import {URL_API} from 'redux/sagas/common';
import {convertDate, formatCurrency} from 'utils/helper';
export default function WithDraw() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.WALLET_LOG,
      params: {type: 'withdrawal'},
    });
  }, [dispatch]);
  const withdrawalLog = useSelector(state => state.walletLog?.data || []);
  const {isLoading} = useSelector(state => state.walletLog);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <Block width={width - 24} marginLeft={12} marginTop={15}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 1000}}>
          {isLoading ? (
            <ActivityIndicator color={COLORS.red4} />
          ) : (
            withdrawalLog?.map(log => (
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
