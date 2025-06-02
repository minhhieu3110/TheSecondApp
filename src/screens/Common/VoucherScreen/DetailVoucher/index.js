import actions from '@actions';
import {image} from '@assets';
import {
  Block,
  HeaderTitle,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Text,
} from '@components';
import Clipboard from '@react-native-clipboard/clipboard';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ConvertTimeStamp} from '@utils';
import {root} from 'navigation/navigationRef';
import {useEffect} from 'react';
import RenderHTML from 'react-native-render-html';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
export default function DetailVoucher({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.DETAIL_VOUCHER,
      params: {id: route?.params?.id},
    });
  }, [dispatch]);
  const detailVoucher = useSelector(
    state => state.getDetailVoucher?.data || [],
  );
  return (
    <Block backgroundColor={COLORS.gray10} flex>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
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
              uri: `${URL_API.uploads}/${detailVoucher?.picture_banner}`,
            }}
            width={'100%'}
            height={'100%'}
            resizeMode="cover"
          />
        </Block>
        <Block
          width={width - 24}
          height={734}
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
              {detailVoucher?.title_detail}
            </Text>
            <Text
              marginTop={7}
              fontSize={12}
              regular
              color={COLORS.placeholder}>
              HSD: {ConvertTimeStamp(detailVoucher?.date_end)}
            </Text>
            <Block
              height={40}
              radius={5}
              marginTop={15}
              backgroundColor={COLORS.yellow3}
              justifyCenter
              alignCenter>
              <Block height={23} row alignCenter>
                <Text
                  uppercase
                  fontSize={16}
                  medium
                  color={COLORS.red4}
                  marginTop={0}>
                  {detailVoucher?.promotion_id}
                </Text>
                <Pressable
                  marginLeft={10}
                  onPress={() =>
                    Clipboard.setString(detailVoucher?.promotion_id)
                  }>
                  <Icon
                    IconType={Ionicons}
                    iconName={'copy-outline'}
                    iconColor={COLORS.red4}
                    iconSize={21}
                  />
                </Pressable>
              </Block>
            </Block>
            <Text fontSize={15} semiBold color={COLORS.black1} marginTop={20}>
              Ưu đãi
            </Text>
            <Block marginTop={15}>
              <RenderHTML
                contentWidth={width - 48}
                source={{html: detailVoucher?.short}}
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
                source={{html: detailVoucher?.content}}
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
    </Block>
  );
}
