import {image} from '@assets';
import {Block, Image, Pressable, Text, TicketVoucherShape} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import {ConvertTimeStamp} from '@utils';
import {URL_API} from 'redux/sagas/common';
import {ActivityIndicator} from 'react-native';
export default function UsedVoucher() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_VOUCHER,
      params: {apply_for: 'service', type: 'use'},
    });
  }, [dispatch]);
  const vouchersUse = useSelector(state => state.getVoucher?.data || []);
  const {isLoading} = useSelector(state => state.getVoucher);

  return (
    <Block backgroundColor={COLORS.gray10} flex>
      <Block marginTop={15}>
        <Block marginHorizontal={12} gap={12}>
          {isLoading ? (
            <ActivityIndicator color={COLORS.red4} />
          ) : (
            vouchersUse?.map(item => (
              <Pressable
                key={item.id}
                disabled
                width={width - 24}
                radius={15}
                overflow={'hidden'}>
                <Block
                  height={150}
                  backgroundColor={COLORS.white}
                  radius={15}
                  row>
                  <Block
                    opacity={0.62}
                    width={92.06}
                    height={117.98}
                    marginTop={16}
                    marginLeft={13.8}
                    overflow={'hidden'}
                    radius={11}>
                    <Image
                      source={{uri: `${URL_API.uploads}/${item.picture}`}}
                      width={92.06}
                      height={117.98}
                      resizeMode="cover"
                    />
                  </Block>
                  <TicketVoucherShape />
                  <Block
                    width={width - 197}
                    height={107}
                    marginLeft={15.5}
                    marginTop={20}>
                    <Text fontSize={12} regular color={COLORS.placeholder}>
                      HSD: {ConvertTimeStamp(item?.date_end)}
                    </Text>
                    <Text
                      fontSize={16}
                      semiBold
                      color={COLORS.black1}
                      uppercase
                      marginTop={14}>
                      {item?.title_detail}
                    </Text>
                    <Text fontSize={12} regular color={COLORS.black1}>
                      {item?.apply_for}
                    </Text>
                    <Text
                      fontSize={12}
                      regular
                      color={COLORS.red4}
                      marginTop={28}>
                      Xem chi tiết
                    </Text>
                  </Block>
                </Block>
              </Pressable>
            ))
          )}
        </Block>
      </Block>
    </Block>
  );
}
