import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  RankStar,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {formatCurrency} from '@utils/helper';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AirbnbRating} from 'react-native-ratings';
export default function EvaluateOrder({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.DETAIL_ORDER,
      params: {id: route?.params?.id},
    });
  }, [dispatch, route?.params?.id]);
  const detailOrder = useSelector(state => state.detailOrder?.data || []);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Đánh giá'} />
      <Block marginTop={15} marginHorizontal={12}>
        <Block paddingBottom={14} radius={8} backgroundColor={COLORS.white}>
          {detailOrder?.details?.map(item => (
            <Block
              key={item.product_item_id}
              row
              marginTop={12}
              marginLeft={12}
              marginRight={17}>
              <Block width={73} height={73} radius={5} overflow={'hidden'}>
                <Image
                  source={{uri: item?.product?.picture}}
                  width={'100%'}
                  height={'100%'}
                  resizeMode="cover"
                />
              </Block>
              <Block marginLeft={12}>
                <Text
                  fontSize={15}
                  medium
                  color={COLORS.black2}
                  numberOfLines={1}>
                  {item?.product?.title}
                </Text>
                <Block rowCenter gap={20} marginTop={21}>
                  <Text fontSize={14} semiBold color={COLORS.red4}>
                    {formatCurrency(item?.price_sale)}
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    lineThrough>
                    {formatCurrency(item?.price)}
                  </Text>
                </Block>
              </Block>
            </Block>
          ))}
        </Block>
        <Block
          radius={8}
          marginTop={12}
          paddingBottom={12.5}
          alignCenter
          backgroundColor={COLORS.white}>
          <Text fontSize={16} semiBold color={COLORS.black2} marginTop={21}>
            Đánh giá
          </Text>
          {/* <RankStar top={15} width={width - 201.51} size={36.5} /> */}

          <AirbnbRating
            count={5}
            defaultRating={0}
            size={36.5}
            // selectedColor={COLORS.yellow}
            // showRating
            starContainerStyle={{
              marginTop: 10,
              justifyContent: 'space-between',
              width: 220,
            }}
          />
          <Block
            width={width - 48}
            marginTop={15.5}
            marginHorizontal={12}
            borderWidth={1}
            borderColor={COLORS.gray15}
          />
          <TextInput
            marginTop={11.5}
            paddingLeft={10}
            paddingTop={13}
            radius={5}
            borderWidth={1}
            borderColor={COLORS.gray15}
            width={width - 48}
            height={76}
            placeholder={'Chia sẻ cảm nhận của bạn'}
            regular
            fontSize={14}
            placeholderTextColor={COLORS.lightGray1}
            color={COLORS.black}
          />
        </Block>
        <Text marginTop={20} fontSize={15} semiBold color={COLORS.black2}>
          Hình ảnh
        </Text>
        <Block
          marginTop={13}
          width={177}
          height={177}
          backgroundColor={COLORS.pinkWhite2}
          borderDashed={5}
          radius={10}
          borderWidth={1}
          borderColor={COLORS.red4}>
          <Image
            source={icon.icon_upload_image}
            width={47}
            height={46.95}
            marginHorizontal={65}
            marginTop={65}
          />
          <Text
            fontSize={16}
            regular
            color={COLORS.black2}
            marginTop={16}
            marginLeft={37}>
            Ảnh đính kèm
          </Text>
        </Block>
        <Block
          marginTop={30}
          height={48}
          radius={8}
          backgroundColor={COLORS.red4}
          justifyCenter
          alignCenter>
          <Text fontSize={15} regular color={COLORS.white}>
            Gửi đánh giá
          </Text>
        </Block>
      </Block>
    </Block>
  );
}
